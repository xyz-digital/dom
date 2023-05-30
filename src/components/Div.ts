import { Element, ElementAttributes } from './Element';

type DivProps = {
  attr?: ElementAttributes;
  class?: string;
  id?: string;
  styles?: Partial<CSSStyleDeclaration>;
};

export function Div(props?: DivProps) {
  return Element({
    tag: 'div',
    ...props,
  });
}
