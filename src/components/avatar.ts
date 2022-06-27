import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { sharedStyles } from './shared/style';

const componentStyle = css`
  .avatar {
    width: 50px;
    border-radius: 50%;
    box-shadow: 0px 13px 10px -7px rgb(0 0 0 / 10%);
  }
`;

@customElement('medium-avatar')
export class MediumAvatar extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property()
  image!: string;

  render() {
    return html` <img class="avatar" src="${this.image}" /> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'medium-avatar': MediumAvatar;
  }
}
