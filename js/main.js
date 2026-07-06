// NOOKSY — Main JS

let cart = JSON.parse(localStorage.getItem('nooksy_cart') || '[]');

function updateCartBadge() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = total;
  });
}

function addToCart(product) {
  const existing = cart.find(i => 
    i.id === product.id && 
    i.size === product.size && 
    i.color === product.color
  );
  if (existing) { existing.qty += 1; }
  else { cart.push({ ...product, qty: 1 }); }
  localStorage.setItem('nooksy_cart', JSON.stringify(cart));
  updateCartBadge();
  showToast(product.name + ' added to cart!');
  // Sync to Firestore if logged in
  if (typeof syncCartToFirestore === 'function') syncCartToFirestore();
}

function showToast(message) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:#000;color:#fff;padding:12px 24px;font-family:DM Sans,sans-serif;font-size:13px;z-index:9999;letter-spacing:0.3px;';
  t.textContent = message;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}

function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));
  }
}

function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body.style.display === 'block';
      body.style.display = isOpen ? 'none' : 'block';
      const icon = header.querySelector('i.ti-chevron-down');
      if (icon) icon.style.transform = isOpen ? '' : 'rotate(180deg)';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  initMobileNav();
  initAccordion();
});
