
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
	scrollTrigger: {
  	trigger: ".layout417_component",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  }
});

// Card 1 animation
tl.to(".card-1", { 
y: "-100vh", 
rotation: -30, 
duration: 1, 
ease: "power2.in" 
});
// Card 2 animation
tl.to(".card-2", { 
y: "-100vh", 
rotation: -30, 
duration: 1, 
ease: "power2.in" 
});
// Card 3 animation
tl.to(".card-3", { 
y: "-100vh", 
rotation: -30, 
duration: 1, 
ease: "power2.in" 
});
// Card 4 animation
tl.to(".card-4", { 
y: "-100vh", 
rotation: -30, 
duration: 1, 
ease: "power2.in" 
});
