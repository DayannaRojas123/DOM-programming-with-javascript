//EJERCICIO1
boton1 = document.getElementById('select') //captura todo el select
input1 = document.getElementById('number') //input del numero de la casilla
input2 = document.getElementById('texto') //input del nombre del color
input3 = document.getElementById('valor') //input del valor del color
input4 = document.getElementById('colores') //input de colores
boton1.addEventListener('click', () => {
		//cuando haga click en seccion ejecuta la funcion
		input1.value = boton1.selectedIndex //muestra en el input  de numero el indice escogido del select
		input2.value = boton1.options[boton1.selectedIndex].text //muestra en el input del nombre de color el texto que hay en la opcion del select
		let ccol = boton1.options[boton1.selectedIndex].value //variable que guarda el valor del indice de la opcion escogida del select
		input3.value = '#' + ccol //muestra en el input del valor la variable ccol contaneada con el #
		input4.value = input3.value //cambia el color del input tipo colores mediante el value del input 3
	})
	//EJERCICIO2
const fncontrolarcaracteres = () => {
	const tamtxtarea = document.getElementById('curriculum') //trae del html el textarea
	if(tamtxtarea.value.length <= 0) //trae el valor ingresado del textarea y mira su longitud, si su longitud es cero realiza una alerta
	{
		alert("Campo de texto vacio")
	} else if(tamtxtarea.value.length > 50) //si si long. es mayor  a 50 excede el limite y sale alerta
	{
		alert("Texto de 50max")
	} else //si no cumple ninguna de las demas condiciones el tamaño es correcto
	{
		alert("tamaño de texto correcto")
	}
}
const btn = document.getElementById('btntextarea') //constante de boton del html
btn.addEventListener('click', fncontrolarcaracteres) //cuand haga click en ese boton activa la funcion de controlar caracteres
	//EJERCICIO 3
	//validacion 1:
let patronletra = /^[a-zA-Z]/ //empieza con una letra y contiene ambas
let patronvocal = /[aeiouAEIOUáéíóú]/ //contiene vocales
let texto1 = 'texto contiene letra y contiene una vocal' //el parrafo que va a salir en las validaciones
let texto2 = 'texto no contiene letra o no contiene una vocal'
let btnrg1 = document.getElementById('btnregular1').addEventListener('click', validarletra)

function validarletra() {
	let palabra = document.getElementById('textcar').value
	if(patronletra.test(palabra) && patronvocal.test(palabra)) { //si palabra cumple con el test de patron vocal y letra 
		document.getElementById('rtaregular1').innerHTML = texto1 //el parrafo sera igual a uno de los textos
	} else {
		document.getElementById('rtaregular1').innerHTML = texto2
	}
}
//validacion 2:
let patronletras = /^[a-zA-Z0-9]*$/ //contiene letras y numeros
let patronnumeros = /[0-9]{1}/ //numeros del 0 al 9 cantidad 1 al menos
let texto3 = 'correcto!'
let texto4 = 'texto debe contener 6 caracteres: letras/vocales/numeros'
let btnreg2 = document.getElementById('btnregular2').addEventListener('click', validarcajatexto)

function validarcajatexto() {
	let entradareg = document.getElementById('textreg').value
	if(patronletras.test(entradareg) && patronnumeros.test(entradareg) && entradareg.length > 5) { //mira que la longitud de lo que escribio sea mayor a 5 o sea 6 caracteres
		document.getElementById('rtaregular2').innerHTML = texto3
	} else {
		document.getElementById('rtaregular2').innerHTML = texto4
	}
}
//validacion 3:
let solonumeros = /^607[0-9]{7}/ //debe empezar con 607 seguido de 7 numeros del 0 al 9
let btnreg3 = document.getElementById('btnregular3').addEventListener('click', validarnum)
let texto5 = 'mal'
let texto6 = 'bien'

