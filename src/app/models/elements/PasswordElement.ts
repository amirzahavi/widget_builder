import {Element, ElementType} from "../Element";
import { Behavior } from "../Behavior";

export class PasswordElement implements Element{
    
    behaviors: Behavior[];
    thumbnail: string;
    type: ElementType;

    private icon:string;

    constructor(){
        this.type = ElementType.Password;
        this.thumbnail = require('../../../assets/input.png');
        this.icon = require("../../../assets/password.svg");
    }

    Write(index: number): string {
        return `
        <div class='field'>            
            <input id="pass_${index}" type='password' name='password_field' placeholder="enter your password"/>
            <img src="${this.icon}"/>
        </div>        
        `;
    }
}