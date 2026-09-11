export default (() => {

    const btnPlus = document.querySelector('.plus')
    const btnMinus = document.querySelector('.minus')
    const input = document.querySelector('.result')

    btnPlus.addEventListener('click', () => {
        input.value++
    })

    btnMinus.addEventListener('click', () => {
        if (input.value <= 0) return
        input.value--
    })
})()