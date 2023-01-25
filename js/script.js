let userId = Number(prompt ("Ingresá tu DNI"))
let cantidadArticulos = Number(prompt ("¿Cuántos artículos vas a pagar? Podés agregar 5 artículos a tu compra como máximo. PARA SALIR ESCRIBÍ salir."))
let total = 0
let numeroArticulo = 0

const SALIR = "salir"
const ARTICULO = []

class Articulo {
  constructor(nombre, precio){
    this.nombre = nombre.toUpperCase()
    this.precio = parseFloat(precio)
    this.items = []
  }
  sumaIva() {
    this.montoConIva = this.precio * 1.21;
  }
  agregaDetalle(detalle) {
    if ((detalle.nombre != undefined) && (Number(detalle.precio) != NaN)) {
      this.items.push({
        peso: detalle.peso,
        color: detalle.color
      })
    }
    return
  }
}

function agregarDetalles(articulo) {
  let peso = prompt(`Ingrese el peso del artículo`)
  let color = prompt(`Ingrese el color del artículo`)
  articulo.agregaDetalle({peso, color})
}

if (cantidadArticulos > 5) {
  prompt("Solo se pueden agregar hasta 5 artículos, intentá nuevamente. Presioná enter para volver a intentar.")
  cantidadArticulos = prompt ("¿Cuántos artículos vas a pagar? Podés agregar 5 artículos a tu compra como máximo.")
}

for (let articulos = 1; articulos <= cantidadArticulos; articulos++){
  let nombreArticulo = prompt("Ingresá el nombre del artículo. PARA SALIR ESCRIBÍ salir.");
  if(nombreArticulo=="salir"){
    break
  }
  numeroArticulo = articulos
  while(nombreArticulo==""){
    nombreArticulo = prompt("No ingresaste nada delincuente, volvé a intentarlo.")
  }
  let precioArticulo = Number(prompt ("Ingresá el precio del artículo."))
  ARTICULO.push(new Articulo(nombreArticulo, precioArticulo))
  agregarDetalles(ARTICULO[ARTICULO.length-1])
  total = total + precioArticulo
  console.log(`${nombreArticulo}, $${precioArticulo}. SUBOTAL: $${total}`)
}

for (const articulo of ARTICULO)
  articulo.sumaIva();

console.log(`RECIBO de ${numeroArticulo} artículos para el DNI ${userId} - TOTAL A ABONAR: $${total} `)

let buscar = prompt("¿Buscar artículos cargados en tu factura? SI/NO")

if(buscar != "SI"){
  console.log(`salu2!!`)
}

if(buscar == "SI"){
  let nombreArticulo = prompt("Ingrese el nombre del artículo a buscar")
  const resultado = ARTICULO.find((articulo) => articulo.nombre === nombreArticulo.toUpperCase())
  if (resultado) {
    alert(`Se ha encontrado el artículo ${resultado.nombre}`)
  } else {
    alert(`No se ha encontrado ningún artículo con ese nombre`)
  }
}