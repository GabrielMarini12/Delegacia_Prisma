import { Request, Response } from "express";
import { createArma, getArmasByCrime } from "../services/armaService";

export const createArmaController = async (req: Request, res: Response) => {
  const { descricao, tipo, crimeId } = req.body;
  try {
    const arma = await createArma(descricao, tipo, crimeId);
    res.status(201).json(arma);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getArmasByCrimeController = async (
  req: Request,
  res: Response
) => {
  const { crimeId } = req.params;
  try {
    const armas = await getArmasByCrime(Number(crimeId));
    res.status(200).json(armas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
