import HttpResponse from "../models/http-response-model";



export const OK = async(data: any): Promise<HttpResponse> => {
    return{
        statudsCode: 200,
        body: data
    }
}

export const noContent = async(): Promise<HttpResponse> => {
    return{
        statudsCode: 204,
        body: null  
    }
}

export const badRequest = async(message: string): Promise<HttpResponse> => {
    return{
        statudsCode: 400,       
        body: {      
            error: message  
        }
    }
}

export const created = async(): Promise<HttpResponse> => {
    return{
        statudsCode: 201,
        body: {
            mwsage: "Criado com sucesso"
        }
    }
}