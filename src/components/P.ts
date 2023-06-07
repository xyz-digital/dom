import { Element, ElementAttributes } from './Element';

type PProps = {
  attr?: ElementAttributes;
  class?: string;
  id?: string;
  styles?: Partial<CSSStyleDeclaration>;
};

export function P(props?: PProps) {
  return Element({
    tag: 'p',
    ...props,
  });
}
