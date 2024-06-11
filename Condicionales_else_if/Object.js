var Camilo={
compas:["Daniel","Hayberth","Rua"],
Edad:[25,18,20]

}

var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad)
persona.estudios.esProgramador=false
console.log(persona.estudios.esProgramador)
persona.edad=20
console.log(persona.edad)

var carros={}
carros.tipos=['ferrari','bugatti']
delete carros.tipos
console.log(carros)

var nombre={saludar:function anime(){
    console.log('Naruto')
}}
nombre.saludar()

var marcas={nike:['zapatos','Camisas'],puma:['zapatos','camisas']}
console.log(marcas.nike)

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
// BRACKET NOTATION
atuendos['pierna'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

var series={}

var anime=function(anime1,anime2){
    series.anime1=['Goku','Pokemon']
    series[anime2]=['Naruto','Shingeki']


}
anime('Vistos','Favoritos')
console.log(series)///
///


var biblioteca={libro:'Mil de soledad', autor:'Gabriel'}
var propiedad=biblioteca.hasOwnProperty('autor')
console.log(propiedad)