export default (() => {
    const form = document.querySelector("form")
    const nameInput = document.querySelector('[name="name"]')
    const lastNameInput = document.querySelector('[name="lastname"]')
    const emailInput = document.querySelector('[name="correo"]')
    const checkInput = document.querySelector('[name="check"]')
    const messageInput = document.querySelector('[name="message"]')

    form?.addEventListener("submit", (event) => {
        event.preventDefault()

        let name = nameInput.value
        let lastname = lastNameInput.value
        let email = emailInput.value
        let message = messageInput.value
        let check = checkInput.checked

        if (name && lastname && email && check && message) {
            document.dispatchEvent(new CustomEvent('notification', {
                detail: {
                    type: 'succes',
                    notificationText: 'Message sent successfully'
                }
            }))
        }
        else {
            document.dispatchEvent(new CustomEvent('notification', {
                detail: {
                    type: 'error',
                    notificationText: 'Error sending message'
                }
            }))
        }
    })
})()