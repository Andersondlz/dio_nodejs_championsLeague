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