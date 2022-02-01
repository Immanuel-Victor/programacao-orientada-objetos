
//Criando um objeto atravéz da literal:

const circle1 = {
    //Isso são características de um objeto
    radius: 1,
    position: {
        x: 1,
        y: 1,
    },
    //Isso é um método de um Objeto - quando um objeto tem um método, ele possui algo que chamamos de comportamento
    draw: function(){
        console.log('O')
    }
}

circle1.draw();

//apesar de ser fácil criar objetos a partir da literal de um objeto, infelizmente se um objeto tiver um certo comportamtento não necessáriamente isso é uma coisa boa a se fazer quando precisamos duplicá-lo

