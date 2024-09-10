burger=document.querySelector('.burger')
nav1=document.querySelector('.nav1')
left=document.querySelector('.left ul')
middle=document.querySelector('.middle ul')
right=document.querySelector('.right ul')
jumpbox=document.querySelector('.jumpbox')

burger.addEventListener('click',()=>{
    left.classList.toggle('v-class');
    middle.classList.toggle('v-class');
    right.classList.toggle('v-class');
    nav1.classList.toggle('h-nav');
    jumpbox.classList.toggle('jump')
})
