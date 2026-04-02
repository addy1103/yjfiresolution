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
      const urgencyClass = msg.timeline?.includes('Emergency') ? 'urgency-high' : 'urgency-low';
      
      const isNew = msg.status === 'New';
      const statusClass = isNew ? 'new' : 'read';

      return `
        <tr id="row-${msg.id}">
          <td>
            <div class="lead-name">${msg.name}</div>
            <div class="lead-subtext">${msg.email}</div>
          </td>
          <td>
            <div class="service-badge">${msg.service_type || 'General'}</div>
          </td>
          <td>
            <div style="font-size: 0.9rem; font-weight: 500;">${msg.location || 'Tri-State'}</div>
            <div style="font-size: 0.75rem; color: #475569;">${formattedDate}</div>
          </td>
          <td>
            <span class="timeline-badge ${urgencyClass}">${msg.timeline || 'Planning'}</span>
          </td>
          <td>
            <div class="action-row">
              <span class="status-pill ${statusClass}">${msg.status}</span>
              <div class="action-btns">
                <button class="btn-icon" onclick="viewMessage('${msg.id}')" title="View Details">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon" onclick="updateStatus(${msg.id}, 'Read')" title="Mark Read">
                  <i class="fas fa-check"></i>
                </button>
                <button class="btn-icon" onclick="deleteMessage(${msg.id})" title="Delete">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
            <!-- Hidden details content -->
            <div id="details-${msg.id}" style="display:none;">
              <strong>Project Description:</strong><br>
              ${msg.message || 'No description provided.'}
              <br><br>
              <strong>Contact Phone:</strong> ${msg.phone || 'N/A'}
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

window.viewMessage = (id) => {
  const content = document.getElementById(`details-${id}`).innerHTML;
  alert('--- PROJECT INQUIRY DETAILS ---\n\n' + content.replace(/<br>/g, '\n').replace(/<strong>|<\/strong>/g, ''));
};

// Start Dashboard
loadMessages();
// Auto refresh every 60 seconds
setInterval(loadMessages, 60000);
