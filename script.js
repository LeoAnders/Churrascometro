//window "Modal"
//Open Modal 
let openModalButton = document.querySelector("#open-modal")
let closeModalButton = document.querySelector("#close-modal")
let modal = document.querySelector("#modal")
let fade = document.querySelector("#fade")

//create function
let toggleModal = () => {
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}
//create array
//forEach percorre todos os itens de um array, tal como o loop for normal
[openModalButton, closeModalButton, fade].forEach((Element)=> {
    Element.addEventListener("click", () =>toggleModal())

})