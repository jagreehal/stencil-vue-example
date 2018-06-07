import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class ProfileCard {
    el: any;
    image: string;
    name: string;
    messageSent: EventEmitter;
    sendMessage: () => void;
    render(): JSX.Element;
}
