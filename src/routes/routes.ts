import { Router } from "express";
import {
  createCriminosoController,
  getAllCriminososController,
  getCriminosoByIdController,
} from "../controllers/criminosoController";
import {
  createCrimeController,
  getAllCrimesController,
  getCrimeByIdController,
} from "../controllers/crimeController";
import {
  createArmaController,
  getArmasByCrimeController,
} from "../controllers/armaController";

const router = Router();

// Criminosos
router.post("/criminoso", createCriminosoController);
router.get("/criminoso", getAllCriminososController);
router.get("/criminoso/:id", getCriminosoByIdController);

// Crimes
router.post("/crime", createCrimeController);
router.get("/crime", getAllCrimesController);
router.get("/crime/:id", getCrimeByIdController);

// Armas
router.post("/arma", createArmaController);
router.get("/arma/crime/:crimeId", getArmasByCrimeController);

export default router;
