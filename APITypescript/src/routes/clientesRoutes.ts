import express from "express";
import { actualizarCliente, eliminarCliente, insertarCliente, obtenerClientes, obtenerUnCliente, getClientesSinPaginar } from "../controller/clientesController";

const router = express.Router();

router.get('/', obtenerClientes);
router.get('/getClientes', getClientesSinPaginar);
router.get('/:id', obtenerUnCliente);

router.post('/', insertarCliente);

router.put('/', actualizarCliente);

router.delete('/',eliminarCliente);




export default router;