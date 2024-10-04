import { Request, Response } from "express";
import { getPlayersService } from "../services/players-service";

export const getPlayers = async (req: Request, res: Response) => {

    const httpResponse = await getPlayersService();
    
    res.status(httpResponse.statudsCode).json(httpResponse.body);
}