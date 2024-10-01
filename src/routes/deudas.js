// routes/deudas.js

const express = require("express");
const deudasSchema = require("../models/deudas");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Deudas:
 *       type: object
 *       required:
 *         - id_Deuda
 *         - numeroCuotas
 *         - montoPorCuota
 *         - fechaInicio
 *         - fechaFin
 *         - estado
 *       properties:
 *         id_Deuda:
 *           type: number
 *           description: Identificador único de la deuda.
 *         numeroCuotas:
 *           type: number
 *           description: Número total de cuotas para la deuda.
 *         montoPorCuota:
 *           type: number
 *           description: Monto a pagar por cada cuota de la deuda.
 *         fechaInicio:
 *           type: string
 *           format: date
 *           description: Fecha en que inicia la deuda.
 *         fechaFin:
 *           type: string
 *           format: date
 *           description: Fecha en que finaliza la deuda.
 *         estado:
 *           type: string
 *           enum:
 *             - activo
 *             - finalizado
 *             - en mora
 *           description: Estado actual de la deuda.
 *       example:
 *         id_Deuda: 101
 *         numeroCuotas: 12
 *         montoPorCuota: 150.75
 *         fechaInicio: "2024-10-01T00:00:00.000Z"
 *         fechaFin: "2025-10-01T00:00:00.000Z"
 *         estado: "activo"
 */

/**
 * @swagger
 * /api/deudas:
 *   post:
 *     summary: Crear una nueva deuda
 *     tags: [Deudas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Deudas'
 *     responses:
 *       201:
 *         description: ¡Nueva deuda creada exitosamente!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Deuda creada exitosamente"
 *                 data:
 *                   $ref: '#/components/schemas/Deudas'
 *       400:
 *         description: Error al crear la deuda.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al crear la deuda. Revisa los datos enviados."
 */

/**
 * @swagger
 * /api/deudas:
 *   get:
 *     summary: Obtener todas las deudas
 *     tags: [Deudas]
 *     responses:
 *       200:
 *         description: Lista de todas las deudas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Deudas'
 *       500:
 *         description: Error al obtener las deudas.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al obtener las deudas."
 */

/**
 * @swagger
 * /api/deudas/{id_Deuda}:
 *   get:
 *     summary: Obtener una deuda por ID
 *     tags: [Deudas]
 *     parameters:
 *       - in: path
 *         name: id_Deuda
 *         schema:
 *           type: number
 *         required: true
 *         description: ID de la deuda que se quiere obtener
 *     responses:
 *       200:
 *         description: Deuda encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Deudas'
 *       404:
 *         description: Deuda no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Deuda no encontrada."
 *       500:
 *         description: Error al obtener la deuda.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al obtener la deuda."
 */

/**
 * @swagger
 * /api/deudas/{id_Deuda}:
 *   put:
 *     summary: Actualizar una deuda por ID
 *     tags: [Deudas]
 *     parameters:
 *       - in: path
 *         name: id_Deuda
 *         schema:
 *           type: number
 *         required: true
 *         description: ID de la deuda que se quiere actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Deudas'
 *     responses:
 *       200:
 *         description: Deuda actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Deuda actualizada exitosamente"
 *       404:
 *         description: Deuda no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Deuda no encontrada."
 *       400:
 *         description: Error al actualizar la deuda.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al actualizar la deuda. Revisa los datos enviados."
 */

/**
 * @swagger
 * /api/deudas/{id_Deuda}:
 *   delete:
 *     summary: Eliminar una deuda por ID
 *     tags: [Deudas]
 *     parameters:
 *       - in: path
 *         name: id_Deuda
 *         schema:
 *           type: number
 *         required: true
 *         description: ID de la deuda que se quiere eliminar
 *     responses:
 *       200:
 *         description: Deuda eliminada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Deuda eliminada exitosamente"
 *       404:
 *         description: Deuda no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Deuda no encontrada."
 *       500:
 *         description: Error al eliminar la deuda.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al eliminar la deuda."
 */



// Crear una nueva deuda (POST)
router.post("/deudas", (req, res) => {
  const deuda = new deudasSchema(req.body);
  deuda
    .save()
    .then((data) => res.status(201).json({ message: "Deuda creada exitosamente", data }))
    .catch((error) => res.status(400).json({ message: error.message }));
});

// Obtener todas las deudas (GET)
router.get("/deudas", (req, res) => {
  deudasSchema
    .find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
});

// Obtener una deuda por `id_Deuda` (GET)
router.get("/deudas/:id_Deuda", (req, res) => {
  const { id_Deuda } = req.params;
  deudasSchema
    .findOne({ id_Deuda })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Deuda no encontrada" });
      }
      res.status(200).json(data);
    })
    .catch((error) => res.status(500).json({ message: error.message }));
});

// Actualizar una deuda por `id_Deuda` (PUT)
router.put("/deudas/:id_Deuda", (req, res) => {
  const { id_Deuda } = req.params;
  const { numeroCuotas, montoPorCuota, fechaInicio, fechaFin, estado } = req.body;

  deudasSchema
    .updateOne(
      { id_Deuda },
      { $set: { numeroCuotas, montoPorCuota, fechaInicio, fechaFin, estado } }
    )
    .then((data) => {
      if (data.matchedCount === 0) {
        return res.status(404).json({ message: "Deuda no encontrada" });
      }
      res.status(200).json({ message: "Deuda actualizada exitosamente" });
    })
    .catch((error) => res.status(400).json({ message: error.message }));
});

// Eliminar una deuda por `id_Deuda` (DELETE)
router.delete("/deudas/:id_Deuda", (req, res) => {
  const { id_Deuda } = req.params;

  deudasSchema
    .deleteOne({ id_Deuda })
    .then((data) => {
      if (data.deletedCount === 0) {
        return res.status(404).json({ message: "Deuda no encontrada" });
      }
      res.status(200).json({ message: "Deuda eliminada exitosamente" });
    })
    .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;
