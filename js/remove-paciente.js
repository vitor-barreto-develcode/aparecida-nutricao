var tabela = document.querySelector('#tabela-pacientes');
tabela.addEventListener('dblclick', function(event){
    // Somente executará caso o elemento seja <td>
    if (event.target.tagName == 'TD'){
        event.target.parentNode.classList.add("fadeOut");

        setTimeout(function(){
            event.target.parentNode.remove(); //Deletando a td clicada usando o pai como referencia
        }, 500);
    };
});

