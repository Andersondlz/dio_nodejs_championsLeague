import { Router } from "express";  
import * as playersController from "./controllers/players-controller-";
import * as clubsController from "./controllers/clubs-controller";

const router = Router();
// listar todos os jogdores
router.get("/players", playersController.getPlayers)
// listar jogadores por ID
router.get("/players/:id", playersController.getPlayerById)
// Incluir um jogadpr
router.post("/players",playersController.postPlayer)
export default router;
// Deletar um jogador
router.delete("/players/:id",playersController.deletePlayer)
// Atualizar dados de um Jogador
router.patch("/players/:id",playersController.updatePlayer)

router.get("/clubs",clubsController.getClub)