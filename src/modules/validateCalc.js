const calcValidate = () => {
    const calcSquare = document.getElementById('calc-input')

    const numberEnable = (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")  
    }
    calcSquare.addEventListener('input', numberEnable)
}

export default calcValidate