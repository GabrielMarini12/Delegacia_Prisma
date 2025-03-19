import { Request, Response } from "express";
import {
  createCriminoso,
  getAllCriminosos,
  getCriminosoById,
} from "../services/criminosoService";

export const createCriminosoController = async (
  req: Request,
  res: Response
) => {
  const { nome, data_nascimento, cpf } = req.body;
  try {
    const criminoso = await createCriminoso(
      nome,
      new Date(data_nascimento),
      cpf
    );
    res.status(201).json(criminoso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllCriminososController = async (
  req: Request,
  res: Response
) => {
  try {
    const criminosos = await getAllCriminosos();
    res.status(200).json(criminosos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getCriminosoByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  try {
    const criminoso = await getCriminosoById(Number(id));
    if (criminoso) {
      res.status(200).json(criminoso);
    } else {
      res.status(404).json({ error: "Criminoso não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
