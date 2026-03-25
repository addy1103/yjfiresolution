export const renderNavbar = () => `
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#home" class="nav-logo">
        <span class="logo-icon"><i class="fas fa-fire-flame-curved"></i></span>
        <span class="logo-text">YJ<span class="logo-highlight">Fire</span>solutions</span>
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="#home" class="nav-link active">Home</a></li>
        <li><a href="#services" class="nav-link">Services</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#work" class="nav-link">Our Work</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
      <a href="tel:+15551234567" class="nav-cta"><i class="fas fa-phone"></i> (555) 123-4567</a>
      <button class="hamburger" id="hamburger" aria-label="Toggle navigation menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
`;

export const renderHero = () => `
  <section class="hero" id="home">
    <div class="hero-bg-image"></div>
    <div class="hero-overlay"></div>
    <div class="hero-red-accent"></div>
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-eyebrow">
          <span class="eyebrow-line"></span>
          <span>Firestop Installation &amp; Inspection</span>
        </div>
        <h1 class="hero-title">
          We seal penetrations.<br>
          <span class="title-accent">You stay code-compliant.</span>
        </h1>
        <p class="hero-subtitle">
          YJ Firesolutions handles firestop for general contractors across the tri-state area.
          Pipe sleeves, cable trays, curtain walls — if it goes through a rated assembly, we seal it right.
        </p>
        <div class="hero-buttons">
          <a href="#contact" class="btn btn-hero-primary">Get a Quote</a>
          <a href="#services" class="btn btn-hero-outline">See What We Do</a>
        </div>
      </div>
    </div>
    <div class="hero-bottom-bar">
      <div class="hero-stat">
        <strong>500+</strong>
        <span>Projects</span>
      </div>
      <div class="hero-stat-divider"></div>
      <div class="hero-stat">
        <strong>14 yrs</strong>
        <span>Experience</span>
      </div>
      <div class="hero-stat-divider"></div>
      <div class="hero-stat">
        <strong>100%</strong>
        <span>Inspection Pass Rate</span>
      </div>
    </div>
  </section>
`;

export const renderServices = () => `
  <section class="services" id="services">
    <div class="container">
      <div class="section-intro">
        <h2>What we do</h2>
        <p>Most of our work falls into four categories. If you're not sure what you need, just call — we'll walk through
          it with you.</p>
      </div>
      <div class="services-grid">
        ${[
    {
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
      title: 'Penetration Firestopping',
      desc: 'The bread and butter. We seal around pipes, conduits, cables, and ducts where they pass through fire-rated walls and floors.'
    },
    {
      img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      title: 'Fire Barriers & Safing',
      desc: 'Perimeter fire containment at curtain walls, edge-of-slab conditions, and area separation walls.'
    },
    {
      img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop',
      title: 'Electrical & Mechanical Seals',
      desc: 'Cable tray penetrations, bus duct openings, HVAC sleeves — the stuff that gets missed until inspection day.'
    },
    {
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
      title: 'Inspections & Documentation',
      desc: 'We photo-document every penetration and provide inspection-ready reports for the AHJ.'
    }
  ].map(s => `
          <div class="service-card">
            <div class="service-image">
              <img src="${s.img}" alt="${s.title}" loading="lazy">
            </div>
            <div class="service-body">
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`;

export const renderAbout = () => `
  <section class="about" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-image-col">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=900&fit=crop"
            alt="YJ Firesolutions crew on job site" loading="lazy" class="about-photo">
          <div class="experience-tag">
            <strong>Est. 2011</strong>
          </div>
        </div>
        <div class="about-content">
          <h2>A bit about us</h2>
          <p>
            We started YJ Firesolutions because we kept seeing the same problem: firestop getting treated as an afterthought.
            Subs would stuff mineral wool in a hole and call it done. We figured there was a better way.
          </p>
          <p>
            Today we run crews across commercial, healthcare, and mixed-use projects. Our guys are trained and certified
            through Hilti, STI, and 3M. That matters when the inspector shows up.
          </p>
          <div class="about-stats">
            <div class="about-stat">
              <span class="stat-val">500+</span>
              <span class="stat-desc">projects completed</span>
            </div>
            <div class="about-stat">
              <span class="stat-val">14</span>
              <span class="stat-desc">years in business</span>
            </div>
            <div class="about-stat">
              <span class="stat-val">Zero</span>
              <span class="stat-desc">failed inspections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

