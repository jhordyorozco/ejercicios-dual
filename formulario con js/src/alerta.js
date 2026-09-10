export default (() => {
    const submit = document.querySelector('.btn-submit')

    submit.addEventListener('click', (event) => {
        event.preventDefault()
        alert('The form has been sent.')
    })
})();