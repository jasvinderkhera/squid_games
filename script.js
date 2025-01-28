let tl = gsap.timeline();

tl.to('.logo-section', {
    scale: 0,
    duration: 4, // Increased the duration to make it slower
    delay: 1.5,
    stagger: 1.25,
    scrollTrigger: {
        trigger: ".logo-section",
        scroller: "body", // or your custom container like ".my-container"
        start: "top 10%", // Triggers when the top of the section reaches 10% from the top of the viewport
        end: "top -30%", // Optional: adjust if you want to control how long the animation lasts
        scrub: true, // Optional: smooth the animation with the scroll
    }
})
.to('.logo-section', {
    opacity: 0,
    duration: 2,
    stagger: 1.25,
    scrollTrigger: {
        trigger: ".logo-section",
        scroller: "body", // or your custom container like ".my-container"
        start: "top -10%", // Make sure opacity starts as soon as the section hits the viewport
        end: "top 0%", // Optional: adjust how long opacity change lasts
        scrub: true, // Optional: smooth the opacity change with the scroll
    }
});
tl.to('.bottom-section',{
    opacity:0,
    duration:2,
    stagger:0.25,
    scrollTrigger: {
        trigger: ".bottom-section",
        scroller: "body", // or your custom container like ".my-container"
        start: "top 80%", // Make sure opacity starts as soon as the section hits the viewport
        end: "top 40%", // Optional: adjust how long opacity change lasts
        // markers: true, // Set to true for debugging
        scrub: true, // Optional: smooth the opacity change with the scroll
    }
})
gsap.from('.navBtn',{
    opacity:0,
    scale:0,
    duration:4,
    delay:1,
    stagger:0.25,
    scrollTrigger: {
        trigger: ".bottom-section",
        scroller: "body", // or your custom container like ".my-container"
        start: "bottom 20%", // Make sure opacity starts as soon as the section hits the viewport
        end: "top 0", // Optional: adjust how long opacity change lasts
        // markers: true, // Set to true for debugging
        scrub: true, // Optional: smooth the opacity change with the scroll
    }
})

let menu = gsap.timeline()


// menu.from('.menu-page',{
//     transform:"translateY(-100%)",
//     opacity:0,
//     delay:0.1,
//     duration:0.6
// })
menu.from('.menuItems',{
    y:-100,
    opacity:0,
    delay:0.15,
    duration:0.1,
    stagger:0.05,
})


menu.pause()

let menuBtn = document.querySelector('.menu')

menuBtn.addEventListener('click',function(){
    menu.play();
})

function revAnime() {
    menu.reverse()
  }

// Attach click event to all links with class 'closeModalLink'
document.querySelectorAll('.closeModalLink').forEach(link => {
    link.addEventListener('click', function (event) {
      // Prevent default behavior for the link
      event.preventDefault();
  
      // Close the modal
      const modalElement = document.getElementById('fullScreenModal');
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance.hide();
  
      // Optional: Scroll to the target section
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  



