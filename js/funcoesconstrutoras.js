//Funções construtoras também são funções e uma forma válida de criar um objeto assim como funções factory.

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('o')
    }
}
//               
//|> "new" vai criar um novo objeto vazio "Circle" que vai ter a propriedade "radius" onde o this, vai apontar para esse novo objeto
const circle3 = new Circle(1);
circle3.draw();