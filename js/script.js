/* ============= MENU SHOW AND HIDDEN ================ */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* ============= MENU SHOW ================ */
/* Validate if constant exist */

if(navToggle){
  navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu')
  })
}

/* ============= MENU HIDDEN ================ */
/* Validate if constant exist */

if(navClose){
  navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
  })
}

/* ============= REMOVE MENU MOBILE ================ */

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  //When we click on each nav__link, we remove the show menu class
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener("click", linkAction))

/* ============= ACCORDION SKILLS ================ */

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
  let itemClass = this.parentNode.className

  for(i=0; i<skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close'
  }
  if (itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el)=>{
  el.addEventListener('click',toggleSkills)
})

/* =============  QUALIFICATION TABS ================ */
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
  tab.addEventListener('click',()=>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent=>{
      tabContent.classList.remove('qualification__active')
    })

    target.classList.add('qualification__active')

    tabs.forEach(tab=>{
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')

  })
})

/* =============  SERVICES MODAL ================ */

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () =>{
    modal(i)
  })
})

modalCloses.forEach((modalClose)=>{
  modalClose.addEventListener('click',()=>{
    modalViews.forEach((modalView)=>{
      modalView.classList.remove('active-modal')
    })
  })
})

/* =============  PORTFOLIO FILTERED GALLERY ================ */

let portfolioLinks = document.querySelectorAll('.portfolio__link'),
    portfolioItems = document.querySelectorAll('.portfolio__card')

for (let i=0; i<portfolioLinks.length; i++){
  portfolioLinks[i].addEventListener('ontouchstart',function(){
    for(let j=0; j<portfolioLinks.length; j++){
      portfolioLinks[j].classList.remove('portfolio__nav-active');
    }
    this.classList.add('portfolio__nav-active');

    let dataFilter = this.getAttribute('data-filter');

    for(let k=0; k<portfolioItems.length; k++){
      portfolioItems[k].classList.remove('show');
      portfolioItems[k].classList.add('hide');

      if (portfolioItems[k].getAttribute('data-item') == dataFilter || dataFilter == '*'){
        portfolioItems[k].classList.remove('hide');
        portfolioItems[k].classList.add('show');
      }
    }
  })
}

/* =============  PORTFOLIO FILTERED GALLERY ================ */

let swiperCustomer = new Swiper('.customer__container',{
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})



