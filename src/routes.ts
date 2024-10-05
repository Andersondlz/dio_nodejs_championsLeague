import { Router } from "express";  
import * as playersController from "./controllers/players-controller-";

const router = Router();

router.get("/players", playersController.getPlayers)
router.get("/players/:id", playersController.getPlayerById)
export default router;