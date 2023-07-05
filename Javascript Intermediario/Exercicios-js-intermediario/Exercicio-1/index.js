// function trocarCorDoQuadradoAzul(){
//     let quadrado = document.getElementsByClassName('quadrado');
    
//     let quadradoAzul = quadrado[0];

//     quadradoAzul.style.backgroundColor = 'yellow';
// }

const btnTrocaCor = document.getElementById("btn-troca-cor");

const quadradoAzul = document.querySelector(".azul");

btnTrocaCor.addEventListener("click", trocarCor);

function trocarCor(){
    quadradoAzul.classList.remove("azul");
    quadradoAzul.classList.add("amarelo");
}