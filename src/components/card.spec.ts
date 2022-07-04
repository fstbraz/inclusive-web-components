import { assert, expect, fixture, html } from '@open-wc/testing';
import { Card } from './card';

describe('Card Component', () => {
  let element: Card;

  const card = {
    altText: 'Je suis a image',
    ctaText: 'Click me',
    image: 'http://example.com/',
    link: 'http://example.com/',
    text: 'amazing text',
    textDesc: 'other amazing text for test',
  };

  beforeEach(async () => {
    element = await fixture<Card>(html` <card-image .card=${card}></card-image> `);
  });

  it('is defined', () => {
    assert.instanceOf(element, Card);
  });

  it('renders image and passes the props', () => {
    const image = element.shadowRoot!.querySelector('img')!;
    expect(image).to.exist;
    expect(image.alt).to.equal(card.altText);
    expect(image.src).to.equal(card.image);
  });

  // it('renders a paragraph', () => {
  //   const paragraph = element.shadowRoot!.querySelector('p')!;
  //   expect(paragraph).to.exist;
  //   expect(paragraph.textContent).to.contain('Suspendisse mollis lobortis lacus');
  // });
});