function validarnum() {
	let entradanum = document.getElementById('textnumber').value
	if(solonumeros.test(entradanum) && entradanum.length === 10) { //lo que escrimos debe tener longitud de 10
		document.getElementById('rtaregular3').innerHTML = texto6
	} else {
		document.getElementById('rtaregular3').innerHTML = texto5
	}
}
//EJERCICIO 4
btntec1 = document.getElementById('btnteclado1').addEventListener('click', alerta)
inputletra = document.getElementById('textoletra')
numeromorado = document.getElementById('cantidad')
maxcaracter = document.getElementById('maxcaracter').addEventListener('keyup', () => { //el evento keyup para cuando oprima la primer tecla empiece a ejecutar la funcion 
	let maximo = document.getElementById('maxcaracter').value.length //evalua y mira la longitud 
	let inicio = 50 - +maximo //le resta 50 a la variable maximo que es donde almacenamos la longitud de lo que agregamos
	numeromorado.innerHTML = inicio //el numero del span mostrara la resta de la variable inicio -1 cada que oprimimos 1 tecla
	if(inicio <= 0) {
		alert('limite de maximo permitido pasado')
	}
})

function alerta() {
	let resultado = inputletra.value
	alert(resultado)
}
//EJERCICIO 5
function muestra(num) { //funcion para mover las imagenes
	let imagen = document.images[num].src //en la variable imagen guarda las imagenes del html con su posicion segun la que escojemos y ruta
	let grande = document.images['pantalla'] //variable grande dice que las imagenes del documento se mostraran donde esta el id pantalla
	grande.src = imagen //la imagen que escogio segun el num de imagen se mostrara en la variabe grande
}
//EJERCICIO 6
const nuevoelemento = document.createElement('p')
const nuevotexto = document.createTextNode('insertando nuevo texto - coex')
	//opcion 2
const nuevonodo = nuevoelemento.appendChild(nuevotexto) //el padre nuevo nodo tiene un hijo y ese hijo hereda a otro hijo llamado nuevo texto
	//opcion 1
	/*  nuevoelemento.appendChild(nuevotexto)  */
document.getElementById('btncrear').addEventListener('click', crear)

function crear() {
	//para opcion 1:
	/* 
	    document.getElementById('nuevotexto').appendChild(nuevoelemento) */
	//para opcion 2:
	let contenedor = document.getElementById('nuevotexto')
	contenedor.appendChild(nuevonodo)
}
document.getElementById('btncopiar').addEventListener('click', copiar)

function copiar() {
	let copiarnodo = document.getElementById('nuevotexto')
	let copia = copiarnodo.cloneNode(true) //clona a copiarnodo guardandola en la variable copia
	document.getElementById('copia').appendChild(copia) //a copia le inserta copia
}
document.getElementById('btneliminar').addEventListener('click', eliminar)

function eliminar() {
	let eliminarnodo = document.getElementById('nuevotexto') //tambien la variable sera en nuevo texto
	eliminarnodo.parentNode.removeChild(eliminarnodo) //a el padre de arriba le elimina el hijo que en este caso sera lo que haya en eliminar nodo recientemente
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
//EJERCICIO 7
let listaElementos = document.querySelector("#elementos");
let form = document.querySelector("#frmlista");
form.addEventListener("submit", agregarelemento); //lama a la variable form y cuando haga el evento submit que se activa cuando el formulario es enviado
//e invoca la funcion agregar el elemento
function agregarelemento(evento) {
	evento.preventDefault(); //se debe usar preventdefault para que no se despliegue hacia arriba por la naturaleza de su evento
	let newElement = document.getElementById("textelemento").value; //toma el valor que ingresamos en el espacio
	let li = document.createElement("li"); //crea un li
	let btnDelete = document.createElement("button"); //crea un botton
	li.className = "list-group-item";
	btnDelete.className = "btn btn-light btn-outline-danger btn-sm float-end delete"
	li.appendChild(document.createTextNode(newElement)); //a li le inserta el hijo que toma el texto del newelement que creamos
	btnDelete.appendChild(document.createTextNode("x")); //lo mismo pero con delete
	listaElementos.appendChild(li); //a la lista de elementos le inserta los li con su textoo correspondiente
	li.appendChild(btnDelete); //y a los li con su boton x correspondiente
}
listaElementos.addEventListener("click", fnEliminarElemento);

function fnEliminarElemento(evento) {
	if(evento.target.classList.contains("delete")) {
		if(confirm("¿Seguro de eliminar Elemento?")) { //muestra un mensaje de confirmacion y elimina al hijo de li de la lista
			let li = evento.target.parentElement;
			listaElementos.removeChild(li);
		}
	}
}