// models/recordpagos.js
const mongoose = require("mongoose");

const recordPagosSchema = new mongoose.Schema({
  id_Record: { type: Number, required: true, unique: true },  // Asegúrate de que esté definido como `id_Record`
  id_Deuda: { type: Number, required: true, ref: 'Deudas' },  // Relación con la deuda (clave foránea)
  fechaPago: { type: Date, required: true },
  montoPagado: { type: Number, required: true },
  metodoPago: { type: String, required: true },
  estadoPago: { type: String, enum: ['pendiente', 'pagado', 'devuelto'], required: true }
});

module.exports = mongoose.model("RecordPagos", recordPagosSchema);
