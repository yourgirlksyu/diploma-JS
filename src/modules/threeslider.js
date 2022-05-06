const slider = () => {
    const benefitItems = document.querySelectorAll('.benefits__item')

    const checkForInnerWidth = () => {
            benefitItems.forEach((benefitItem, i) => {
                if (window.innerWidth >= 576) {
                    if (i > 2) {
                        benefitItem.classList.add('not-active')
                    }
                } else {
                    if (i > 0) {
                        benefitItem.classList.add('not-active')
                    }
                }   
            })
    }

    checkForInnerWidth()
    

    document.addEventListener('click', (e) => {
        if (e.target.closest('.benefits__arrow--right')) {
            benefitItems.forEach(benefitItem => {
                if (benefitItem.classList.contains('not-active')) {
                    benefitItem.classList.remove('not-active')
                } else {
                    benefitItem.classList.add('not-active')
                }
            })
        }
        if (e.target.closest('.benefits__arrow--left')) {
            benefitItems.forEach(benefitItem => {
                if (benefitItem.classList.contains('not-active')) {
                    benefitItem.classList.remove('not-active')
                } else {
                    benefitItem.classList.add('not-active')
                }
            })
        }
    })
}

export default slider