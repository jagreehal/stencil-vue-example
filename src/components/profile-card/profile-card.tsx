import { Component, Element, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'profile-card'
})
export class ProfileCard {
  @Element() el;
  @Prop() image: string;
  @Prop() name: string;

  @Event() messageSent: EventEmitter;

  sendMessage = () => {
    this.messageSent.emit({ name: this.name, text: this.el.querySelector('.text').innerText });
  }



  render() {
    return (
      <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div class="tc">
          {this.image ? <img src={this.image} class="br-100 h3 w3 dib" title="Photo of a kitty staring at you" /> : undefined}
          <h1 class="f4">{this.name}</h1>
          <hr class="mw3 bb bw1 b--black-10" />
        </div>
        <p class="lh-copy measure center f6 black-70 text">
          <slot />
        </p>
        <div class="flex flex-column">
          <a class="measure center f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-pink" onClick={this.sendMessage}>Send</a>
        </div>
      </article>
    );
  }
}
