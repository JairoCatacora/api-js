// models/deudas.js

const mongoose = require("mongoose");

const deudasSchema = new mongoose.Schema({
  id_Deuda: { type: Number, required: true, unique: true },  // Identificador único de la deuda
  numeroCuotas: { type: Number, required: true },  // Número de cuotas
  montoPorCuota: { type: Number, required: true },  // Monto por cada cuota
  fechaInicio: { type: Date, required: true },  // Fecha de inicio del plan de pagos
  fechaFin: { type: Date, required: true },  // Fecha de finalización del plan de pagos
  estado: { type: String, enum: ['activo', 'finalizado', 'en mora'], required: true }  // Estado de la deuda
});

module.exports = mongoose.model("Deudas", deudasSchema);
