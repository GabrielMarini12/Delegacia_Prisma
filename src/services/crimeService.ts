import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCrime = async (
  descricao: string,
  dataOcorrencia: Date,
  criminosoId: number
) => {
  try {
    return await prisma.crime.create({
      data: {
        descricao,
        data_ocorrencia: dataOcorrencia,
        criminosoId,
      },
    });
  } catch (error) {
    throw new Error("Erro ao criar crime");
  }
};

export const getAllCrimes = async () => {
  try {
    return await prisma.crime.findMany({
      include: { criminoso: true },
    });
  } catch (error) {
    throw new Error("Erro ao listar crimes");
  }
};

export const getCrimeById = async (id: number) => {
  try {
    return await prisma.crime.findUnique({
      where: { id },
      include: { criminoso: true },
    });
  } catch (error) {
    throw new Error("Erro ao buscar crime");
  }
};
