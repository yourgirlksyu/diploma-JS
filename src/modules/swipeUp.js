const up = () => {
    const smoothScrollBtn = document.querySelector('.smooth-scroll')

    smoothScrollBtn.style.display = 'none'
    
    const trackingScroll = () => {
        let scrolled = window.scrollY
        let coordinates = document.documentElement.clientHeight
        
        if (scrolled > coordinates) {
            smoothScrollBtn.style.display = 'block'
        }else if (scrolled < coordinates) {
            smoothScrollBtn.style.display = 'none'
        }
    }

    function topFunction() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    smoothScrollBtn.addEventListener('click', topFunction)
    window.addEventListener('scroll', trackingScroll)
}
export default up