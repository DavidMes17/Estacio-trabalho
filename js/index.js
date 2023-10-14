/* Slide */
let i = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    nextSlide();
}, 5 * 1000);

function nextSlide(){
    i++;
    if (i>3){
        i = 1;
    };
    document.getElementById('radio'+i).checked = true;
}

/* Scroll */
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');

button1.addEventListener("click", function(){
    var idDestino = button1.getAttribute("data-parameter");
    var destino = document.getElementById(idDestino);
    destino.scrollIntoView();
})
button2.addEventListener("click", function(){
    var idDestino = button2.getAttribute("data-parameter");
    var destino = document.getElementById(idDestino);
    destino.scrollIntoView();
})
button3.addEventListener("click", function(){
    var idDestino = button3.getAttribute("data-parameter");
    var destino = document.getElementById(idDestino);
    destino.scrollIntoView();
})
button4.addEventListener("click", function(){
    var idDestino = button4.getAttribute("data-parameter");
    var destino = document.getElementById(idDestino);
    destino.scrollIntoView();
})

/* notification */
const btn = document.querySelector('#button')
const btn2 = document.querySelector('.student-btn')
const divMessage = document.querySelector('.alert')
const msg = 'Redirecionando para um site externo'

function ativar (href) {
    const message = document.createElement('div')

    const btnCancel = document.createElement('input')
    btnCancel.setAttribute('type', 'button')
    btnCancel.setAttribute('value', 'Cancelar')
    btnCancel.classList.add('button')
    btnCancel.classList.add('btn')
    
    message.classList.add('message')
    message.innerText = msg
    divMessage.appendChild(message)
    message.appendChild(btnCancel)

    notif = setTimeout(()=>{
        message.style.display = 'none'
        window.location.href = href
    }, 5 * 1000)

    btnCancel.addEventListener('click', ()=>{
        clearTimeout(notif)
        divMessage.innerHTML = '';
    })    
    
}

btn.addEventListener('click', ()=>{
    href = btn.getAttribute("data-id")
    if(href){
        ativar(href)
    }
})
btn2.addEventListener('click', ()=>{
    href = btn2.getAttribute("data-id")
    if(href){
        ativar(href)
    }
})
