import {Element, ElementType} from "../Element";
import { Behavior } from "../Behavior";

export class EmailElement implements Element{
    
    behaviors: Behavior[];
    thumbnail: string;
    type: ElementType;

    private icon: string;

    constructor(){
        this.type = ElementType.Email;
        this.thumbnail = require('../../../assets/input.png');
        this.icon = require("../../../assets/email.svg");
    }

    Write(index: number): string {
        return `
        <div class="field">            
            <input id="email_${index}" type='email' name='email_field' placeholder="enter your email"/>            
        </div>
        `;
    }
}