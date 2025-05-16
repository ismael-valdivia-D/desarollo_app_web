//prueba de conexion
console.log("Conexion establecida con js!")

//Creacion de variables
let num = 25; // Variable INT (Número Entero)
let dec = 3.14; // Variable Float (Número Decial)
let txt = "Buenos Dias"; // Variable String (Cadena de texto)
let Bool = true; // Variable Booleano (valor true or false)
let arry = [1,2,3]; // Variable Arryse (Arreglo de numeros)
let obj = {
    nombre: "Ana", // variable object(Grupo de datos con nombre)
    edad:20
    };
let und;

let Null = null;

   // Variable INT (Número Entero)

function numeroEntero(){
    return "Variable Numerica: "+ num;
}
    function numeroDecimal(){
        return "Variable Decimal: "+ dec;
    
    }

    function numeroString(){
        return "Variable String"+ txt
    }

    function numeroBooleano(){
        return "Variable Booleano"+ Bool
    }

    function numeroArryse(){
        return "Variable Arryse"+ arry
    }

    function numeroObject(){
        return "Variable Object"+ obj
    }

    function numeroUndefined(){
        return "variable undefined"+ und
    }

function numeroNull(){
    return"variable  undefinded"+ Null
}



// Impresíon en consola

console.log(numeroEntero())
console.log(numeroDecimal())
console.log(numeroString())
console.log()
