/* ==========================================================================
   LUROVA OTT - MOBILE-OPTIMIZED MASTER STYLESHEET
   ========================================================================== */

/* --- Dark Theme Variables (Default) --- */
body.dark-theme {
  --bg-main: #090b0e;
  --bg-card: rgba(18, 22, 31, 0.85);
  --bg-card-hover: rgba(28, 35, 50, 0.95);
  --text-main: #f3f4f6;
  --text-muted: #9ca3af;
  --border-glass: rgba(255, 255, 255, 0.12);
  --input-bg: rgba(255, 255, 255, 0.05);
  --ambient-opacity: 0.55;
  --logo-box-bg: rgba(255, 255, 255, 0.03);
}

/* --- Light Theme Variables --- */
body.light-theme {
  --bg-main: #f4f6f9;
  --bg-card: rgba(255, 255, 255, 0.92);
  --bg-card-hover: #ffffff;
  --text-main: #111827;
  --text-muted: #4b5563;
  --border-glass: rgba(0, 0, 0, 0.12);
  --input-bg: rgba(0, 0, 0, 0.04);
  --ambient-opacity: 0.18;
  --logo-box-bg: rgba(0, 0, 0, 0.03);
}

:root {
  --primary-glow: #6366f1;
  --secondary-glow: #a855f7;
  --accent-pink: #ec4899;
  --radius-lg: 16px;
  --radius-md: 10px;
  --transition-smooth: 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-tap-highlight-color: transparent;
}

body {
  background-color: var(--bg-main);
  color: var(--text-main);
  overflow-x: hidden;
  transition: background-color 0.4s ease, color 0.4s ease;
  min-height: 100vh;
  width: 100%;
}

body.no-scroll {
  overflow: hidden;
}

/* --- Ambient Orbs --- */
.ambient-glow {
  position: fixed;
  border-radius: 50%;
  filter: blur(130px);
  z-index: -1;
  pointer-events: none;
  opacity: var(--ambient-opacity);
  transition: opacity 0.4s ease;
}

.glow-1 { width: 450px; height: 450px; background: var(--primary-glow); top: -100px; left: -100px; }
.glow-2 { width: 500px; height: 500px; background: var(--secondary-glow); top: 35%; right: -150px; }
.glow-3 { width: 350px; height: 350px; background: var(--accent-pink); bottom: 10%; left: 20%; }

/* --- Text Gradients --- */
.gradient-text {
  background: linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 4s linear infinite;
}

@keyframes shine { to { background-position: 200% center; } }

/* --- Navbar --- */
.navbar {
  position: sticky; top: 0; z-index: 100;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: rgba(10, 12, 16, 0.7);
  border-bottom: 1px solid var(--border-glass);
}

body.light-theme .navbar { background: rgba(255, 255, 255, 0.8); }

.nav-container {
  max-width: 1280px; margin: 0 auto;
  padding: 0.8rem 1.2rem;
  display: flex; justify-content: space-between; align-items: center;
}

.logo { display: flex; align-items: center; gap: 8px; font-size: 1.35rem; font-weight: 800; }
.logo-icon { color: var(--primary-glow); }
.logo-text .highlight { color: var(--accent-pink); }

.mobile-hamburger {
  display: none;
  background: transparent;
  border: none;
  color: var(--text-main);
  font-size: 1.4rem;
  cursor: pointer;
  padding: 0.4rem;
}

.nav-links { display: flex; list-style: none; gap: 1.5rem; }
.nav-links a { color: var(--text-muted); text-decoration: none; font-weight: 500; font-size: 0.9rem; }
.nav-links a:hover, .nav-links a.active { color: var(--text-main); }

.nav-actions { display: flex; gap: 0.6rem; align-items: center; }

/* --- Buttons --- */
.btn {
  padding: 0.6rem 1.1rem; border-radius: var(--radius-md);
  font-weight: 600; cursor: pointer; border: none; outline: none;
  transition: var(--transition-smooth);
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  font-size: 0.88rem;
  min-height: 42px;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-glow), var(--secondary-glow));
  color: #fff; box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(168, 85, 247, 0.5);
}

.btn-outline {
  background: transparent; color: var(--text-main);
  border: 1px solid var(--border-glass);
}

.btn-icon { background: var(--bg-card); border: 1px solid var(--border-glass); color: var(--text-main); padding: 0.6rem; min-width: 42px; }
.btn-sm { padding: 0.45rem 0.9rem; font-size: 0.8rem; min-height: 36px; }
.full-width { width: 100%; }

