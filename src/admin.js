// YJ Dashboard Management Logic

async function loadMessages() {
  const body = document.getElementById('inboxBody');
  const countTotal = document.getElementById('count-total');
  const countNew = document.getElementById('count-new');

  try {
    const res = await fetch('/api/admin/messages');
    const messages = await res.json();

    // Update Stats
    countTotal.textContent = messages.length;
    const newLeads = messages.filter(m => m.status === 'New').length;
    countNew.textContent = newLeads;

    if (messages.length === 0) {
      body.innerHTML = '<tr><td colspan="5" style="padding: 100px; text-align:center; color: #475569;">No project inquiries found.</td></tr>';
      return;
    }

    body.innerHTML = messages.map(msg => {
      const date = new Date(msg.created_at);
      const formattedDate = date.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
      const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

      const isNew = msg.status === 'New';
      const statusClass = isNew ? 'new' : 'read';

      return `
        <tr id="row-${msg.id}">
          <td>
            <div class="lead-name">${msg.name}</div>
            <div class="lead-subtext" style="max-width: 320px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
              ${msg.message || 'No project description provided'}
            </div>
          </td>
          <td>
            <div style="font-weight: 500; font-size: 0.9rem;">${msg.email}</div>
            <div class="lead-subtext">${msg.phone || 'No phone'}</div>
          </td>
          <td>
            <div style="font-size: 0.88rem;">${formattedDate}</div>
            <div class="lead-subtext">${formattedTime}</div>
          </td>
          <td>
            <span class="status-pill ${statusClass}">${msg.status}</span>
          </td>
          <td>
            <div class="action-btns">
              <button class="btn-icon" onclick="updateStatus(${msg.id}, 'Read')" title="Mark as Read">
                <i class="fas fa-check"></i>
              </button>
              <button class="btn-icon" onclick="updateStatus(${msg.id}, 'Archived')" title="Archive">
                <i class="fas fa-archive"></i>
              </button>
              <button class="btn-icon" onclick="deleteMessage(${msg.id})" title="Delete">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

  } catch (err) {
    body.innerHTML = '<tr><td colspan="5" style="color: #dc2626; padding: 40px; text-align: center;">Unable to connect to Private Backend.</td></tr>';
  }
}

// Event Handlers
window.updateStatus = async (id, status) => {
  try {
    const res = await fetch(`/api/admin/messages/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    if (res.ok) loadMessages();
  } catch (err) {
    alert('Failed to update status');
  }
};

window.deleteMessage = async (id) => {
  if (!confirm('Are you sure you want to delete this project lead?')) return;
  try {
    const res = await fetch(`/api/admin/messages/${id}`, { method: 'DELETE' });
    if (res.ok) loadMessages();
  } catch (err) {
    alert('Delete failed');
  }
};

// Start Dashboard
loadMessages();
// Auto refresh every 60 seconds
setInterval(loadMessages, 60000);
