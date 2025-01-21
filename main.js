import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// Hero section animations
const animateHeroElements = () => {
  const header = document.getElementById('header')
  const heroTitle = document.getElementById('hero-title')
  const heroSubtitle = document.getElementById('hero-subtitle')
  const exploreBtn = document.getElementById('explore-btn')

  if (header) {
    gsap.to(header, {
      opacity: 1,
      duration: 1,
      delay: 0.5
    })
  }

  if (heroTitle) {
    gsap.to(heroTitle, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1
    })
  }

  if (heroSubtitle) {
    gsap.to(heroSubtitle, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1.5
    })
  }

  if (exploreBtn) {
    gsap.to(exploreBtn, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 2
    })

    exploreBtn.addEventListener('click', () => {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: "#about",
          offsetY: 70
        },
        ease: "power2.inOut"
      })
    })
  }
}

// Gem sections animations
const animateGemSections = () => {
  const gemContents = document.querySelectorAll('.gem-content')
  const modelViewers = document.querySelectorAll('model-viewer')

  gemContents.forEach((content) => {
    gsap.from(content, {
      scrollTrigger: {
        trigger: content,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      x: -50,
      opacity: 0,
      duration: 1
    })
  })

  modelViewers.forEach((viewer) => {
    gsap.from(viewer.parentElement, {
      scrollTrigger: {
        trigger: viewer.parentElement,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      x: 50,
      opacity: 0,
      duration: 1
    })
  })
}

// Initialize all animations
const init = () => {
  animateHeroElements()
  animateGemSections()
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', init)