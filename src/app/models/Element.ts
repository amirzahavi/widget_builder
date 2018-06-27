import { Behavior } from "./Behavior";

export enum ElementType{
    Text,
    Email,
    Password,
    Number,
    Date,
    DropDown,
    Radio,
    Checkbox,
}

export interface Element{

    behaviors: Behavior[];
    thumbnail: string;
    type: ElementType;

    Write(index: number): string;
}