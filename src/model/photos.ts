import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    title: String,
    description: String,
    precio: String,
    habitaciones: String,
    huespedes: String,     
    imagePath: String
});

export interface IPhoto extends Document {
    title: string;
    description: string;
    precio: string;
    habitaciones: string;
    huespedes: string;
    imagePath: string;
}

export default model<IPhoto>('Photo', schema);


