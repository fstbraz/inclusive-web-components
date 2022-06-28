import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { sharedStyles } from './shared/style';

export interface Card {
  altText: string;
  ctaText: string;
  image: string;
  link: string;
  text: string;
  textDesc: string;
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

@customElement('card')
export class Card extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property()
  card!: Card;

  render() {
    return html`<li class="card">
      <div class="img"><img src="${this.card.image}" alt="${this.card.altText}" /></div>
      <div class="text">
        <h2><a href="${this.card.link}" aria-describedby="desc-a-card">${this.card.title}</a></h2>
        <p>${this.card.text}</p>
        <span class="cta" aria-hidden="true" id="desc-a-card">${this.card.ctaText}</span>
        <small>By <a href="#author-link">${this.card.textDesc}</a></small>
      </div>
    </li> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    card: Card;
  }
}
