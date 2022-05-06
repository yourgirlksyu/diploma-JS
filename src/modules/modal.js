
const modal = () => {
    const headerModal = document.querySelector('.header-modal')
    const serviceModal = document.querySelector('.services-modal')

    const overlay = document.querySelector('.overlay')

    const closeHeaderModalBtn = document.querySelector('.header-modal__close')
    const closeServiceModalBtn = document.querySelector('.services-modal__close')
    const fancyBtns = document.querySelectorAll('.fancyboxModal')

    fancyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.hash === '#callback') {
                // console.log('#callback');
                headerModal.style.display = 'block'
                overlay.style.display = 'block'
            } else if (btn.hash === '#application') {
                // console.log('no application');
                serviceModal.style.display = 'block'
                overlay.style.display = 'block'
                
            }
        })
    })

    closeHeaderModalBtn.addEventListener('click', () => {
        headerModal.style.display = 'none'
        overlay.style.display = 'none'
    })
    closeServiceModalBtn.addEventListener('click', () => {
        serviceModal.style.display = 'none'
        overlay.style.display = 'none'
    })
    
}
export default modal