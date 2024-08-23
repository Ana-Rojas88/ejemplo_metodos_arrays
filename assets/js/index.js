let miarreglo = [1, 2, 3]
console.log(miarreglo)

//El método push se utiliza para agregar elementos en un arreglo al final del arreglo.
miarreglo.push(4)
console.log(miarreglo)

//Podemos agregar elementos al principio de un arreglo con .unshift
miarreglo.unshift(-2, -1, 0)
console.log(miarreglo)

let nuevaLongitud = miarreglo.unshift(4, 5, 6);
console.log(nuevaLongitud)
console.log(miarreglo)

//El método splice es muy flexible y sirve para añadir, remover y reemplazar elementos en un arreglo. Para añadir elementos utilizaremos la sintaxis arreglo.splice(index, 0, valor) donde index es la posición donde añadiremos el dato, 0 indica que no borraremos dato y valor es lo que agregaremos al arreglo.
miarreglo.splice(2, 4)
console.log(miarreglo)

//Para buscar el índice de un elemento utilizaremos .findIndex
let arreglo = [10, 20, 20, 40, 50]
let indice = arreglo.findIndex((element) => {
    return element > 25
})

const numeros = [2, 8, 7, 0, 3, 1, 9]
//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
const numerosFiltrados = numeros.filter(element => element > 3 && element < 20)
console.log(numerosFiltrados)
console.log(indice)

const btnAgregar = document.getElementById("agregar")
const lista = document.getElementById("lista")
const invitados = [
    { id: 431, nombre: "Jhonny Depp", confirmado: false },
    { id: 124, nombre: "Brad Pitt", confirmado: true },
    { id: 541, nombre: "Leonardo DiCaprio", confirmado: false },
    { id: 664, nombre: "Morgan Freeman", confirmado: true }
];

//Función que valida el input tipo CheckBox
const checkInput = (id) => {
    //Metodo find encuentra al usuario que cumpla con la condición
    const invitado = invitados.find((element) => element.id === id);

    const checkbox = document.getElementById(`${invitado.id}`);
    invitado.confirmado = checkbox.checked
    
    const realizadas = invitados.filter((element) => element.confirmado === true);
    console.log(realizadas.length)
    const confirmados = document.getElementById("confirmados")
    confirmados.innerHTML = `Invitados confirmados ${realizadas.length}`
    filterInvitados()

};

//Función que permite renderizar los invitados en el DOM
const filterInvitados = () => {
    let html = ''
    //El método .forEach resulta útil cuando queremos realizar una acción inmediata con cada elemento iterado
    invitados.forEach((invitado) => {
        html += `
        <li>${invitado.id} -- ${invitado.nombre} 
            <button onclick="deleteInvitado(${invitado.id})">Borrar</button> 
            <button>${invitado.confirmado}</button>
            <input id=${invitado.id} onchange="checkInput(${invitado.id})"  ${invitado.confirmado ? "checked" : ""} type="checkbox"/>
         </li>
            `
    })
    lista.innerHTML = html
}

//Función que me permite borrar un invitado
const deleteInvitado = (id) => {
    let index = invitados.findIndex((ele) => {
        ele.id == id
    })
    invitados.splice(index, 1)
    filterInvitados()
}

//Agregar un nuevo invitado
btnAgregar.addEventListener("click", () => {
    const input = document.getElementById("input")
    let id = Math.floor(Math.random() * 999)

    //Objeto que se va agregar al array invitados
    let nuevoInvitado = {
        id: id,
        nombre: input.value,
        confirmado: false
    }
    invitados.push(nuevoInvitado)
    input.value = ""
    filterInvitados()

})

filterInvitados()