/* --- Hero & Search --- */
.hero { padding: 3rem 1.2rem 2.5rem; text-align: center; max-width: 900px; margin: 0 auto; }
.badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(99, 102, 241, 0.15); border: 1px solid rgba(99, 102, 241, 0.3);
  color: #818cf8; padding: 6px 14px; border-radius: 50px; font-size: 0.78rem; font-weight: 600; margin-bottom: 1.2rem;
}

.hero-title { font-size: clamp(2.1rem, 6vw, 3.2rem); font-weight: 800; line-height: 1.25; margin-bottom: 1rem; }
.hero-subtitle { color: var(--text-muted); font-size: clamp(0.9rem, 2.5vw, 1.05rem); line-height: 1.6; margin-bottom: 2rem; }

.search-container {
  position: relative; max-width: 600px; margin: 0 auto 2.5rem;
  display: flex; align-items: center; width: 100%;
}

.search-icon { position: absolute; left: 18px; color: var(--text-muted); font-size: 1rem; }
.search-container input {
  width: 100%; padding: 0.95rem 110px 0.95rem 48px;
  background: var(--bg-card); border: 1px solid var(--border-glass);
  border-radius: 50px; color: var(--text-main); font-size: 0.92rem; outline: none;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15); transition: var(--transition-smooth);
}

.search-container input:focus { border-color: var(--primary-glow); }
.search-btn { position: absolute; right: 6px; border-radius: 50px; padding: 0.55rem 1.2rem; height: calc(100% - 12px); }

.hero-stats { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
.stat-card {
  background: var(--bg-card); border: 1px solid var(--border-glass);
  padding: 1rem 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px); flex: 1 1 120px;
}

.stat-card h3 { font-size: 1.4rem; font-weight: 800; }
.stat-card p { font-size: 0.75rem; color: var(--text-muted); }

/* --- Catalog Grid --- */
.catalog-section { max-width: 1280px; margin: 2rem auto; padding: 0 1.2rem; }
.section-header { text-align: center; margin-bottom: 2rem; }
.section-header h2 { font-size: clamp(1.6rem, 4vw, 2.2rem); margin-bottom: 0.5rem; }
.section-header p { font-size: 0.88rem; color: var(--text-muted); }

.filter-tabs { display: flex; justify-content: flex-start; gap: 0.5rem; margin-top: 1.5rem; overflow-x: auto; padding-bottom: 8px; -webkit-overflow-scrolling: touch; }
.filter-tabs::-webkit-scrollbar { display: none; }
.filter-btn {
  background: var(--bg-card); border: 1px solid var(--border-glass);
  color: var(--text-muted); padding: 0.5rem 1.1rem; border-radius: 50px;
  cursor: pointer; font-weight: 600; transition: var(--transition-smooth);
  white-space: nowrap; font-size: 0.82rem; flex-shrink: 0;
}

.filter-btn.active, .filter-btn:hover { background: var(--primary-glow); color: #fff; border-color: var(--primary-glow); }

.plans-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.2rem; }

/* --- Optimized Cards & Fixed App Image Container --- */
.plan-card {
  background: var(--bg-card);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-lg);
  padding: 1.4rem;
  position: relative;
  overflow: hidden;
  transition: var(--transition-smooth);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.plan-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.4);
  background: var(--bg-card-hover);
}

.card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }

.logo-box {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: var(--logo-box-bg);
  border: 1px solid var(--border-glass);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  overflow: hidden;
}

.platform-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

.discount-tag {
  background: #10b981; color: #fff; font-size: 0.68rem;
  font-weight: 800; padding: 4px 8px; border-radius: 20px; text-transform: uppercase;
}

.platform-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.platform-desc { font-size: 0.8rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 1rem; }

.price-box { margin-bottom: 1rem; }
.starting-text { font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; }
.price-row { display: flex; align-items: baseline; gap: 8px; }
.discount-price { font-size: 1.5rem; font-weight: 800; color: #10b981; }
.original-price { font-size: 0.92rem; color: var(--text-muted); text-decoration: line-through; }

.faded-app-bg {
  position: absolute;
  right: -20px;
  bottom: -20px;
  width: 120px;
  height: 120px;
  object-fit: contain;
  opacity: 0.10;
  filter: grayscale(20%);
  pointer-events: none;
  transition: var(--transition-smooth);
}

/* --- FULL PAGE AUTHENTICATION SCREEN --- */
.full-auth-screen {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: var(--bg-main);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  overflow-y: auto;
}

.auth-art-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  z-index: -1;
  pointer-events: none;
}
.glow-auth-1 { width: 400px; height: 400px; background: var(--primary-glow); top: -100px; left: -100px; opacity: 0.4; }
.glow-auth-2 { width: 350px; height: 350px; background: var(--secondary-glow); bottom: -80px; right: -80px; opacity: 0.4; }

