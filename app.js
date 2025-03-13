// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    let lista = document.getElementById('listaAmigos');
    
    if(amigo == ''){
        alert('Debes ingresar un nombre');
        return;
    }else{
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
        document.getElementById('amigo').value = '';
        window.amigos = [];
        let items = lista.getElementsByTagName('li');
        for (let i = 0; i < items.length; i++) {
            window.amigos.push(items[i].textContent);
        }
      
    }
}

function sortearAmigo(){
    let amigos = window.amigos;
    let resultado = document.getElementById('resultado');
    let amigoRes = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.textContent = amigoRes;

}


  

