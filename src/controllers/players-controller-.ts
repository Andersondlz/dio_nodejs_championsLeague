import { Request, Response } from "express";
import * as service from "../services/players-service";


export const getPlayers = async (req: Request, res: Response) => {

    const httpResponse = await service.getPlayersService();
    
    res.status(httpResponse.statudsCode).json(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id =  parseInt(req.params.id);
    const httpResponse = await service.getPlayerByIdService(id);
    res.status(httpResponse.statudsCode).json(httpResponse.body);
}
