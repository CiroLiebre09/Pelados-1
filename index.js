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
sabores = JSON.parse(sabores);
productos = JSON.parse(productos);
// Ingresar cliente
let cliente = ingresarCliente();
// Elegir producto
let producto = seleccionarProducto(productos);
// Elegir cantidad de gustos
let gustos = seleccionarCantidadGustos(producto.maxGustos);
// Elegir sabores
let saboresElegidos = seleccionarSabores(sabores, gustos);

// Guardar pedido
// COMPLETEN USTEDES