export const renderProcess = () => `
  <section class="process">
    <div class="container">
      <div class="section-intro">
        <h2>How we work</h2>
      </div>
      <div class="process-steps">
        ${['Scope Review', 'Mobilization', 'Installation', 'Closeout'].map((step, i) => `
          <div class="step">
            <span class="step-num">0${i + 1}</span>
            <h3>${step}</h3>
            <p>Every step of our process is designed to ensure maximum code compliance and project efficiency.</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`;

export const renderWork = () => `
  <section class="work" id="work">
    <div class="container">
      <div class="section-intro">
        <div class="intro-badge">PREMIUM PORTFOLIO</div>
        <h2>Our Latest Projects</h2>
        <p>A selection of high-compliance firestop installations across the Tri-State area.</p>
      </div>
      <div class="work-grid">
        <div class="work-card work-large">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&h=600&fit=crop" alt="Metro Tower Construction">
          <div class="work-overlay">
            <div class="work-info">
              <span class="work-tag">Commercial</span>
              <h3>Metro Tower, 40 Floors</h3>
              <p>Vertical penetration sealing and smoke compartmentation for 400,000 sq.ft. of office space.</p>
            </div>
          </div>
        </div>
        <div class="work-card">
          <img src="https://images.unsplash.com/photo-1503387762-592dea58ef21?w=600&h=500&fit=crop" alt="Hospital Safety Project">
          <div class="work-overlay">
            <div class="work-info">
              <span class="work-tag">Healthcare</span>
              <h3>Regional Medical Center</h3>
              <p>Critical smoke seal maintenance in operative surgical units.</p>
            </div>
          </div>
        </div>
        <div class="work-card">
          <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ec4?w=600&h=500&fit=crop" alt="Data Center Firewall">
          <div class="work-overlay">
            <div class="work-info">
              <span class="work-tag">Industrial</span>
              <h3>Global Data Hub</h3>
              <p>Installation of high-density cable transit systems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

export const renderContact = () => `
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-left">
          <h2>Let's talk about your project</h2>
          <p>
            Whether you need a bid on a new build or a code-compliance review,
            we're ready to mobilization. No obligation, just expert advice.
          </p>
          <div class="contact-details">
            <div class="contact-item">
              <i class="fas fa-phone-alt"></i>
              <div>
                <strong>Call Us</strong>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <div>
                <strong>Email Info</strong>
                <p>info@yjfiresolutions.com</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <strong>Main Office</strong>
                <p>Newark, NJ — Serving the Tri-State</p>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-right">
          <form class="contact-form" id="contactForm">
            <div class="form-row">
              <div class="form-group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="John Doe" required>
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="john@company.com" required>
              </div>
            </div>
            <div class="form-group">
              <label>Phone Number <span class="optional">(optional)</span></label>
              <input type="tel" name="phone" placeholder="(555) 000-0000">
            </div>
            <div class="form-group">
              <label>Project Details</label>
              <textarea name="message" rows="5" placeholder="Tell us about the project scope, location, and timeline..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-submit" id="submitBtn">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
`;

export const renderFooter = () => `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#home" class="nav-logo">
            <span class="logo-icon"><i class="fas fa-fire-flame-curved"></i></span>
            <span class="logo-text">YJ<span class="logo-highlight">Fire</span>solutions</span>
          </a>
          <p>The tri-state's trusted partner for code-compliant firestop installation and professional inspection services since 2011.</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
        
        <div class="footer-nav-col">
          <h3 class="footer-title">Navigation</h3>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#about">About Company</a></li>
            <li><a href="#work">Recent Work</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div class="footer-contact-col">
          <h3 class="footer-title">Contact</h3>
          <div class="footer-contact-info">
            <div class="footer-contact-item">
              <i class="fas fa-phone"></i>
              <span>(555) 123-4567</span>
            </div>
            <div class="footer-contact-item">
              <i class="fas fa-envelope"></i>
              <span>info@yjfiresolutions.com</span>
            </div>
            <div class="footer-contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>Newark, New Jersey</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 YJ Firesolutions. All rights reserved.</p>
        <div class="footer-legal">
          <a href="#" style="color: var(--gray-600); text-decoration: none; margin-left: 20px;">Privacy Policy</a>
          <a href="#" style="color: var(--gray-600); text-decoration: none; margin-left: 20px;">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
  <div class="toast" id="toast">
    <i class="fas fa-check-circle"></i>
    <span>Message sent! We'll be in touch.</span>
  </div>
`;
