//para declarar un string (cadena de texto debemos de colocarlo entre comillas simples o dobles)

var nombre = 'manuel';
var apellido = "DURAN";

console.log("El nombre es "+nombre+" y el apellido es "+apellido);

// para pasar toda una cadena a mayuscula podemos usar la funcion "toUpperCase()"

var nombreEnMayus = nombre.toUpperCase();
var apellidoEnMinus = apellido.toLowerCase();

console.log("nombre en mayuscula: " + nombreEnMayus);
console.log("Apellido en minuscula: " + apellidoEnMinus);

//Y que pasa si queremos saber cual es el primer caracter de un string?
//podemos usar la funcion "charAt()"

//nota: el primer caracter de todo string se encuentra en la posicion Cero (0)
//se debe de pasar obligatoriamente un parametro a esta función.
//la funcion respeta si la variable esta en mayuscula o minuscula.

var primeraLetraDelNombre = nombre.charAt(0);

console.log("primer letra del nombre: " + primeraLetraDelNombre);

//y si quieremos saber cuantos es el largo de mi cadena de string?
//podemos usar el atributo "length"
//esta funcion no requiere parametros y retorna un entero

var cantidadDeCaracteresNombre = nombre.length;

console.log("cantidad de letras en nombre: " + cantidadDeCaracteresNombre);

//Tambien puedes concatenar cadenas de caracteres con el signo "+"

var nombreCompleto = nombre + apellido;

console.log("el nombre completo es: " + nombreCompleto);

//pero de esta forma concatena las dos cadenas pegadas :( sin espacios.
//podemos nosotros agregar un string con las comillas simples y un espacio concatenando.
//de la siguiente forma:

var nombreCompletoConEspacio = nombre + " " + apellido;

console.log("el nombre completo con espacio es: " + nombreCompletoConEspacio);

//pero esta forma de concatenacion es poco clara :(
//que pasa si tenemos MUCHAS cadenas de texto que concatenar con espacios?
//o no sabemos cuantas cadenas vamos a concatenar?
//para ello usamos la funcion interpolacion de texto
//para usarla facilmente solo necesitamos usar las comillas invertidas ` `

var nombreCompletoConInterpolacion = `${nombre} ${apellido}`;

console.log("el nombre completo haciendo interpolacion: " + nombreCompletoConInterpolacion);

//lo interezante de la interpolacion es que se puede escribir codigo JS entre las llaves
//haciendo posible que incluso se llame funciones para las variables.
//por ejemplo:

var nombreCompletoConInterpolacionYTratamiendoDeVariables = `${nombre} ${apellido.toLocaleLowerCase()}`;

console.log("el nombre completo haciendo interpolacion y tratando las variables: " + nombreCompletoConInterpolacionYTratamiendoDeVariables);

//por ultimo tambien podemos crear nuestras cadenas de caracteres con otros caracteres con otras cadenas de caracteres de la siguiente manera

var miStr = nombreEnMayus.charAt(0) + apellido.charAt(0);

//especificando los caracteres

console.log("y tus iniciales son: " + miStr);

//pero que pasa si tenemos que crear varios caracteres seguidos en una cadena?
//podemos usar la funcion substr()
//donde el primer numero es donde va a iniciar la cadena (en nuestro caso el 0)
//y los siguiente son los caracteres a mostrar

var miSubstr = nombre.substr(0,3);

console.log("y las primeras 3 letras de tu nombre son: " + miSubstr);



//RECUERDA REALIZAR LOS RETOS DE LA CLASE ~~ (recuerda la practica hace al maestro)
//RETO: MOSTRAR AL USUARIO EL ULTIMO CARACTER DE SU NOMBRE!

