const itensPerguntasERespostas = document.querySelectorAll(".item");

itensPerguntasERespostas.forEach(function(item){
    item.classList.remove("ativo");
    
    item.addEventListener("click", function(){
        const itemAtivoAtual = document.querySelector(".ativo");
        
        if(itemAtivoAtual){
            itemAtivoAtual.classList.remove("ativo");
        }

        item.classList.add("ativo");
    })
})

// MINHA RESOLUÇÃO

// const accordion = document.querySelectorAll ("accordion")
// const answers = document.getElementsByClassName ("answer")
// const arrows = document.getElementsByClassName ("arrow")

// for (var i = 0; i < accordion.length; i++){
//     accordion[i].addEventListener("click", function(){
        
//         const answer = this.nextElementSibling;
        
//         if(answer.style.display === "block"){
//             answer.style.display = "none";
//         } else{
//             answer.style.display = "block";
//         }

//         for (const j = 0; j < answers.length; j++){
//             if (answers[j] !== answer){
//                 answers[j].style.display = "none";
//             }
//         }

//         const arrow = this.lastElementChild;

//         for (const k = 0; k < arrows.length; k++){
//             if (arrows[k] !== arrow){
//                 arrows[k].classList.remove("colored-arrow")
//             } else{
//                 arrows[k].classList.add("colored-arrow")
//             }
//         }
//     })
// }