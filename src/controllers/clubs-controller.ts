import { Request, Response } from "express";
import * as service from "../services/clubs-services";
export const getClub = async (req: Request, res: Response) => {
    const responde = await service.getClubsService();
    res.status(responde.statudsCode).json(responde.body);
}