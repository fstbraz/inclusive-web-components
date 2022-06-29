import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Card } from './card';
import { sharedStyles } from './shared/style';

const componentStyle = css`
  .cards > ul {
    list-style: none;
  }

  @supports (display: grid) {
    .cards > ul {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
      grid-column-gap: 1.5rem;
      grid-row-gap: 1.5rem;
    }
  }
`;

@customElement('cards')
export class Cards extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property()
  cards!: Card[];

  render() {
    return html` <div class="cards">
      <ul>
        ${this.cards.map((card) => html`<card card="${card}"></card>`)}
      </ul>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    cards: Cards;
  }
}
