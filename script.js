const bar=document.getElementById('bar');
const tar=document.getElementById('tar');
var nav=document.getElementById('navbar');
var nav=document.getElementById('navbar');


if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');

    })
} 
if(tar){
    tar.addEventListener('click',() => {
        nav.classList.add('active');

    })

}