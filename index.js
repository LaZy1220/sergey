const addOrderButton = document.querySelector('.button-add-service')
const closeWindow =document.querySelector('.close')
const addOrderWindow =document.querySelector('.add-order')
const addOrderWindowHide = ()=>{
    addOrderWindow.style.display='none'
}
const addOrderWindowShow = ()=>{
    addOrderWindow.style.display='block'
}
console.log(addOrderButton,addOrderWindow,closeWindow);
addOrderButton.addEventListener('click',addOrderWindowShow)
closeWindow.addEventListener('click',addOrderWindowHide)