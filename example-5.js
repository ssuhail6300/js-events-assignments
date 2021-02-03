window.onload=()=>{
    let hexValue=document.querySelector('.input-text');
    let backgroundColor=document.querySelector('.color-element');
    hexValue.addEventListener('input', ()=>{
        backgroundColor.style.backgroundColor=hexValue.value; 
    })
}