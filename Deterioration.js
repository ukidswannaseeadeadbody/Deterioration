const sizes = document.querySelectorAll('.size-option');
sizes.forEach(size => {
  size.addEventListener('click', function(e) {
    e.preventDefault();
    sizes.forEach(s => s.classList.remove('selected'));
    this.classList.add('selected');
  });

 const header = document.querySelector('.main-header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    header.classList.add('blurred');
  } else {
    header.classList.remove('blurred');
  }
});
const contactBtn = document.getElementById('contact-btn');
const contactPopup = document.getElementById('contact-popup');

contactBtn.addEventListener('click', function (e) {
  e.preventDefault();
  contactPopup.classList.remove('hidden');

  setTimeout(() => {
    contactPopup.classList.add('visible');
  }, 10);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    contactPopup.classList.remove('visible');
    setTimeout(() => {
      contactPopup.classList.add('hidden');
    }, 400); 
  }
});

const paymentBtn = document.querySelector('a[href="#"][data-role="payment"]');
const paymentPopup = document.getElementById('payment-popup');

paymentBtn.addEventListener('click', function (e) {
  e.preventDefault();
  paymentPopup.classList.remove('hidden');
  setTimeout(() => {
    paymentPopup.classList.add('visible');
  }, 10);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && paymentPopup.classList.contains('visible')) {
    paymentPopup.classList.remove('visible');
    setTimeout(() => {
      paymentPopup.classList.add('hidden');
    }, 400);
  }
});

const privacyBtn = document.getElementById('privacy-btn');
const privacyPopup = document.getElementById('privacy-popup');

privacyBtn.addEventListener('click', function (e) {
  e.preventDefault();
  privacyPopup.classList.remove('hidden');
  setTimeout(() => {
    privacyPopup.classList.add('visible');
  }, 10);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    privacyPopup.classList.remove('visible');
    setTimeout(() => {
      privacyPopup.classList.add('hidden');
    }, 400);
  }
});

const returnsBtn = document.getElementById('returns-btn');
const returnsPopup = document.getElementById('returns-popup');

returnsBtn.addEventListener('click', function (e) {
  e.preventDefault();
  returnsPopup.classList.remove('hidden');
  setTimeout(() => {
    returnsPopup.classList.add('visible');
  }, 10);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    returnsPopup.classList.remove('visible');
    setTimeout(() => {
      returnsPopup.classList.add('hidden');
    }, 400);
  }
});

const exchangesBtn = document.getElementById('exchanges-btn');
const exchangesPopup = document.getElementById('exchanges-popup');

exchangesBtn.addEventListener('click', function (e) {
  e.preventDefault();
  exchangesPopup.classList.remove('hidden');
  setTimeout(() => {
    exchangesPopup.classList.add('visible');
  }, 10);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    exchangesPopup.classList.remove('visible');
    setTimeout(() => {
      exchangesPopup.classList.add('hidden');
    }, 400);
  }
});

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 3000); 
});
});
