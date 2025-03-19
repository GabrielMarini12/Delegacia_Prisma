import { Request, Response } from "express";
import {
  createCrime,
  getAllCrimes,
  getCrimeById,
} from "../services/crimeService";

export const createCrimeController = async (req: Request, res: Response) => {
  const { descricao, data_ocorrencia, criminosoId } = req.body;
  try {
    const crime = await createCrime(
      descricao,
      new Date(data_ocorrencia),
      criminosoId
    );
    res.status(201).json(crime);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllCrimesController = async (req: Request, res: Response) => {
  try {
    const crimes = await getAllCrimes();
    res.status(200).json(crimes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getCrimeByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const crime = await getCrimeById(Number(id));
    if (crime) {
      res.status(200).json(crime);
    } else {
      res.status(404).json({ error: "Crime não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
