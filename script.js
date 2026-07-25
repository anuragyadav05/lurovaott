/* ==========================================================================
   LUROVA OTT - ULTRA-FAST OPTIMIZED CORE SCRIPT
   ========================================================================== */

const RAZORPAY_KEY = "rzp_live_S4aoxO09BneiJ3";
const ACCOUNT_PORTAL_URL = "https://account.lurova.life/";

// Lazy Initialized Firebase Variables
let auth = null;
const firebaseConfig = {
  apiKey: "AIzaSyCZvJC6xQkhuM7MkybSwn7FqW5W-ByTKFk",
  authDomain: "lurova-account.firebaseapp.com",
  projectId: "lurova-account",
  storageBucket: "lurova-account.firebasestorage.app",
  messagingSenderId: "925302881748",
  appId: "1:925302881748:web:da8f9f6b298e27b758ea41"
};

let selectedApp = null;
let currentDuration = 'monthly';
let selectedTier = null;
let currentUser = null;

// Platform Catalog Data Cached Locally for Instant Paint
const platformsData = [
  {
    id: "netflix",
    name: "Netflix Premium",
    category: "ott",
    logo: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png",
    description: "Stream unlimited Movies, TV shows & 4K Ultra HD Originals.",
    plans: {
      monthly: [
        { name: "Mobile (480p) - 1 Screen", original: 149, features: "Phone & Tablet Stream" },
        { name: "Basic (720p) - 1 Screen", original: 199, features: "HD Stream on TV & Laptop" },
        { name: "Standard (1080p) - 2 Screens", original: 499, features: "Full HD, 2 Devices Sync" },
        { name: "Premium (4K UHD) - 4 Screens", original: 649, features: "Ultra HD 4K, Spatial Audio" }
      ],
      yearly: [
        { name: "Standard (1080p) - Annual", original: 4990, features: "Full HD, 2 Devices 12 Months" },
        { name: "Premium (4K UHD) - Annual", original: 6490, features: "Ultra HD 4K, 4 Devices 12 Months" }
      ]
    }
  },
  {
    id: "prime",
    name: "Amazon Prime Video",
    category: "ott",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
    description: "Includes Prime Video, Free Fast Delivery & Prime Music.",
    plans: {
      monthly: [
        { name: "Prime Video Mobile Edition", original: 149, features: "Single Mobile Screen" },
        { name: "Prime Full Monthly", original: 299, features: "4K UHD Video + Shopping Perks" }
      ],
      yearly: [
        { name: "Prime Full Annual Pass", original: 1499, features: "1 Full Year Prime Access" }
      ]
    }
  },
  {
    id: "jiohotstar",
    name: "JioStar / Hotstar",
    category: "ott",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Disney%2B_Hotstar_logo.svg",
    description: "Live Cricket, Premier League, Marvel, Disney & HBO Shows.",
    plans: {
      monthly: [
        { name: "Super Plan (1080p)", original: 299, features: "Full HD, 2 Screens" },
        { name: "Premium Plan (4K)", original: 499, features: "4K UHD, 4 Screens Ad-Free" }
      ],
      yearly: [
        { name: "Super Annual Plan", original: 899, features: "1 Year, 2 Devices" },
        { name: "Premium Annual Plan", original: 1499, features: "1 Year, 4K UHD 4 Devices" }
      ]
    }
  },
  {
    id: "spotify",
    name: "Spotify Premium",
    category: "music",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    description: "Listen to 100M+ songs ad-free with offline downloads.",
    plans: {
      monthly: [
        { name: "Individual Premium", original: 119, features: "1 Account, Unlimited Skips" },
        { name: "Duo Premium", original: 149, features: "2 Accounts for Couples" }
      ],
      yearly: [
        { name: "Individual 12-Month Pass", original: 1189, features: "Full Year Music Access" }
      ]
    }
  },
  {
    id: "youtube",
    name: "YouTube Premium",
    category: "music",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
    description: "Ad-free YouTube videos, Background Play & YouTube Music.",
    plans: {
      monthly: [
        { name: "Individual Monthly", original: 149, features: "Ad-Free + Background Play" },
        { name: "Family Plan (5 Members)", original: 299, features: "Share with 5 Family Members" }
      ],
      yearly: [
        { name: "Individual 12-Month Pass", original: 1490, features: "Full Year Uninterrupted Videos" }
      ]
    }
  },
  {
    id: "adobe",
    name: "Adobe Creative Cloud",
    category: "utility",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Creative_Cloud_logo.svg",
    description: "20+ Creative Desktop & Mobile Apps including Photoshop.",
    plans: {
      monthly: [
        { name: "Photoshop Single App", original: 1650, features: "Photoshop + 100GB Cloud" },
        { name: "All Apps Suite + Generative AI", original: 4230, features: "Photoshop, Premiere, After Effects" }
      ],
      yearly: [
        { name: "All Apps Suite Prepaid Year", original: 46000, features: "12 Months Enterprise Access" }
      ]
    }
  },
  {
    id: "googleone",
    name: "Google One Storage",
    category: "utility",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_One_logo.svg",
    description: "Cloud Storage across Drive, Photos & Gmail + Premium Support.",
    plans: {
      monthly: [
        { name: "Basic 100 GB Plan", original: 130, features: "100 GB Storage + Family Sharing" },
        { name: "Standard 200 GB Plan", original: 210, features: "200 GB Cloud Storage" },
        { name: "Premium 2 TB Plan", original: 650, features: "2 TB Storage + Meet Perks" }
      ],
      yearly: [
        { name: "Basic 100 GB Annual", original: 1300, features: "1 Year Cloud Backup" }
      ]
    }
  },
  {
    id: "swiggione",
    name: "Swiggy One Pass",
    category: "delivery",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg",
    description: "Free Deliveries on Food, Instamart & Dineout Discounts.",
    plans: {
      monthly: [{ name: "Swiggy One Full Access", original: 299, features: "Free Food & Instamart Deliveries" }],
      yearly: [{ name: "Swiggy One Annual Membership", original: 899, features: "365 Days Unlimited Free Delivery" }]
    }
  },
  {
    id: "zepto",
    name: "Zepto Pass",
    category: "delivery",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Zepto_Logo.png",
    description: "Unlimited Free Deliveries under 10 mins + Extra Discounts.",
    plans: {
      monthly: [{ name: "Zepto Pass Monthly", original: 99, features: "Free Delivery on orders above ₹99" }],
      yearly: [{ name: "Zepto Pass Annual Pass", original: 799, features: "1 Year Grocery Savings Pass" }]
    }
  },
  {
    id: "apple",
    name: "Apple One Bundle",
    category: "utility",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    description: "Apple Music, Apple TV+, Apple Arcade & iCloud Storage.",
    plans: {
      monthly: [
        { name: "Apple Individual Bundle", original: 195, features: "Music, TV+, Arcade + 50GB iCloud" },
        { name: "Apple Family Bundle", original: 365, features: "Share with 5 Members + 200GB iCloud" }
      ],
      yearly: [{ name: "Apple Individual Annual", original: 2200, features: "1 Year Apple Suite" }]
    }
  },
  {
    id: "telegram",
    name: "Telegram Premium",
    category: "utility",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    description: "4GB Upload limits, Faster Downloads & Voice-to-Text.",
    plans: {
      monthly: [{ name: "Telegram Premium Monthly", original: 179, features: "Double Limits + Badges" }],
      yearly: [{ name: "Telegram Premium Yearly", original: 1490, features: "33% Extra Annual Savings" }]
    }
  },
  {
    id: "meta",
    name: "Meta Verified Badge",
    category: "utility",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    description: "Blue Verification Badge for Instagram & Facebook.",
    plans: {
      monthly: [{ name: "Meta Verified Monthly", original: 699, features: "Verified Badge + Direct Support" }],
      yearly: [{ name: "Meta Verified Annual Pass", original: 7500, features: "1 Year Guaranteed Badge" }]
    }
  }
];

