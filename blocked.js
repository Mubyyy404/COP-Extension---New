
document.addEventListener('DOMContentLoaded', () => {
  const p = new URLSearchParams(window.location.search);
  document.getElementById('reason').textContent = "Reason: " + (p.get('reason') || "Unknown");
  document.getElementById('back').onclick = () => window.history.length > 1 ? window.history.back() : window.location.href="https://google.com";
});
