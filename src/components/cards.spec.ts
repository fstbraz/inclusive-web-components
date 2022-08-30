import { assert, fixture, html } from '@open-wc/testing';

describe('Cards Component', () => {
  let el: HTMLDivElement;

  const cards = [
    {
      altText: 'Je suis a image',
      ctaText: 'Click me',
      image: 'http://example.com/image/',
      link: 'http://example.com/link/',
      text: 'amazing text',
      textDesc: 'other amazing text for test',
      textDescLink: 'http://example.com/author/',
      title: 'amazing title',
    },
    {
      altText: 'Je suis a image 2',
      ctaText: 'Click me 2',
      image: 'http://example.com/image2/',
      link: 'http://example.com/link2',
      text: 'amazing text 2',
      textDesc: 'other amazing text for test 2',
      textDescLink: 'http://example.com/author/one',
      title: 'amazing title two',
    },
  ];

  beforeEach(async () => {
    el = await fixture<HTMLDivElement>(html`
      <div class="cards">
        <ul>
          <card-image .card=${cards[0]}></card-image>
          <card-image .card=${cards[1]}></card-image>
        </ul>
      </div>
    `);
  });

  it('is defined', () => {
    assert.instanceOf(el, HTMLDivElement);
  });

  // it('it renders the image', () => {
  //   const image = el.shadowRoot?.querySelector('img');
  //   expect(image).to.exist;
  //   // expect(image?.alt).to.equal(card.altText);
  //   // expect(image?.src).to.equal(card.image);
  // });

  // it('it renders the title', () => {
  //   const title = el.shadowRoot?.querySelector('#card-link');
  //   expect(title).to.exist;
  //   // expect(title?.getAttribute('href')).to.equal(card.link);
  //   // expect(title?.textContent).to.equal(card.title);
  // });

  // it('it renders the text', () => {
  //   const text = el.shadowRoot?.querySelector('p');
  //   // expect(text).to.exist;
  //   // expect(text?.textContent).to.equal(card.text);
  // });

  // it('it renders the cta text', () => {
  //   const ctaText = el.shadowRoot?.querySelector('.cta');
  //   // expect(ctaText).to.exist;
  //   // expect(ctaText?.textContent).to.equal(card.ctaText);
  // });

  // it('it renders the description link', () => {
  //   const textDesc = el.shadowRoot?.querySelector('small a');
  //   expect(textDesc).to.exist;
  //   // expect(textDesc?.getAttribute('href')).to.equal(card.textDescLink);
  //   // expect(textDesc?.textContent).to.equal(card.textDesc);
  // });

  // it('dispatch the mousedown event', () => {
  //   // el.mouseDown();
  //   // expect(el.down).to.be.a('number');
  // });
});
