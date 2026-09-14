export default (() => {
  const btnModal = document.querySelector(".btn-modal")
  const mensaje = document.querySelector(".mensaje")
  const btnAbrir = document.querySelector(".btn-abrir")
  const btnCerrar = document.querySelector(".btn-cerrar")

  btnModal.addEventListener("click", () => {
    mensaje.classList.add("active")
  });

  btnAbrir.addEventListener("click", () => {
    mensaje.classList.remove("active")
  });

  btnCerrar.addEventListener("click", () => {
    mensaje.classList.remove("active")
  });
})();