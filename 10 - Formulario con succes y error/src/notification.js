export default (() => {
    document.addEventListener("notification", (event) => {
        let type = event.detail.type
        let notification = document.querySelector(`.notification-${type}`)

        notification.innerHTML = event.detail.notificationText
        notification.classList.add("active")

        setTimeout(() => {
            notification.classList.remove("active")
        }, 3500)
    })
})()