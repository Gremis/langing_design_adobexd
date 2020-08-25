//Animate hero section text

const t1 = new TimelineLite()
t1.to('.main-heading', .4, {y: -40, opacity: 1, ease: Power0.easeIn})
.to('.main-para', .4, {y: -8, opacity: 1, ease: Power0.easeIn})
.to('.btn', .8, {opacity: 1, ease: Power0.easeIn})

//Animate hero section Front image
const t2 = new TimelineLite()
t2.to('.images', 1, {x: -100, opacity: 1, delay: 1, ease: Power0.easeIn})


//Animate hero section Back image when scrolling

const t3 = new TimelineLite()
t3.to('.back', 1, { x: -180, ease:Power0.easeIn})

const controller1 = new ScrollMagic.Controller()
const scene1 = new ScrollMagic.Scene({
    triggerElement: '#hero-section',
    duration: 1000,
    triggerHook: 0
})

.setTween(t3)
.setPin('.hero-section')
.addTo(controller1)


//Animate review section images when scrolling

const t4 = new TimelineLite()
t4.to('.one', .8, {opacity: 1, ease: Power0.easeIn})
.to('.two', .8, {opacity: 1, ease: Power0.easeIn})
.to('.threes', .8, {opacity: 1, ease: Power0.easeIn})
.to('.four', .8, {opacity: 1, ease: Power0.easeIn})
.to('.five', .8, {opacity: 1, ease: Power0.easeIn})
.to('.six', .8, {opacity: 1, ease: Power0.easeIn})
.to('.seven', .8, {opacity: 1, ease: Power0.easeIn})

