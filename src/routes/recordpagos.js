// routes/recordpagos.js

const express = require("express");
const recordPagosSchema = require("../models/recordpagos");
const deudasSchema = require("../models/deudas");  // Importar el modelo de `Deudas` para validar
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     RecordPagos:
 *       type: object
 *       required:
 *         - id_Record
 *         - id_Deuda
 *         - fechaPago
 *         - montoPagado
 *         - metodoPago
 *         - estadoPago
 *       properties:
 *         id_Record:
 *           type: number
 *           description: Identificador único del registro de pago.
 *         id_Deuda:
 *           type: number
 *           description: Identificador de la deuda asociada al registro de pago.
 *         fechaPago:
 *           type: string
 *           format: date
 *           description: Fecha en que se realizó el pago.
 *         montoPagado:
 *           type: number
 *           description: Monto pagado en la transacción.
 *         metodoPago:
 *           type: string
 *           description: Método utilizado para realizar el pago (ej. tarjeta, efectivo, transferencia).
 *         estadoPago:
 *           type: string
 *           enum:
 *             - pendiente
 *             - pagado
 *             - devuelto
 *           description: Estado del pago.
 *       example:
 *         id_Record: 1
 *         id_Deuda: 101
 *         fechaPago: "2024-10-15T00:00:00.000Z"
 *         montoPagado: 200.00
 *         metodoPago: "transferencia"
 *         estadoPago: "pagado"
 */

/**
 * @swagger
 * /api/recordpago:
 *   post:
 *     summary: Crear un nuevo registro de pago
 *     tags: [RecordPagos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecordPagos'
 *     responses:
 *       201:
 *         description: ¡Registro de pago creado exitosamente!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Registro de pago creado exitosamente"
 *                 data:
 *                   $ref: '#/components/schemas/RecordPagos'
 *       400:
 *         description: Error al crear el registro de pago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al crear el registro de pago. Revisa los datos enviados."
 */

/**
 * @swagger
 * /api/recordpago:
 *   get:
 *     summary: Obtener todos los registros de pago
 *     tags: [RecordPagos]
 *     responses:
 *       200:
 *         description: Lista de todos los registros de pago.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RecordPagos'
 *       500:
 *         description: Error al obtener los registros de pago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al obtener los registros de pago."
 */

/**
 * @swagger
 * /api/recordpago/{id_Record}:
 *   get:
 *     summary: Obtener un registro de pago por ID
 *     tags: [RecordPagos]
 *     parameters:
 *       - in: path
 *         name: id_Record
 *         schema:
 *           type: number
 *         required: true
 *         description: ID del registro de pago que se quiere obtener
 *     responses:
 *       200:
 *         description: Registro de pago encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RecordPagos'
 *       404:
 *         description: Registro de pago no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Registro de pago no encontrado."
 *       500:
 *         description: Error al obtener el registro de pago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al obtener el registro de pago."
 */

/**
 * @swagger
 * /api/recordpago/deuda/{id_Deuda}:
 *   get:
 *     summary: Obtener todos los registros de pago por ID de deuda
 *     tags: [RecordPagos]
 *     parameters:
 *       - in: path
 *         name: id_Deuda
 *         schema:
 *           type: number
 *         required: true
 *         description: ID de la deuda cuyos registros de pago se desean obtener
 *     responses:
 *       200:
 *         description: Lista de todos los registros de pago para la deuda especificada.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RecordPagos'
 *       500:
 *         description: Error al obtener los registros de pago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al obtener los registros de pago."
 */

/**
 * @swagger
 * /api/recordpago/{id_Record}:
 *   put:
 *     summary: Actualizar un registro de pago por ID
 *     tags: [RecordPagos]
 *     parameters:
 *       - in: path
 *         name: id_Record
 *         schema:
 *           type: number
 *         required: true
 *         description: ID del registro de pago que se quiere actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecordPagos'
 *     responses:
 *       200:
 *         description: Registro de pago actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Registro de pago actualizado exitosamente"
 *       404:
 *         description: Registro de pago no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Registro de pago no encontrado."
 *       400:
 *         description: Error al actualizar el registro de pago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al actualizar el registro de pago. Revisa los datos enviados."
 */

