var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',   // Adjusts to your icon widths
  spaceBetween: 30,        // Gap between icons
  loop: true,              // Infinite looping
  speed: 5000,             // How fast the track moves
  autoplay: {
    delay: 0,              // No pause between transitions
    disableOnInteraction: false, // Keep going even if user interacts
  },
  freeMode: true,          // Continuous movement
  freeModeMomentum: false,
  breakpoints: {
    320: { slidesPerView: 3, spaceBetween: 20 },
    640: { slidesPerView: 4, spaceBetween: 20 },
    1024: { slidesPerView: 6, spaceBetween: 30 }
  }
});
