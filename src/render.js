export const renderNavbar = () => `
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#home" class="nav-logo">
        <img src="/logo-yj.svg" alt="YJ Firesolutions Logo" class="nav-logo-img">
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
    <div class="hero-noise"></div>
    <div class="hero-glow"></div>

    <div class="hero-split">
      <!-- LEFT: Content -->
      <div class="hero-left">
        <div class="hero-eyebrow">
          <span class="eyebrow-dot"></span>
          <span>Firestop Installation &amp; Inspection</span>
        </div>

        <h1 class="hero-title">
          We seal<br>
          <span class="title-gradient">penetrations.</span><br>
          <span class="title-sub">You stay code-compliant.</span>
        </h1>

        <p class="hero-subtitle">
          YJ Firesolutions handles firestop for general contractors across the
          tri-state area. Pipe sleeves, cable trays, curtain walls &mdash; if it
          goes through a rated assembly, we seal it right.
        </p>

        <div class="hero-certs">
          <span class="cert-badge"><i class="fas fa-shield-halved"></i> Hilti Certified</span>
          <span class="cert-badge"><i class="fas fa-certificate"></i> STI Trained</span>
          <span class="cert-badge"><i class="fas fa-award"></i> 3M Approved</span>
        </div>

        <div class="hero-buttons">
          <a href="#contact" class="btn btn-hero-primary">
            <i class="fas fa-clipboard-list"></i> Get a Free Quote
          </a>
          <a href="#work" class="btn btn-hero-outline">
            <i class="fas fa-images"></i> View Our Work
          </a>
        </div>
      </div>

      <!-- RIGHT: Image -->
      <div class="hero-right">
        <!-- Image frame — clean, no overflow clipping of chips -->
        <div class="hero-image-frame">
          <img src="/projects/hero-worker.jpg" alt="YJ Firesolutions technician applying firestop sealant" class="hero-photo">
          <div class="hero-image-overlay"></div>
        </div>

        <!-- Floating stat chips — siblings of frame, NOT inside it -->
        <div class="hero-chip hero-chip--tl">
          <i class="fas fa-fire-flame-curved"></i>
          <div>
            <strong>500+</strong>
            <span>Projects Done</span>
          </div>
        </div>
        <div class="hero-chip hero-chip--br">
          <i class="fas fa-circle-check"></i>
          <div>
            <strong>100%</strong>
            <span>Inspection Pass Rate</span>
          </div>
        </div>

        <!-- Experience badge — sibling of frame -->
        <div class="hero-exp-badge">
          <span class="exp-num">14</span>
          <span class="exp-label">Years<br>Experience</span>
        </div>

        <!-- Decorative lines -->
        <div class="hero-deco-line hero-deco-line--v"></div>
        <div class="hero-deco-line hero-deco-line--h"></div>
      </div>
    </div>

    <!-- Bottom trust bar -->
    <div class="hero-bottom-bar">
      <div class="hero-stat">
        <strong>500+</strong>
        <span>Projects Completed</span>
      </div>
      <div class="hero-stat-divider"></div>
      <div class="hero-stat">
        <strong>14 yrs</strong>
        <span>In the Industry</span>
      </div>
      <div class="hero-stat-divider"></div>
      <div class="hero-stat">
        <strong>100%</strong>
        <span>Inspection Pass Rate</span>
      </div>
      <div class="hero-stat-divider"></div>
      <div class="hero-stat">
        <strong>Tri-State</strong>
        <span>Coverage Area</span>
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
      img: '/projects/installation-pipe-ceiling.jpg',
      title: 'Penetration Firestopping',
      desc: 'The bread and butter. We seal around pipes, conduits, cables, and ducts where they pass through fire-rated walls and floors.'
    },
    {
      img: '/projects/firestop-wall-sealing.jpg',
      title: 'Fire Barriers & Safing',
      desc: 'Perimeter fire containment at curtain walls, edge-of-slab conditions, and area separation walls.'
    },
    {
      img: '/projects/cable-tray-penetration.jpg',
      title: 'Electrical & Mechanical Seals',
      desc: 'Cable tray penetrations, bus duct openings, HVAC sleeves — the stuff that gets missed until inspection day.'
    },
    {
      img: '/projects/inspection-tablet.jpg',
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
          <img src="/projects/cable-bundle-sealing.jpg"
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
        ${[
          { title: 'Scope Review', desc: 'We review architectural drawings and specs to verify UL-classified systems for every penetration type.' },
          { title: 'Mobilization', desc: 'Our certified crews arrive with the right materials, ready to tackle complex firestop challenges.' },
          { title: 'Installation', desc: 'Precision application of sealants, sprays, and devices to ensure strict compliance with fire codes.' },
          { title: 'Closeout', desc: 'Comprehensive photo documentation and reporting provided for smooth AHJ inspections.' }
        ].map((step, i) => `
          <div class="step">
            <div class="step-header">
              <span class="step-num">0${i + 1}</span>
            </div>
            <h3>${step.title}</h3>
            <p>${step.desc}</p>
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
          <img src="/projects/cable-tray-penetration.jpg" alt="Cable Tray Firestopping Installation">
          <div class="work-overlay">
            <div class="work-info">
              <span class="work-tag">Commercial</span>
              <h3>High-Density Cable Tray Sealing</h3>
              <p>Full firestopping of overhead cable tray runs at rated wall penetrations in a large commercial facility.</p>
            </div>
          </div>
        </div>
        <div class="work-card">
          <img src="/projects/installation-pipe-ceiling.jpg" alt="Pipe Ceiling Firestop Installation">
          <div class="work-overlay">
            <div class="work-info">
              <span class="work-tag">Industrial</span>
              <h3>Overhead Pipe Penetration Seals</h3>
              <p>Multi-pipe sleeve firestopping on ceiling-mounted mechanical runs.</p>
            </div>
          </div>
        </div>
        <div class="work-card">
          <img src="/projects/cable-bundle-sealing.jpg" alt="Cable Bundle Firestop Sealing">
          <div class="work-overlay">
            <div class="work-info">
              <span class="work-tag">Mixed-Use</span>
              <h3>Cable Bundle Wall Penetrations</h3>
              <p>Intumescent sealing of complex cable bundle arrays passing through rated compartment walls.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="work-gallery-strip">
        <div class="gallery-card">
          <img src="/projects/kingspan-pipe-wall.jpg" alt="Kingspan Pipe Wall Assembly">
          <div class="work-overlay">
            <div class="work-info">
              <span class="work-tag">Penetration</span>
              <h3>Insulated Pipe Wall Assembly</h3>
              <p>Kingspan-insulated pipe passing through a rated block wall with firestop wrap and board seal.</p>
            </div>
          </div>
        </div>
        <div class="gallery-card">
          <img src="/projects/duct-barrier-penetration.jpg" alt="Duct Barrier Penetration">
          <div class="work-overlay">
            <div class="work-info">
              <span class="work-tag">HVAC</span>
              <h3>HVAC Duct Barrier Penetration</h3>
              <p>Fire barrier board installation around large HVAC ductwork passing through a rated compartment.</p>
            </div>
          </div>
        </div>
        <div class="gallery-card">
          <img src="/projects/multi-pipe-floor-seal.jpg" alt="Multi Pipe Floor Seal">
          <div class="work-overlay">
            <div class="work-info">
              <span class="work-tag">Healthcare</span>
              <h3>Multi-Pipe Floor Penetrations</h3>
              <p>High-density pipe sealing across a horizontal rated assembly — copper, conduit and insulated runs.</p>
            </div>
          </div>
        </div>
        <div class="gallery-card">
          <img src="/projects/insulated-pipe-runs.jpg" alt="Insulated Pipe Runs">
          <div class="work-overlay">
            <div class="work-info">
              <span class="work-tag">Mechanical</span>
              <h3>Kooltherm Pipe Run Sealing</h3>
              <p>Firestopping of Kooltherm-wrapped pipe arrays at rated wall junction in a commercial building.</p>
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
            <div class="form-row">
              <div class="form-group">
                <label>Phone Number <span class="optional">(optional)</span></label>
                <input type="tel" name="phone" placeholder="(555) 000-0000">
              </div>
              <div class="form-group">
                <label>Project Location</label>
                <input type="text" name="location" placeholder="City, State" required>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Service Category</label>
                <select name="service_type" class="custom-select">
                  <option value="Penetration Sealing">Penetration Sealing</option>
                  <option value="HVAC/Mechanical">HVAC / Mechanical</option>
                  <option value="Electrical/Data">Electrical / Data</option>
                  <option value="Perimeter Firestop">Perimeter Firestop</option>
                  <option value="Inspection Only">Inspection Only</option>
                  <option value="Other">Other (Note in details)</option>
                </select>
              </div>
              <div class="form-group">
                <label>Desired Timeline</label>
                <select name="timeline" class="custom-select">
                  <option value="Emergency (Immediate)">Emergency (Immediate)</option>
                  <option value="Within 1 Week">Within 1 Week</option>
                  <option value="2-4 Weeks">2-4 Weeks</option>
                  <option value="Planning Phase">Planning Phase</option>
                </select>
              </div>
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
            <img src="/logo-yj.svg" alt="YJ Firesolutions Logo" class="nav-logo-img" style="height: 48px; filter: grayscale(1) brightness(1.5);">
          </a>
          <p>The tri-state's trusted partner for code-compliant firestop installation and professional inspection services since 2011.</p>
          <div class="social-links">
            <a href="#" aria-label="Follow us on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Follow us on Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Follow us on Facebook"><i class="fab fa-facebook-f"></i></a>
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
