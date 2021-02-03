window.onload=()=>{
    const buttonMinus=document.querySelector('#button-minus');
    const textValue=document.querySelector('.input-text');
    const buttonPlus=document.querySelector('.button-plus');

    buttonMinus.addEventListener('click',()=>{
       textValue.value--;
    })

    buttonPlus.addEventListener('click',()=>{
        textValue.value++;
    })

}