
const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contacts");

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get all contacts
 *     responses:
 *       200:
 *         description: Returns all contacts
 */
router.get("/", contactsController.getAll);

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Get single contact
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns one contact
 */
router.get("/:id", contactsController.getSingle);

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create new contact
 */
router.post("/", contactsController.createContact);

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Update contact
 */
router.put("/:id", contactsController.updateContact);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete contact
 */
router.delete("/:id", contactsController.deleteContact);

module.exports = router;
