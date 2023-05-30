import { Element, ElementAttributes } from './Element';

type H1Props = {
  attr?: ElementAttributes;
  class?: string;
  id?: string;
  styles?: Partial<CSSStyleDeclaration>;
};

export function H1(props: H1Props) {
  return Element({
    tag: 'h1',
    ...props,
  });
}
