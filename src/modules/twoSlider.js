const two = () => {
    const cards = document.querySelectorAll('.col-md-12.col-lg-6')

    const checkForInnerWidth = () => {
        cards.forEach((card, i) => {
            if (window.innerWidth >= 576) {
                if (i > 2) {
                    card.classList.add('not-active')
                }
            } else {
                if (i > 0) {
                    card.classList.add('not-active')
                }
            }   
        })
}

checkForInnerWidth()


document.addEventListener('click', (e) => {
    if (e.target.closest('.services__arrow--right')) {
        cards.forEach(card => {
            if (card.classList.contains('not-active')) {
                card.classList.remove('not-active')
            } else {
                card.classList.add('not-active')
            }
        })
    }
    if (e.target.closest('.services__arrow--left')) {
        cards.forEach(card => {
            if (card.classList.contains('not-active')) {
                card.classList.remove('not-active')
            } else {
                card.classList.add('not-active')
            }
        })
    }
})
}
export default two