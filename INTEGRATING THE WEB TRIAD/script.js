// 1. Target Element Selection (HTML -> JS)
const yearSpan = document.getElementById('year');
const themeBtn = document.getElementById('theme-btn');
const contactBtn = document.getElementById('contact-btn');

// 2. Dynamic Content Injection (JS -> HTML)
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// 3. Event Handling and Class Toggling (JS -> HTML/CSS)
if (themeBtn) {
  // Restore the saved theme (if the browser allows storage)
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
  } catch (e) { /* storage unavailable: ignore */ }

  themeBtn.addEventListener('click', () => {
    // Toggles .dark-mode defined in style.css on the <body> tag
    const isDark = document.body.classList.toggle('dark-mode');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) { /* ignore */ }
  });
}

// 4. Interactive Feedback
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    alert('Thank you for visiting! Reach out to me via aagton_260000001238@uic.edu.ph');
  });
}