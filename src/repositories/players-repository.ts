import PlayerModel from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model"


const database: PlayerModel[] = [
    {
        id: 1,
        name: "Beckham",
        club: "Manchester United",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            overall: 90,
            pace: 85,
            shooting: 92,
            passing: 95,
            dribbling: 87,
            defending: 70,
            physical: 80
        },
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Real Madrid",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            overall: 94,
            pace: 90,
            shooting: 95,
            passing: 82,
            dribbling: 91,
            defending: 35,
            physical: 80
        },
    },
    {
        id: 3,
        name: "Lionel Messi",
        club: "Barcelona",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            overall: 94,
            pace: 90,
            shooting: 93,
            passing: 92,
            dribbling: 98,
            defending: 40,
            physical: 75
        },
    },
    {
        id: 4,
        name: "Neymar",
        club: "Paris Saint-Germain",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            overall: 92,
            pace: 91,
            shooting: 90,
            passing: 87,
            dribbling: 95,
            defending: 40,
            physical: 75
        },
    },
    {
        id: 5,
        name: "Zinedine Zidane",
        club: "Real Madrid",
        nationality: "France",
        position: "Midfielder",
        statistics: {
            overall: 94,
            pace: 75,
            shooting: 92,
            passing: 96,
            dribbling: 90,
            defending: 70,
            physical: 80
        },
    },
    {
        id: 6,
        name: "Ronaldo Nazário",
        club: "Inter Milan",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            overall: 94,
            pace: 95,
            shooting: 95,
            passing: 85,
            dribbling: 93,
            defending: 30,
            physical: 82
        },
    },
    {
        id: 7,
        name: "Thierry Henry",
        club: "Arsenal",
        nationality: "France",
        position: "Forward",
        statistics: {
            overall: 92,
            pace: 94,
            shooting: 90,
            passing: 80,
            dribbling: 88,
            defending: 35,
            physical: 78
        },
    },
    {
        id: 8,
        name: "Andrés Iniesta",
        club: "Barcelona",
        nationality: "Spain",
        position: "Midfielder",
        statistics: {
            overall: 90,
            pace: 75,
            shooting: 85,
            passing: 93,
            dribbling: 90,
            defending: 60,
            physical: 70
        },
    },
    {
        id: 9,
        name: "Ronaldinho",
        club: "Barcelona",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            overall: 91,
            pace: 88,
            shooting: 87,
            passing: 90,
            dribbling: 96,
            defending: 40,
            physical: 75
        },
    },
    {
        id: 10,
        name: "Pele",
        club: "Santos",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            overall: 95,
            pace: 90,
            shooting: 94,
            passing: 85,
            dribbling: 92,
            defending: 50,
            physical: 80
        },
    },
    {
        id: 11,
        name: "Gianluigi Buffon",
        club: "Juventus",
        nationality: "Italy",
        position: "Goalkeeper",
        statistics: {
            overall: 92,
            pace: 60,
            shooting: 25,
            passing: 50,
            dribbling: 30,
            defending: 90,
            physical: 85
        },
    },
    {
        id: 12,
        name: "Xavi Hernández",
        club: "Barcelona",
        nationality: "Spain",
        position: "Midfielder",
        statistics: {
            overall: 91,
            pace: 72,
            shooting: 75,
            passing: 96,
            dribbling: 85,
            defending: 60,
            physical: 65
        },
    },
    {
        id: 13,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            overall: 92,
            pace: 97,
            shooting: 89,
            passing: 85,
            dribbling: 91,
            defending: 30,
            physical: 80
        },
    },
    {
        id: 14,
        name: "Sergio Ramos",
        club: "Paris Saint-Germain",
        nationality: "Spain",
        position: "Defender",
        statistics: {
            overall: 89,
            pace: 75,
            shooting: 70,
            passing: 80,
            dribbling: 70,
            defending: 90,
            physical: 85
        },
    },
    {
        id: 15,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Netherlands",
        position: "Defender",
        statistics: {
            overall: 90,
            pace: 70,
            shooting: 60,
            passing: 75,
            dribbling: 70,
            defending: 92,
            physical: 88
        },
    },
    {
        id: 16,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            overall: 91,
            pace: 75,
            shooting: 85,
            passing: 95,
            dribbling: 90,
            defending: 60,
            physical: 78
        },
    },
    {
        id: 17,
        name: "Luka Modrić",
        club: "Real Madrid",
        nationality: "Croatia",
        position: "Midfielder",
        statistics: {
            overall: 90,
            pace: 70,
            shooting: 80,
            passing: 91,
            dribbling: 88,
            defending: 65,
            physical: 75
        },
    },
    {
        id: 18,
        name: "Paolo Maldini",
        club: "AC Milan",
        nationality: "Italy",
        position: "Defender",
        statistics: {
            overall: 92,
            pace: 70,
            shooting: 60,
            passing: 75,
            dribbling: 70,
            defending: 95,
            physical: 85
        },
    },
    {
        id: 19,
        name: "Roberto Baggio",
        club: "Juventus",
        nationality: "Italy",
        position: "Forward",
        statistics: {
            overall: 91,
            pace: 80,
            shooting: 92,
            passing: 88,
            dribbling: 90,
            defending: 40,
            physical: 70
        },
    },
    {
        id: 20,
        name: "Gareth Bale",
        club: "Real Madrid",
        nationality: "Wales",
        position: "Forward",
        statistics: {
            overall: 90,
            pace: 95,
            shooting: 87,
            passing: 80,
            dribbling: 88,
            defending: 40,
            physical: 80
        },
    },
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player)   
}

export const deletePlayer = async (id: number) => {
    const index = database.findIndex(player => player.id === id)

    if (index !== -1) {
        database.splice(index, 1)
        return true
    }
    return false
    
}

export const updatePlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel | undefined> => {
    const playerindex = database.findIndex(player => player.id === id)
    if (playerindex !== -1) {
        database[playerindex].statistics = statistics  
    }
    return database[playerindex]
}
