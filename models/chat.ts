import { DocumentData } from 'firebase/firestore';
import { IDeveloper, IEmployer } from './user';
export interface IMessage {
    type: string,
    message: string,
    author: string,
    viewed: string[]
}

export interface IChat {
    chat: {
        id: string,
        members: string[],
        messages: IMessage[],
    } | DocumentData,
    guest: IDeveloper | IEmployer
}