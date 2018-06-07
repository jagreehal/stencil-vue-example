export class ProfileCard {
    constructor() {
        this.sendMessage = () => {
            this.messageSent.emit({ name: this.name, text: this.el.querySelector('.text').innerText });
        };
    }
    render() {
        return (h("article", { class: "mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" },
            h("div", { class: "tc" },
                this.image ? h("img", { src: this.image, class: "br-100 h3 w3 dib", title: "Photo of a kitty staring at you" }) : undefined,
                h("h1", { class: "f4" }, this.name),
                h("hr", { class: "mw3 bb bw1 b--black-10" })),
            h("p", { class: "lh-copy measure center f6 black-70 text" },
                h("slot", null)),
            h("div", { class: "flex flex-column" },
                h("a", { class: "measure center f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-pink", onClick: this.sendMessage }, "Send"))));
    }
    static get is() { return "profile-card"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "image": {
            "type": String,
            "attr": "image"
        },
        "name": {
            "type": String,
            "attr": "name"
        }
    }; }
    static get events() { return [{
            "name": "messageSent",
            "method": "messageSent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
}