/**
 * @swagger
 * /api/recordpago/{id_Record}:
 *   delete:
 *     summary: Eliminar un registro de pago por ID
 *     tags: [RecordPagos]
 *     parameters:
 *       - in: path
 *         name: id_Record
 *         schema:
 *           type: number
 *         required: true
 *         description: ID del registro de pago que se quiere eliminar
 *     responses:
 *       200:
 *         description: Registro de pago eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Registro de pago eliminado exitosamente"
 *       404:
 *         description: Registro de pago no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Registro de pago no encontrado."
 *       500:
 *         description: Error al eliminar el registro de pago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al eliminar el registro de pago."
 */

// Crear un nuevo registro de pago (POST)
router.post("/recordpago", async (req, res) => {
  const { id_Record, id_Deuda, fechaPago, montoPagado, metodoPago, estadoPago } = req.body;

  try {
    // Verificar que `id_Record` esté presente y no sea nulo
    if (!id_Record) {
      return res.status(400).json({ message: "El campo id_Record es obligatorio y no puede ser nulo." });
    }

    // Verificar que el `id_Deuda` especificado existe en `Deudas`
    const deudaExiste = await deudasSchema.findOne({ id_Deuda });
    if (!deudaExiste) {
      return res.status(404).json({ message: `La deuda con id_Deuda ${id_Deuda} no existe.` });
    }

    // Crear el nuevo registro de pago
    const recordPago = new recordPagosSchema({ id_Record, id_Deuda, fechaPago, montoPagado, metodoPago, estadoPago });
    const data = await recordPago.save();

    res.status(201).json({ message: "Registro de pago creado exitosamente", data });
  } catch (error) {
    res.status(400).json({ message: "Error al crear el registro de pago.", error: error.message });
  }
});

// Obtener todos los registros de pago (GET)
router.get("/recordpago", (req, res) => {
  recordPagosSchema
    .find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
});

// Obtener un registro de pago por `id_Record` (GET)
router.get("/recordpago/:id_Record", (req, res) => {
  const { id_Record } = req.params;
  recordPagosSchema
    .findOne({ id_Record })  // Buscar por `id_Record`
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Registro de pago no encontrado" });
      }
      res.status(200).json(data);
    })
    .catch((error) => res.status(500).json({ message: error.message }));
});

// Obtener todos los registros de pago por `id_Deuda` (GET)
router.get("/recordpago/deuda/:id_Deuda", (req, res) => {
  const { id_Deuda } = req.params;

  recordPagosSchema
    .find({ id_Deuda })  // Buscar todos los RecordPagos que pertenecen a una deuda específica
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
});

// Actualizar un registro de pago por `id_Record` (PUT)
router.put("/recordpago/:id_Record", async (req, res) => {
  const { id_Record } = req.params;
  const { id_Deuda, fechaPago, montoPagado, metodoPago, estadoPago } = req.body;

  try {
    // Verificar que el registro de pago existe
    const recordExiste = await recordPagosSchema.findOne({ id_Record });
    if (!recordExiste) {
      return res.status(404).json({ message: `El registro de pago con id_Record ${id_Record} no existe.` });
    }

    // Verificar que el `id_Deuda` especificado existe en `Deudas`
    const deudaExiste = await deudasSchema.findOne({ id_Deuda });
    if (!deudaExiste) {
      return res.status(404).json({ message: `La deuda con id_Deuda ${id_Deuda} no existe.` });
    }

    // Actualizar el registro de pago
    const data = await recordPagosSchema.updateOne(
      { id_Record },
      { $set: { id_Deuda, fechaPago, montoPagado, metodoPago, estadoPago } }
    );

    res.status(200).json({ message: "Registro de pago actualizado exitosamente", data });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el registro de pago.", error: error.message });
  }
});

// Eliminar un registro de pago por `id_Record` (DELETE)
router.delete("/recordpago/:id_Record", async (req, res) => {
  const { id_Record } = req.params;

  try {
    // Verificar que el registro de pago existe
    const recordExiste = await recordPagosSchema.findOne({ id_Record });
    if (!recordExiste) {
      return res.status(404).json({ message: `El registro de pago con id_Record ${id_Record} no existe.` });
    }

    // Eliminar el registro de pago
    const data = await recordPagosSchema.deleteOne({ id_Record });
    res.status(200).json({ message: "Registro de pago eliminado exitosamente", data });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el registro de pago.", error: error.message });
  }
});

module.exports = router;
