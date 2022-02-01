//Vamos agora criar uma função factory utilizando o mesmo exemplo do que fizemos em literais de objetos

function createCircle(radius) {
    
    //Não precisamos criar a constante novamente (e tambem não poderiamos), podemos apenas retornar esse objeto
    return {
        //Como a função recebe o parâmetro "radius" não precisamos declarar o seu valor aqui
        radius,
        position: {
            x: 1,
            y: 1,
        },
        draw: function(){
            console.log('O');
            console.log(radius);
        }
    }

}

const circle2 = createCircle(2)
circle2.draw();

