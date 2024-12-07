"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const personalController_1 = require("../controller/personalController");
const router = express.Router();
router.get('/', personalController_1.obtenerPersonal);
router.get('/getPersonal', personalController_1.obtenerPersonalSinPaginar); // ruta para el personal sin paginar localhost:30001/api/personal/getPersonal
router.get('/:id', personalController_1.obtenerUnPersonal);
router.get('/telefono/:telefono', personalController_1.obtenerPorTelefono);
router.post('/', personalController_1.insertarPersonal);
router.put('/', personalController_1.modificarPersonal);
router.delete('/', personalController_1.eliminarPersonal);
exports.default = router;