.auth-back-btn {
  position: absolute;
  top: 20px; left: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-glass);
  color: var(--text-main);
  padding: 0.55rem 1.1rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  z-index: 10;
}

.auth-wrapper {
  max-width: 950px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;
}

.auth-brand-side h2 { font-size: 2rem; font-weight: 800; line-height: 1.2; margin: 1rem 0; }
.auth-brand-side p { color: var(--text-muted); line-height: 1.5; font-size: 0.9rem; margin-bottom: 1.5rem; }

.auth-perks { display: flex; flex-direction: column; gap: 0.8rem; }
.perk-item { display: flex; align-items: center; gap: 10px; font-weight: 600; font-size: 0.88rem; }
.perk-item i { color: #10b981; font-size: 1.1rem; }

.auth-card-side { padding: 1.8rem; width: 100%; }
.auth-options { display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; margin-bottom: 1.2rem; }
.auth-options a { color: var(--primary-glow); text-decoration: none; }

/* --- Trust & FAQ Sections --- */
.trust-section { max-width: 1280px; margin: 3.5rem auto; padding: 0 1.2rem; }
.trust-container { padding: 2rem 1.5rem; border-radius: var(--radius-lg); }
.trust-header { text-align: center; margin-bottom: 2rem; }
.trust-header h2 { font-size: clamp(1.3rem, 3.5vw, 1.8rem); }
.trust-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
.trust-item { text-align: center; }
.trust-item i { font-size: 2rem; color: var(--primary-glow); margin-bottom: 0.8rem; }
.trust-item h4 { font-size: 1rem; margin-bottom: 0.4rem; }
.trust-item p { font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; }

.faq-section { max-width: 800px; margin: 3rem auto; padding: 0 1.2rem; }
.faq-accordion { display: flex; flex-direction: column; gap: 0.8rem; }
.faq-item { background: var(--bg-card); border: 1px solid var(--border-glass); border-radius: var(--radius-md); overflow: hidden; }
.faq-question { padding: 1rem 1.2rem; display: flex; justify-content: space-between; align-items: center; font-weight: 600; cursor: pointer; font-size: 0.9rem; }
.faq-answer { padding: 0 1.2rem 1rem; display: none; color: var(--text-muted); font-size: 0.82rem; line-height: 1.5; }
.faq-item.active .faq-answer { display: block; }
.faq-item.active .faq-question i { transform: rotate(180deg); }

/* --- Modals & Settings Drawer --- */
.modal {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000; opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
  padding: 1rem;
}
.modal.active { opacity: 1; pointer-events: all; }

.glass-card {
  background: var(--bg-card); border: 1px solid var(--border-glass);
  width: 100%; max-width: 460px; padding: 1.8rem; border-radius: var(--radius-lg); position: relative;
  max-height: 90vh; overflow-y: auto;
}
.modal-lg { max-width: 600px; }

.close-btn { position: absolute; top: 12px; right: 16px; background: transparent; border: none; color: var(--text-muted); font-size: 1.6rem; cursor: pointer; padding: 0.2rem; }

.duration-selector { display: flex; background: var(--input-bg); padding: 4px; border-radius: 50px; margin: 1.2rem 0; }
.duration-btn { flex: 1; padding: 0.55rem; border: none; background: transparent; color: var(--text-muted); font-weight: 600; border-radius: 50px; cursor: pointer; transition: var(--transition-smooth); font-size: 0.8rem; }
.duration-btn.active { background: var(--primary-glow); color: #fff; }

.sub-plans-container { display: flex; flex-direction: column; gap: 0.8rem; margin-bottom: 1.2rem; max-height: 220px; overflow-y: auto; }
.sub-plan-card { border: 1px solid var(--border-glass); padding: 0.8rem 1rem; border-radius: var(--radius-md); cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: var(--transition-smooth); font-size: 0.88rem; }
.sub-plan-card.selected { border-color: var(--primary-glow); background: rgba(99, 102, 241, 0.12); }

.settings-drawer { position: fixed; top: 0; right: -100%; width: 100%; max-width: 320px; height: 100%; background: var(--bg-card); border-left: 1px solid var(--border-glass); z-index: 1500; transition: right 0.4s ease; padding: 1.5rem; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
.settings-drawer.open { right: 0; }

.drawer-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.user-profile-summary { display: flex; align-items: center; gap: 10px; margin: 1rem 0; }
.avatar { font-size: 1.8rem; color: var(--primary-glow); }
.user-details h4 { font-size: 0.95rem; }
.user-details p { font-size: 0.75rem; color: var(--text-muted); }

.divider { border: 0; height: 1px; background: var(--border-glass); margin: 1rem 0; }
.setting-item { margin-bottom: 1.2rem; }
.setting-item label { display: block; font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.4rem; }

.theme-switch-wrapper { display: flex; gap: 6px; margin-top: 6px; }
.theme-btn { flex: 1; padding: 0.5rem; border: 1px solid var(--border-glass); background: transparent; color: var(--text-muted); border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.8rem; }
.theme-btn.active { background: var(--primary-glow); color: #fff; border-color: var(--primary-glow); }

#languageSelect { width: 100%; padding: 0.6rem; background: var(--input-bg); border: 1px solid var(--border-glass); border-radius: var(--radius-md); color: var(--text-main); outline: none; margin-top: 4px; font-size: 0.85rem; }

.cookie-drawer { position: fixed; bottom: -120px; left: 0; width: 100%; background: var(--bg-card); border-top: 1px solid var(--border-glass); padding: 1rem 1.2rem; z-index: 900; transition: bottom 0.5s ease; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
.cookie-drawer.active { bottom: 0; }
.cookie-content { max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; gap: 0.8rem; flex-wrap: wrap; }
.cookie-text { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; flex: 1 1 250px; }
.cookie-actions { display: flex; gap: 8px; width: 100%; justify-content: flex-end; }

.footer { background: rgba(5, 7, 10, 0.95); border-top: 1px solid var(--border-glass); padding: 3rem 1.2rem 1.5rem; margin-top: 4rem; }
.footer-container { max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
.footer-brand { flex: 1 1 250px; }
.footer-brand p { font-size: 0.82rem; color: var(--text-muted); margin-top: 0.6rem; }
.footer-links h4, .footer-socials h4 { font-size: 0.9rem; margin-bottom: 0.6rem; }
.footer-links a { display: block; color: var(--text-muted); text-decoration: none; font-size: 0.82rem; margin-bottom: 0.4rem; }
.social-icons { display: flex; gap: 0.8rem; font-size: 1.3rem; margin-top: 0.6rem; }
.social-icons a { color: var(--text-muted); }
.footer-bottom { text-align: center; color: var(--text-muted); border-top: 1px solid var(--border-glass); margin-top: 2rem; padding-top: 1.2rem; font-size: 0.78rem; }

.input-group { position: relative; margin-bottom: 1rem; }
.input-group i { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--text-muted); font-size: 0.9rem; }
.input-group input { width: 100%; padding: 0.75rem 0.9rem 0.75rem 38px; background: var(--input-bg); border: 1px solid var(--border-glass); border-radius: var(--radius-md); color: var(--text-main); outline: none; font-size: 0.88rem; }

.auth-tabs { display: flex; border-bottom: 1px solid var(--border-glass); margin-bottom: 1.2rem; }
.auth-tab { flex: 1; padding: 0.7rem; background: none; border: none; color: var(--text-muted); font-weight: 700; cursor: pointer; border-bottom: 2px solid transparent; font-size: 0.88rem; }
.auth-tab.active { color: var(--primary-glow); border-bottom-color: var(--primary-glow); }

.loading-overlay { position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.85); display:flex; flex-direction:column; justify-content:center; align-items:center; gap:1rem; border-radius: var(--radius-lg); font-size: 0.88rem; }
.spinner { width:36px; height:36px; border:3px solid rgba(255,255,255,0.1); border-top-color:var(--primary-glow); border-radius:50%; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.hidden { display: none !important; }

/* --- MEDIA QUERIES FOR MOBILE & TABLET --- */
@media (max-width: 850px) {
  .mobile-hamburger { display: block; }
  
  .nav-links {
    position: fixed;
    top: 60px; left: -100%;
    width: 100%; height: calc(100vh - 60px);
    background: var(--bg-card);
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
    transition: left 0.35s ease;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 99;
  }

  .nav-links.active { left: 0; }
  .nav-links a { font-size: 1.1rem; }
  
  .nav-actions .btn-outline span { display: none; }
  .nav-actions .btn-outline { padding: 0.6rem; min-width: 42px; }

  .search-container input { padding: 0.85rem 95px 0.85rem 40px; font-size: 0.85rem; }
  .search-btn { padding: 0.4rem 0.9rem; font-size: 0.8rem; }

  .auth-wrapper { grid-template-columns: 1fr; margin-top: 1rem; }
  .auth-brand-side { display: none; }
  .auth-back-btn span { display: none; }
  .auth-back-btn { padding: 0.5rem; border-radius: 50%; }

  .cookie-content { flex-direction: column; align-items: flex-start; }
  .cookie-actions { width: 100%; justify-content: flex-end; }
}

@media (max-width: 480px) {
  .plans-grid { grid-template-columns: 1fr; }
  .hero-stats { gap: 0.6rem; }
  .stat-card { padding: 0.8rem 1rem; }
  .glass-card { padding: 1.4rem 1.1rem; }
}
