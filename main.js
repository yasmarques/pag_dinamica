function tocaSom(idElementoAudio){

    document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listaTeclas.length; contador++) {

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
}
