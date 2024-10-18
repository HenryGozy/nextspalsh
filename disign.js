const header = document.querySelector('.header');
document.addEventListener('scroll', () => {
    if (window.scrollY >= 900) {
        header.style.backgroundColor = ' rgb(23, 23, 23 ,0.95)';
        header.classList.add('header-fixed')
    } else {
        header.style.backgroundColor = ''; // Reset to original color when scrolled back up
        header.style.position = 'none';
        header.classList.remove('header-fixed')
    }
});

const btn = document.querySelectorAll('.slide-icon button');
const scrollCont = document.querySelector('.slide-card-cont')
btn.forEach((pushin)=>{
    pushin.addEventListener('click',()=>{
        const sd = (pushin.id === 'fa-angle-right') ? 1 : -1
        const scrollAmo = scrollCont.clientWidth * sd
        scrollCont.scrollBy({left:scrollAmo, behavior: 'smooth'})
    })

    const handle = ()=>{
        const maxScrollLeft = scrollCont.scrollWidth - scrollCont.clientWidth;
        btn[0].style.opacity=(scrollCont.scrollLeft <= 0) ? '0.7' : '1';
        btn[1].style.opacity = (scrollCont.scrollLeft >= maxScrollLeft) ? '0.7' : '1';

    }

  scrollCont.addEventListener('scroll',()=>{
    handle()
  })
    handle()
})


/*const sliderCard = document.querySelectorAll('.slider-card')
sliderCard.forEach((card)=>{
    const childCard = card.children
   card.addEventListener('click',()=>{
    for (let i = 0; i < childCard.length; i++) {
        // Log each child element to the console
        console.log(childCard[i]);
    }
   })
})*/

document.querySelectorAll('.slider-card').forEach((card) => {
    card.addEventListener('click', () => {
        // Function to log children of a given element
        const logChildren = (element) => {
            if (element) {
                for (const child of element.children) {
                    console.log(child);
                }
            }
        };

        // Access and log children of the first child (image container)
        const image = card.children[0];
        logChildren(image);

        // Access and log children of the '.slider-text' element
        const text = card.querySelector('.slider-text');
        logChildren(text);
    });
});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})

const hiddeElement = document.querySelectorAll('.hidden')
hiddeElement.forEach((el)=> observer.observe(el))

const cancel = document.querySelector('.cancel')
const menu = document.querySelector('.menu')
cancel.addEventListener('click',()=>{
    document.getElementById('nav-togle').style.display = 'none'
    console.log('hey')
})
menu.addEventListener('click',()=>{
     document.getElementById('nav-togle').style.display = 'block'
})


