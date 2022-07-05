import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { sharedStyles } from './shared/style';

export interface CardConfig {
  altText: string;
  ctaText: string;
  image: string;
  link: string;
  text: string;
  textDesc: string;
  textDescLink: string;
  title: string;
}

const componentStyle = css`
  .card + .card {
    margin-top: 1.5rem;
  }

  @supports (display: grid) {
    .card + .card {
      margin-top: 0;
    }
  }

  .card {
    cursor: pointer;
    border: 1px solid;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .card .text {
    padding: 1rem;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .card p {
    max-width: 60ch;
  }

  .card .img {
    height: 6.5rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem));
  }

  .card .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
  }

  .card a {
    outline: none;
  }

  .card h2 a {
    text-decoration: none;
  }

  .card h2 a:focus {
    text-decoration: underline;
  }

  .card h2:focus-within ~ .cta {
    box-shadow: 0 0 0 0.125rem;
  }

  .card:focus-within h2 a:focus {
    text-decoration: none;
  }

  .card small {
    display: block;
    text-align: right;
  }

  .card small a {
    position: relative;
    padding: 0.5rem 0;
  }

  .card small a:hover,
  .card small a:focus {
    font-weight: bold;
  }

  .card .text > * + * {
    margin-top: 0.75rem;
  }

  .card .text > :nth-last-child(3) {
    margin-bottom: 0.75rem;
  }

  .card .text > :nth-last-child(2) {
    margin-top: auto;
    padding-top: 0.75rem;
  }

  .cta {
    padding: 0.75rem;
    border: 1px solid;
    border-radius: 0.25rem;
    text-align: center;
  }
`;

@customElement('card-image')
export class Card extends LitElement {
  static styles = [sharedStyles, componentStyle];

  declare up: number;
  declare down: number;

  @property({ type: Object })
  card!: CardConfig;

  @query('#card-link')
  cardLinkEl: any;

  render() {
    return html`
      <li class="card" @mousedown="${this.mouseDown}" @mouseup="${this.handleClick}">
        <div class="img"><img src="${this.card.image}" alt="${this.card.altText}" /></div>
        <div class="text">
          <h2>
            <a id="card-link" href="${this.card.link}" @click="${this.handleClick}" aria-describedby="desc-a-card"
              >${this.card.title}</a
            >
          </h2>
          <p>${this.card.text}</p>
          <span class="cta" aria-hidden="true" id="desc-a-card">${this.card.ctaText}</span>
          <small><a href="${this.card.textDescLink}">${this.card.textDesc}</a></small>
        </div>
      </li>
    `;
  }

  public mouseDown() {
    this.down = Number(new Date());
  }

  public handleClick() {
    this.up = Number(new Date());
    if (this.up - this.down < 200) {
      this.dispatchEvent(new CustomEvent('readMore', { detail: this.card, composed: true }));
    }
  }
}
