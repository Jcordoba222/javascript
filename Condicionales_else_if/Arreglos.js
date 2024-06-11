var lista=[]

lista[2]='Lechuga'
lista[1]='Milo'
lista[3]='Toamate'
lista[0]='Arros'

console.log(lista)
console.log(lista.length)
lista.unshift('Amarillo')
lista.push('Rojo')
console.log(lista)
lista.pop()
console.log(lista)

var colores = ['Amarillo', 'Arros', 'Milo', 'Lechuga', 'Toamate'];
var pinturas = colores.includes('Milo');
console.log(pinturas);  // This will print false because 'mango' is not in the array


var numeros=[8,9,10,100,200];

var recorre=numeros.every((num)=>{
    return num <3000
})
console.log(recorre)

var nombre='camilo'

var separar=nombre.split('')
console.log(separar)
separar.pop()
separar.push('a')
console.log(separar)

var unida=separar.join('')
console.log(unida)


var numero=[3,8,9,10]
numero.forEach((num)=>console.log(num))
numero.forEach((num)=>{
    if(num === 10){
        console.log(num)
    }
})
var masUno=numero.map((num)=>
    {return num + 1

    })
console.log(masUno)


function processData(input) {
    console.log(input)
}
processData('How many chickens does it take to cross the road?')



