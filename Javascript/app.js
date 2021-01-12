const intro = document.querySelector(".intro");
const video = intro.querySelector(".img");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);


scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});
// TEST
let scene3 = new ScrollMagic.Scene({
  triggerElement: '.aboutMe'
})
scene3.setClassToggle(".aboutMe", 'show')
scene3.addTo(controller)