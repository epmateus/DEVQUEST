const slides = document.querySelectorAll (".slides")
const setaVoltar = document.getElementById('btn-voltar')
const setaAvancar = document.getElementById('btn-avancar')

let slideAtual = 0

setaAvancar.addEventListener("click", function(){
    
    if (slideAtual === slides.length - 1){
        return;
    }

    slideAtual++;

    esconderSlideAberto();
    mostrarSlide()
    mostrarOuEsconderSetas();
})

setaVoltar.addEventListener("click", function(){
    
    if (slideAtual === 0){
        return;
    }

    slideAtual--;

    esconderSlideAberto();
    mostrarSlide()
    mostrarOuEsconderSetas();
})

function mostrarSlide() {
    slides[slideAtual].classList.add("mostrar")
}

function esconderSlideAberto(){
    const slideAberto = document.querySelector(".mostrar");
    slideAberto.classList.remove("mostrar");
}

function mostrarOuEsconderSetas(){
    const naoEOPrimeiroSlide = slideAtual !== 0;
    if (naoEOPrimeiroSlide){
        setaVoltar.classList.remove("opacidade");
    } else{
        setaVoltar.classList.add("opacidade");
    }

    const chegouNoUltimoSlide = slideAtual !== 0 && slideAtual === slides.length - 1;
    if (chegouNoUltimoSlide){
        setaAvancar.classList.add("opacidade");
    } else{
        setaAvancar.classList.remove("opacidade");
    }
}