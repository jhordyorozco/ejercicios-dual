class Batman extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadow.innerHTML =
    /*html*/`

    <style>

    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --amarillo: hsl(48, 100%, 48%);
    --amarilloclaro: hsl(49, 100%, 68%);
    --gris: hsl(0, 0%, 33%);
    --negro: hsl(0, 0%, 2%);
    --grisoscuro: hsl(0, 0%, 13%);
    --rojoscuro: hsl(0, 100%, 27%);
    --rojo: hsl(0, 100%, 35%);
    --blanco: hsl(0, 0%, 100%);
}

body {
    position: relative;
    min-height: 100vh;
    display: grid;
    place-items: center;
    background-color: var(--negro);
    padding: 1rem;
    overflow-x: hidden;
    font-family: 'Times New Roman', Times, serif;
}

.fondo {
    position: fixed;
    inset: 0;
    z-index: 0;
    overflow: hidden;
}

.fondo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
}
</style>

<div class="fondo" >
 <img src="../2 - calculadora/img/batmanyrobin66.webp" alt="Fondo Batman y Robin">
</div>

    <div class="title">
      <h1>${this.title}</h1>
    </div>
    `

        this.shadow.querySelector('.title').addEventListener('click', () => {
            this.alertMessage()
        })
    }

    alertMessage() {
        alert(this.message)
    }
}

customElements.define('batmanhero-component', Batman);