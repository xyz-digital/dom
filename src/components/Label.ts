import { Element, ElementAttributes } from './Element';

interface LabelAttributes extends ElementAttributes {
  for?: string;
}

type LabelProps = {
  attr?: LabelAttributes;
  class?: string;
  id?: string;
  styles?: Partial<CSSStyleDeclaration>;
};

export function Label(props?: LabelProps) {
  return Element({
    tag: 'label',
    ...props,
  });
}
