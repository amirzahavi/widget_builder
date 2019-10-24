import {Element, ElementType} from '../Element';
import { Behavior } from '../Behavior';

export class TextElement implements Element {
    thumbnail: string;
    type: ElementType;

    private icon: string;

    constructor(public behaviors: Behavior[] = []) {
        this.type = ElementType.Text;
        this.thumbnail = require('../../../assets/input.png');
        this.icon = require('../../../assets/text.svg');
    }

    Write(index: number): string {
        return `
        <div class="field">
            <input id="text_${index}" type='text' name='text_field' placeholder="enter your text here"/>
        </div>
        `;
    }
}