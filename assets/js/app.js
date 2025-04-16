let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider .list');
let thumbnail = document.querySelector('.slider .thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');



thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function () {
  moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function () {
  moveSlider('prev')
}


function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll('.item')
  let thumbnailItems = document.querySelectorAll('.thumbnail .item')

  if (direction === 'next') {
    sliderList.appendChild(sliderItems[0])
    thumbnail.appendChild(thumbnailItems[0])
    slider.classList.add('next')
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1])
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
    slider.classList.add('prev')
  }


  slider.addEventListener('animationend', function () {
    if (direction === 'next') {
      slider.classList.remove('next')
    } else {
      slider.classList.remove('prev')
    }
  }, { once: true }) // Remove the event listener after it's triggered once
}








const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// about //

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scontainerabout')
    } else {
      entry.target.classList.remove('scontainerabout')
    }
  })
});

const elements = document.querySelectorAll('.container-about')

elements.forEach((element) => myObserver.observe(element))


// container-wrapper//

const sover = new IntersectionObserver((entries,) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('stitles2')
    } else {
      entry.target.classList.remove('stitles2')
    }
  });
});

const elementum = document.querySelectorAll('.titles2');

elementum.forEach((element) => sover.observe(element));


const sovers = new IntersectionObserver((entries,) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('stitles')
    } else {
      entry.target.classList.remove('stitles')
    }
  });
});

const elementums = document.querySelectorAll('.titles');

elementums.forEach((element) => sovers.observe(element));




let btnMenu = document.getElementById('btn-abrirmenu')
let menu = document.getElementById('menu-mobile')
let checkfirstime = false;

btnMenu.addEventListener('click', () => {
  if (checkfirstime === true) {
    menu.classList.remove('abrir-menu')
    checkfirstime = false;
  }
  else {
    menu.classList.add('abrir-menu')
    checkfirstime = true;
  }
});





//teste scroll//

//gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
/*
if (ScrollTrigger.isTouch !== 1) {

  ScrollSmoother.create({
    Slider: '.slider',
    container: '.container-about',
    service: '.service',
    smooth: 1.5,
    effects: true
  })

  gsap.fromTo('.slider', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.slider',
      start: 'center',
      end: '820',
      scrub: true
    }
  })

  let itemsL = gsap.utils.toArray('.container')

  itemsL.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: -50 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-100',
        scrub: true
      }
    })
  })

  let itemsR = gsap.utils.toArray('.container')

  itemsR.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: 50 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-750',
        end: 'top',
        scrub: true
      }
    })
  })
}*/


