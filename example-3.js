window.onload=()=>{
 const encodeButton=document.querySelector('#encode-button');
 const decodeButton=document.querySelector('#decode-button');
 const inputText=document.querySelector('.input-text');
 const resultText=document.querySelector('.result-text');
 
 encodeButton.addEventListener('click',()=>{
  resultText.value=encodeURIComponent(inputText.value);

 });

 decodeButton.addEventListener('click',()=>{
    resultText.value=decodeURIComponent(inputText.value);
   });
}