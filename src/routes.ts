import { Router } from "express";  
import * as playersController from "./controllers/players-controller-";

const router = Router();
// listar todos os jogdores
router.get("/players", playersController.getPlayers)
// listar jogadores por ID
router.get("/players/:id", playersController.getPlayerById)

// Incluir um jogadpr
router.post("/players",playersController.postPlayer)
export default router;