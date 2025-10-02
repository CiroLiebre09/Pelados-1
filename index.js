import fs from "fs";
import {
  seleccionarCantidadGustos,
  ingresarCliente,
  seleccionarProducto,
  seleccionarSabores,
} from "./dataEntry.js";

// Cargar sabores y productos
// COMPLETEN USTEDES
let sabores = fs.readFileSync("data/sabores.json", "utf-8");
let productos = fs.readFileSync("data/productos.json", "utf-8");
productos = JSON.parse(productos);
sabores = JSON.parse(sabores);
// Ingresar cliente
let cliente = ingresarCliente();
// Elegir producto
let producto = seleccionarProducto(productos);
// Elegir cantidad de gustos
let gustos = seleccionarCantidadGustos(producto.maxGustos);
// Elegir sabores
let saboresElegidos = seleccionarSabores(sabores, gustos);

// Guardar pedido
let pedidoJSON = {nombre: cliente, producto: producto, saboresElegidos: saboresElegidos};
pedidoJSON = JSON.stringify(pedidoJSON, null, 2);
fs.writeFileSync("data/pedidos.json", pedidoJSON);
// COMPLETEN USTEDES