function calcDiscount(orig) {
  return Math.round(orig * 0.70);
}

// Render Catalog Instantly
function renderCatalog(filter = 'all', searchQuery = '') {
  const grid = document.getElementById('plansGrid');
  if (!grid) return;
  
  const fragment = document.createDocumentFragment();

  const filtered = platformsData.filter(app => {
    const matchesCat = filter === 'all' || app.category === filter;
    const matchesSearch = !searchQuery || app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if(filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 2rem; color:var(--text-muted)">
      <p>No matching platform found.</p>
    </div>`;
    return;
  }

  filtered.forEach(app => {
    const samplePlan = app.plans.monthly[0];
    const discountedPrice = calcDiscount(samplePlan.original);

    const card = document.createElement('div');
    card.className = 'plan-card';
    card.innerHTML = `
      <div class="card-top">
        <div class="logo-box">
          <img src="${app.logo}" alt="${app.name}" class="platform-logo" loading="lazy" decoding="async" width="46" height="46" />
        </div>
        <span class="discount-tag">30% OFF</span>
      </div>
      <div>
        <h3 class="platform-name">${app.name}</h3>
        <p class="platform-desc">${app.description}</p>
        <div class="price-box">
          <span class="starting-text">Starting From</span>
          <div class="price-row">
            <span class="discount-price">₹${discountedPrice}</span>
            <span class="original-price">₹${samplePlan.original}</span>
          </div>
        </div>
      </div>
      <button class="btn btn-primary full-width" onclick="openPlanModal('${app.id}')">
        Select Plan
      </button>
      <img src="${app.logo}" class="faded-app-bg" alt="" loading="lazy" decoding="async" />
    `;
    fragment.appendChild(card);
  });

  grid.innerHTML = '';
  grid.appendChild(fragment);
}

// SSO Authentication and Account Redirects
function redirectToAccountPortal() {
  const cleanUrl = encodeURIComponent(window.location.protocol + "//" + window.location.host + window.location.pathname);
  window.location.href = `${ACCOUNT_PORTAL_URL}?redirect_url=${cleanUrl}&redirect=${cleanUrl}`;
}

function goToAccountProfile() {
  window.location.href = ACCOUNT_PORTAL_URL;
}

function updateUIWithUser(user) {
  const authBtn = document.getElementById('authBtn');
  const authBtnIcon = document.getElementById('authBtnIcon');
  const authBtnText = document.getElementById('authBtnText');
  const drawerLoginBtn = document.getElementById('drawerLoginBtn');
  const drawerProfileBtn = document.getElementById('drawerProfileBtn');
  const drawerLogoutBtn = document.getElementById('drawerLogoutBtn');

  if (user) {
    currentUser = user;
    document.getElementById('profileName').innerText = currentUser.name || "Subscriber";
    document.getElementById('profileEmail').innerText = currentUser.email || "";

    if (authBtn) authBtn.classList.add('user-logged-in');
    if (authBtnIcon) authBtnIcon.className = "fa-solid fa-circle-user";
    if (authBtnText) authBtnText.innerText = currentUser.name || "Profile";

    if (drawerLoginBtn) drawerLoginBtn.classList.add('hidden');
    if (drawerProfileBtn) drawerProfileBtn.classList.remove('hidden');
    if (drawerLogoutBtn) drawerLogoutBtn.classList.remove('hidden');

    const targetContactInput = document.getElementById('targetContact');
    if (targetContactInput && !targetContactInput.value && currentUser.email) {
      targetContactInput.value = currentUser.email;
    }
  } else {
    currentUser = null;
    document.getElementById('profileName').innerText = "Guest Visitor";
    document.getElementById('profileEmail').innerText = "Login via Lurova Account";

    if (authBtn) authBtn.classList.remove('user-logged-in');
    if (authBtnIcon) authBtnIcon.className = "fa-regular fa-user";
    if (authBtnText) authBtnText.innerText = "Login / Sign Up";

    if (drawerLoginBtn) drawerLoginBtn.classList.remove('hidden');
    if (drawerProfileBtn) drawerProfileBtn.classList.add('hidden');
    if (drawerLogoutBtn) drawerLogoutBtn.classList.add('hidden');
  }
}

function handleAuthButtonClick() {
  if (currentUser) {
    goToAccountProfile();
  } else {
    redirectToAccountPortal();
  }
}

// Session Verification Sequence
function checkSharedDomainCookie() {
  const name = "lurova_user=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      try {
        const user = JSON.parse(c.substring(name.length, c.length));
        if (user && user.email) {
          localStorage.setItem('lurova_user_session', JSON.stringify(user));
          updateUIWithUser(user);
          return true;
        }
      } catch (e) {}
    }
  }
  return false;
}

function checkUrlAuthParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email') || urlParams.get('user_email');
  const name = urlParams.get('name') || urlParams.get('user_name') || urlParams.get('displayName');
  const uid = urlParams.get('uid') || urlParams.get('user_id');

  if (email || uid) {
    const userData = {
      name: name || (email ? email.split('@')[0] : "Subscriber"),
      email: email || "user@lurova.life",
      uid: uid || "local_session"
    };
    
    localStorage.setItem('lurova_user_session', JSON.stringify(userData));
    document.cookie = `lurova_user=${encodeURIComponent(JSON.stringify(userData))}; domain=.lurova.life; path=/; max-age=2592000; SameSite=Lax; Secure`;
    
    updateUIWithUser(userData);

    const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.replaceState({ path: cleanUrl }, '', cleanUrl);
    return true;
  }
  return false;
}

function checkStoredUserSession() {
  const stored = localStorage.getItem('lurova_user_session');
  if (stored) {
    try {
      const user = JSON.parse(stored);
      updateUIWithUser(user);
      return true;
    } catch (e) {
      localStorage.removeItem('lurova_user_session');
    }
  }
  return false;
}

function verifySessionState() {
  if (checkUrlAuthParameters()) return;
  if (checkSharedDomainCookie()) return;
  if (checkStoredUserSession()) return;
}

function initFirebase() {
  if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    
    auth.onAuthStateChanged((user) => {
      if (user) {
        const userData = {
          name: user.displayName || user.email.split('@')[0],
          email: user.email,
          uid: user.uid
        };
        localStorage.setItem('lurova_user_session', JSON.stringify(userData));
        document.cookie = `lurova_user=${encodeURIComponent(JSON.stringify(userData))}; domain=.lurova.life; path=/; max-age=2592000; SameSite=Lax; Secure`;
        updateUIWithUser(userData);
      } else {
        localStorage.removeItem('lurova_user_session');
        document.cookie = "lurova_user=; domain=.lurova.life; path=/; max-age=0;";
        if (!checkUrlAuthParameters() && !checkSharedDomainCookie()) {
          updateUIWithUser(null);
        }
      }
    });
  }
}

function logoutUser() {
  localStorage.removeItem('lurova_user_session');
  document.cookie = "lurova_user=; domain=.lurova.life; path=/; max-age=0;";
  if (auth) {
    auth.signOut().finally(() => {
      updateUIWithUser(null);
      closeSettingsDrawer();
    });
  } else {
    updateUIWithUser(null);
    closeSettingsDrawer();
  }
}

// UI Controls
function toggleMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburgerBtn');
  navLinks.classList.toggle('active');
  hamburger.innerHTML = navLinks.classList.contains('active') ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
}

function closeMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburgerBtn');
  if (navLinks) navLinks.classList.remove('active');
  if (hamburger) hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
}

function filterPlans(cat, e) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (e && e.target) e.target.classList.add('active');
  renderCatalog(cat, document.getElementById('searchInput').value);
}

function handleSearch() {
  renderCatalog('all', document.getElementById('searchInput').value);
}

function openPlanModal(appId) {
  selectedApp = platformsData.find(a => a.id === appId);
  currentDuration = 'monthly';
  
  document.getElementById('modalAppHeader').innerHTML = `
    <div style="display:flex; align-items:center; gap:10px; margin-bottom: 0.6rem;">
      <div class="logo-box" style="width:40px; height:40px;">
        <img src="${selectedApp.logo}" style="width:100%; height:100%; object-fit:contain;" />
      </div>
      <div>
        <h3 style="font-size:1.1rem;">${selectedApp.name}</h3>
        <p style="font-size:0.75rem; color:var(--text-muted);">${selectedApp.description}</p>
      </div>
    </div>
  `;

  updateDurationUI();
  openModal('planDetailModal');
}

function selectDuration(type) {
  currentDuration = type;
  document.getElementById('btnMonthly').classList.toggle('active', type === 'monthly');
  document.getElementById('btnYearly').classList.toggle('active', type === 'yearly');
  updateDurationUI();
}

function updateDurationUI() {
  const container = document.getElementById('subPlansContainer');
  container.innerHTML = '';

  const plans = selectedApp.plans[currentDuration] || [];

  if (plans.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); padding: 0.6rem; font-size:0.8rem;">No yearly plans available for this service. Please select Monthly.</p>`;
    return;
  }

  plans.forEach((tier, index) => {
    const discounted = calcDiscount(tier.original);
    if(index === 0) selectedTier = { ...tier, discounted };

    const tierEl = document.createElement('div');
    tierEl.className = `sub-plan-card ${index === 0 ? 'selected' : ''}`;
    tierEl.onclick = function() {
      document.querySelectorAll('.sub-plan-card').forEach(c => c.classList.remove('selected'));
      tierEl.classList.add('selected');
      selectedTier = { ...tier, discounted };
    };

    tierEl.innerHTML = `
      <div>
        <strong>${tier.name}</strong>
        <p style="font-size:0.72rem; color:var(--text-muted);">${tier.features}</p>
      </div>
      <div style="text-align:right;">
        <span style="font-weight:800; color:#10b981; font-size:1.05rem;">₹${discounted}</span>
        <p style="font-size:0.7rem; text-decoration:line-through; color:var(--text-muted)">₹${tier.original}</p>
      </div>
    `;
    container.appendChild(tierEl);
  });
}

function startRazorpayPayment() {
  const contact = document.getElementById('targetContact').value;
  if (!contact) {
    alert("Please enter a valid target Phone Number or Email ID.");
    return;
  }

  if (typeof Razorpay === 'undefined') {
    alert("Razorpay Payment SDK loading... Please try again in a moment.");
    return;
  }

  document.getElementById('paymentLoading').classList.remove('hidden');

  const options = {
    key: RAZORPAY_KEY,
    amount: selectedTier.discounted * 100,
    currency: "INR",
    name: "LUROVA OTT",
    description: `${selectedApp.name} - ${selectedTier.name}`,
    image: selectedApp.logo,
    handler: function (response) {
      document.getElementById('paymentLoading').classList.add('hidden');
      closeModal('planDetailModal');
      alert(`🎉 SUCCESS! Payment ID: ${response.razorpay_payment_id}\n\nActivation initiated for ${contact}. Expected activation: ~15 mins.`);
    },
    prefill: {
      email: contact.includes('@') ? contact : (currentUser ? currentUser.email : "customer@lurovaott.com"),
      contact: !contact.includes('@') ? contact : "9876543210"
    },
    theme: { color: "#6366f1" },
    modal: {
      ondismiss: function() {
        document.getElementById('paymentLoading').classList.add('hidden');
      }
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}

function setTheme(mode) {
  document.body.classList.toggle('dark-theme', mode === 'dark');
  document.body.classList.toggle('light-theme', mode === 'light');
  document.getElementById('darkThemeBtn').classList.toggle('active', mode === 'dark');
  document.getElementById('lightThemeBtn').classList.toggle('active', mode === 'light');
}

function toggleFaq(el) {
  el.parentElement.classList.toggle('active');
}

function openModal(id) { 
  document.getElementById(id).classList.add('active');
}

function closeModal(id) { 
  document.getElementById(id).classList.remove('active');
}

function toggleSettingsDrawer() { 
  document.getElementById('settingsDrawer').classList.toggle('open');
  closeMobileMenu();
}

function closeSettingsDrawer() {
  document.getElementById('settingsDrawer').classList.remove('open');
}

function adjustGlow(val) { 
  document.querySelectorAll('.ambient-glow').forEach(el => el.style.opacity = val / 15); 
}

// Fast Execution Entry Point
function initApp() {
  renderCatalog('all');
  verifySessionState();
  
  // Defer non-critical Firebase auth initialization
  setTimeout(initFirebase, 100);
}

// BFCache Mobile Restore Handler
window.addEventListener('pageshow', verifySessionState);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
