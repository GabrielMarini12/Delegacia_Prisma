import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createArma = async (
  descricao: string,
  tipo: string,
  crimeId: number
) => {
  try {
    return await prisma.arma.create({
      data: {
        descricao,
        tipo,
        crimeId,
      },
    });
  } catch (error) {
    throw new Error("Erro ao criar arma");
  }
};

export const getArmasByCrime = async (crimeId: number) => {
  try {
    return await prisma.arma.findMany({
      where: { crimeId },
    });
  } catch (error) {
    throw new Error("Erro ao listar armas");
  }
};
