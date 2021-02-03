window.onload=()=>{
   let inputText= document.querySelector('#input-text');
   let countText=document.querySelector('.count-text');
   inputText.addEventListener('input',()=>{
      countText.innerHTML=inputText.value.length;
   })
}