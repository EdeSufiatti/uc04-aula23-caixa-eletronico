import express, { Request, Response } from "express";
const router = express.Router();
// GET /:id -- Retorna a conta corrente pelo id
router.get('/:id', (req: Request, res: Response) => {
   // ...
});
// GET /:agencia/:numero
// GET /:agencia/:numero/saldo
// POST /...
// PATCH /saldo
// DELETE /...



