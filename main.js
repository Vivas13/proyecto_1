class Cl_Invitado {
    constructor(nombre, hamburguesas, cervezas) {
        this.nombre = nombre
        this.hamburguesas = hamburguesas
        this.cervezas = cervezas
    }

    CantidadProducto(){
        return this.hamburguesas + this.cervezas
    }
}

class Cl_Fiesta{ 
    constructor(){
        this.acum_cervezas = 0;
        this.acum_hamburguesas = 0;
    }

    Procesar(invitado){
        this.acum_cervezas += invitado.cervezas
        this.acum_hamburguesas += invitado.hamburguesas
    }
}

let fiesta = new Cl_Fiesta()

let invitado_1 = new Cl_Invitado("1", 2, 2)
let invitado_2 = new Cl_Invitado("2", 1, 3)
let invitado_3 = new Cl_Invitado("3", 3, 2)
let invitado_4 = new Cl_Invitado("4", 2, 4)

fiesta.Procesar(invitado_1)
fiesta.Procesar(invitado_2)
fiesta.Procesar(invitado_3)
fiesta.Procesar(invitado_4)

let salida = document.getElementById('salida')

salida.innerHTML = `
    <p>Total cervezas ${fiesta.acum_cervezas}</p>
    <p>total hamburguesas ${fiesta.acum_hamburguesas}</p>
    <br>

    <p> nombre: ${invitado_1.nombre} </p>
    <p> hamburguesas: ${invitado_1.hamburguesas} </p>
    <p> cervezas: ${invitado_1.cervezas}</p>
    <p> cantidad productos ${invitado_1.CantidadProducto()}</p>
    <br>
    <br>

    <p> nombre: ${invitado_2.nombre} </p>
    <p> hamburguesas: ${invitado_2.hamburguesas} </p>
    <p> cervezas: ${invitado_2.cervezas}</p>
    <p> cantidad productos ${invitado_2.CantidadProducto()}</p>
    <br>
    <br>
    
    <p> nombre: ${invitado_3.nombre} </p>
    <p> hamburguesas: ${invitado_3.hamburguesas} </p>
    <p> cervezas: ${invitado_3.cervezas}</p>
    <p> cantidad productos ${invitado_3.CantidadProducto()}</p>
    <br>
    <br>

    <p> nombre: ${invitado_4.nombre}</p> 
    <p> hamburguesas: ${invitado_4.hamburguesas}</p>
    <p> cervezas: ${invitado_4.cervezas}</p>
    <p> cantidad productos ${invitado_4.CantidadProducto()}</p>
    <br>
    <br>


`
