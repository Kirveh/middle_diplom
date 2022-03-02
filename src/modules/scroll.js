const scroll = () => {
    const Scroll = document.querySelector('.smooth-scroll');
    const section = document.querySelector(".section")
    let num = 0 
    const hidden = () => {Scroll.style.display = 'none';}
    hidden();
    window.onscroll = () => {
        if (window.pageYOffset < section.scrollHeight) {
            Scroll.style.display = 'none'
            num++
        } else if (window.pageYOffset > section.scrollHeight && num > 0){
            Scroll.style.display = 'block'
        }
    };
    Scroll.addEventListener('click', function (e) {
        e.preventDefault();
        const id = Scroll.getAttribute('href');

    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    return id    
    });
}

export default scroll;