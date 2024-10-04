import * as playersRepository from "../repositories/players-repository";
import { noContent, OK } from "../utils/http-helper";

export const getPlayersService = async () => {
    const data = await playersRepository.findAllPlayers();
    let response = null

    if (data) {
        response = await OK(data);
    }else{
        response = noContent()
    }
    
    
    return response
}