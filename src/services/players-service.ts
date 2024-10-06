import { response } from "express";
import PlayerModel from "../models/player-model";
import * as playersRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayersService = async () => {
    const data = await playersRepository.findAllPlayers();
    let response = null

    if (data) {
        response = await HttpResponse.OK(data);
    }else{
        response = HttpResponse.noContent()
    }
    
    
    return response
}

export const getPlayerByIdService = async (id: number) => {
    const data = await playersRepository.findPlayerById(id);
    let response = null
    if (data) {
        response = await HttpResponse.OK(data);
    }else{
        response = HttpResponse.noContent()
    }
    return response
}

export const createPlayerService = async (player: PlayerModel) => {
    // verifica se esta vazio
    let response = null
    if (Object.keys(player).length !== 0) {
        await playersRepository.insertPlayer(player);
        response = await HttpResponse.created()
    }else{
        response = HttpResponse.badRequest("Erro no cadastro")
    }
    return response
}