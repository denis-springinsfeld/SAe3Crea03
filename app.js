gsap.registerPlugin(ScrollTrigger);

// Récupère tous les éléments ayant la classe .panel sous la forme d'un tableau
let sections = gsap.utils.toArray(".panel");

// Crée un tween qui déplace les sections horizontalement
let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 0.1,
  },
});

// section 1 : Simple Animation
gsap.to(".box-1", {
  y: -130,
  duration: 2,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".box-1",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 58%",
    toggleActions: "play none none reset",
    markers: { startColor: "white", endColor: "white" },
  },
});

// section 2 : Animation with scrub
gsap.to(".box-2", {
  y: -120,
  backgroundColor: "#1e90ff",
  ease: "none",
  scrollTrigger: {
    trigger: ".box-2",
    containerAnimation: scrollTween,
    scrub: true,
    start: "center 80%",
    end: "center 58%",
    markers: { startColor: "white", endColor: "white" },
  },
});

// section 3 : Toggle class
ScrollTrigger.create({
  trigger: ".box-3",
  containerAnimation: scrollTween,
  toggleClass: "active",
  start: "center 80%",
  end: "center 58%",
  markers: { startColor: "white", endColor: "white" },
});

// section 4 : Custom function
ScrollTrigger.create({
  trigger: ".panel--purple",
  containerAnimation: scrollTween,
  start: "center 80%",
  end: "center 58%",
  onEnter: () => console.log("enter"),
  onLeave: () => console.log("leave"),
  onEnterBack: () => console.log("enterBack"),
  onLeaveBack: () => console.log("leaveBack"),
  onToggle: (self) => console.log("active", self.isActive),
  markers: { startColor: "white", endColor: "white" },
});
