gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  tablet: {
    smooth: true
  },
  smartphone: {
    smooth: true
  }
});

locoScroll.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy('[data-scroll-container]', {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector('[data-scroll-container]').style.transform ? 'transform' : 'fixed'
});

gsap.fromTo(
  "#fade-heading, #fade-subheading",
  { opacity: 4 },
  {
    scale: 2,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
      trigger: "#fade-heading",
      scroller: "[data-scroll-container]",
      start: "top center", 
      end: "bottom top",   
      scrub: true
    }
  }
);

gsap.from(".nav-item, .nav-text, .nav-connect, .ri-menu-line", {
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
  scrollTrigger: {
    trigger: "nav",
    scroller: "[data-scroll-container]",
    start: "top center",
    end: "bottom top", 
    toggleActions: "play none none reverse"
  }
});

gsap.from("#hero-text, #hero-name, #hero-paragraph", {
  x: 80,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
  scrollTrigger: {
    trigger: "#hero",
    scroller: "[data-scroll-container]",
    start: "top center",
    end: "bottom top", 
    toggleActions: "play none none reverse"
  }
});

gsap.from(".social-h2, .social-apps", {
  x: -50,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#hero",
    scroller: "[data-scroll-container]",
    start: "top center",
    end: "bottom top", 
    toggleActions: "play none none reverse"
  }
});

gsap.from(".skill", {
  y: -50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15,
  scrollTrigger: {
    trigger: "#hero",
    scroller: "[data-scroll-container]",
    start: "top center",
    end: "bottom top", 
    toggleActions: "play none none reverse"
  }
});







ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
ScrollTrigger.refresh();
