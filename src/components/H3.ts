import { Element, ElementAttributes } from './Element';

type H3Props = {
  attr?: ElementAttributes;
  class?: string;
  id?: string;
  styles?: Partial<CSSStyleDeclaration>;
};

export function H3(props: H3Props) {
  return Element({
    tag: 'h3',
    ...props,
  });
}
