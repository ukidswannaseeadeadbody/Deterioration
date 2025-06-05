document.addEventListener("DOMContentLoaded", function () {
  const sizes = document.querySelectorAll('.size-option');
  const header = document.querySelector('.main-header');
  const contactBtn = document.getElementById('contact-btn');
  const contactPopup = document.getElementById('contact-popup');
  const paymentBtn = document.querySelector('a[href="#"][data-role="payment"]');
  const paymentPopup = document.getElementById('payment-popup');
  const privacyBtn = document.getElementById('privacy-btn');
  const privacyPopup = document.getElementById('privacy-popup');
  const returnsBtn = document.getElementById('returns-btn');
  const returnsPopup = document.getElementById('returns-popup');
  const exchangesBtn = document.getElementById('exchanges-btn');
  const exchangesPopup = document.getElementById('exchanges-popup');
  const preloader = document.getElementById("preloader");
  const searchInput = document.getElementById("search-input");

  if (searchInput && (!searchInput.placeholder || searchInput.placeholder === "null")) {
  searchInput.placeholder = "search///";
}

  sizes.forEach(size => {
    size.addEventListener('click', function (e) {
      e.preventDefault();
      sizes.forEach(s => s.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      header.classList.add('blurred');
    } else {
      header.classList.remove('blurred');
    }
  });

  contactBtn?.addEventListener('click', function (e) {
    e.preventDefault();
    contactPopup.classList.remove('hidden');
    setTimeout(() => contactPopup.classList.add('visible'), 10);
  });

  paymentBtn?.addEventListener('click', function (e) {
    e.preventDefault();
    paymentPopup.classList.remove('hidden');
    setTimeout(() => paymentPopup.classList.add('visible'), 10);
  });

  privacyBtn?.addEventListener('click', function (e) {
    e.preventDefault();
    privacyPopup.classList.remove('hidden');
    setTimeout(() => privacyPopup.classList.add('visible'), 10);
  });

  returnsBtn?.addEventListener('click', function (e) {
    e.preventDefault();
    returnsPopup.classList.remove('hidden');
    setTimeout(() => returnsPopup.classList.add('visible'), 10);
  });

  exchangesBtn?.addEventListener('click', function (e) {
    e.preventDefault();
    exchangesPopup.classList.remove('hidden');
    setTimeout(() => exchangesPopup.classList.add('visible'), 10);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      contactPopup?.classList.remove('visible');
      paymentPopup?.classList.remove('visible');
      privacyPopup?.classList.remove('visible');
      returnsPopup?.classList.remove('visible');
      exchangesPopup?.classList.remove('visible');

      setTimeout(() => {
        contactPopup?.classList.add('hidden');
        paymentPopup?.classList.add('hidden');
        privacyPopup?.classList.add('hidden');
        returnsPopup?.classList.add('hidden');
        exchangesPopup?.classList.add('hidden');
      }, 400);
    }
  });

  setTimeout(() => {
    preloader?.classList.add("hidden");
  }, 3000);
});
