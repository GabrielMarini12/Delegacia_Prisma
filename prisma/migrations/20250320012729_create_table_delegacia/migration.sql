-- CreateTable
CREATE TABLE "Criminoso" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT NOT NULL,

    CONSTRAINT "Criminoso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Crime" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_ocorrencia" TIMESTAMP(3) NOT NULL,
    "criminosoId" INTEGER NOT NULL,

    CONSTRAINT "Crime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Arma" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "crimeId" INTEGER NOT NULL,

    CONSTRAINT "Arma_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Criminoso_cpf_key" ON "Criminoso"("cpf");

-- AddForeignKey
ALTER TABLE "Crime" ADD CONSTRAINT "Crime_criminosoId_fkey" FOREIGN KEY ("criminosoId") REFERENCES "Criminoso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Arma" ADD CONSTRAINT "Arma_crimeId_fkey" FOREIGN KEY ("crimeId") REFERENCES "Crime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
