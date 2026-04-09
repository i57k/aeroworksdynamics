/**
 * Aeroworks Dynamics — Main JavaScript
 * Handles mobile menu toggle
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('mobile-toggle');
    var menu = document.getElementById('mobile-menu');

    if (!toggle || !menu) return;

    var iconMenu = toggle.querySelector('.icon-menu');
    var iconClose = toggle.querySelector('.icon-close');

    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.contains('is-open');

      if (isOpen) {
        menu.classList.remove('is-open');
        if (iconMenu) iconMenu.style.display = '';
        if (iconClose) iconClose.style.display = 'none';
        toggle.setAttribute('aria-label', 'Open menu');
      } else {
        menu.classList.add('is-open');
        if (iconMenu) iconMenu.style.display = 'none';
        if (iconClose) iconClose.style.display = '';
        toggle.setAttribute('aria-label', 'Close menu');
      }
    });

    // Close mobile menu when clicking a link
    var links = menu.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        if (iconMenu) iconMenu.style.display = '';
        if (iconClose) iconClose.style.display = 'none';
      });
    });
  });
})();
