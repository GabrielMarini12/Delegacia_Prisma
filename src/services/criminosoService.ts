import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCriminoso = async (
  nome: string,
  dataNascimento: Date,
  cpf: string
) => {
  try {
    return await prisma.criminoso.create({
      data: {
        nome,
        data_nascimento: dataNascimento,
        cpf,
      },
    });
  } catch (error) {
    throw new Error("Erro ao criar criminoso");
  }
};

export const getAllCriminosos = async () => {
  try {
    return await prisma.criminoso.findMany();
  } catch (error) {
    throw new Error("Erro ao listar criminosos");
  }
};

export const getCriminosoById = async (id: number) => {
  try {
    return await prisma.criminoso.findUnique({
      where: { id },
    });
  } catch (error) {
    throw new Error("Erro ao buscar criminoso");
  }
};
