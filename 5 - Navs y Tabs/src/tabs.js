export default (() => {
    const tabButtons = document.querySelectorAll('.tab-btn')
    const tabPanel = document.querySelectorAll('.tab-panel')

    tabButtons.forEach(tab => {
        tab.addEventListener('click', () => {

            tabButtons.forEach(btn => btn.classList.remove('active'))
            tab.classList.add('active')

            tabPanel.forEach(tabP => {
                if (tab.dataset.target === tabP.dataset.target) {
                    tabP.classList.add('active')
                    tabP.hidden = false
                }
                else {
                    tabP.classList.remove('active')
                    tabP.hidden = true
                }
            })
        })
    })

})()

