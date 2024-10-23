gsap.from('#nav h3', {
  y: -50,
  opacity: 0,
  delay:0, 
  duration: 0.5,
  stagger: 0.4
})


let tl = gsap.timeline()

tl.from('#main h1', {
  x: -500,
  opacity: 0,
  delay:1, 
  duration: 0.8,
  stagger: 0.4
})

tl.from('#main img', {
  x: 100,
  rotate:45, 
  opacity: 0,
  duration: 0.5,
  stagger: 0.5
})