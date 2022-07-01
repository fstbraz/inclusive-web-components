import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { Card } from './card';
import { sharedStyles } from './shared/style';

const componentStyle = css`
  .cards > ul {
    list-style: none;
    margin: 0;
    padding: 0;
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

@customElement('cards-images')
export class Cards extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property({ type: Array })
  cards!: Card[];

  render() {
    return html` <div class="cards">
      <ul>
        ${repeat(this.cards, (current) => html` <card-image .card=${current}></card-image> `)}
      </ul>
    </div>`;
  }
}
