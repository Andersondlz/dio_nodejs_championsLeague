import { response } from "express";
import PlayerModel from "../models/player-model";
import * as playersRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

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

export const deletePlayerService = async (id: number) => {
    let response = null
    const isDelete = await playersRepository.deletePlayer(id)
    if (isDelete === false) {
        response = HttpResponse.badRequest("Erro no cadastro")
    }else{
        response = await HttpResponse.OK({mensage: "Deletado com sucesso"})
    }
    return response
}   

export const updatePlayerService = async (id: number, stastics: StatisticsModel) => {
    const data = await playersRepository.updatePlayer(id,stastics)
    let response = null

    if (Object.keys(stastics).length === 0) {
        response = HttpResponse.badRequest("Erro no cadastro")
        
    }else{
        response = await HttpResponse.OK(data)
    }
    return response
}