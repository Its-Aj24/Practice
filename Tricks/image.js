const imagee = document.querySelector("img"),input= document.querySelector("input");
input.addEventListener("change",()=>{
    imagee.src = URL.createObjectURL(input.files[0]);
})
