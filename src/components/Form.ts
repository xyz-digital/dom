import { Element, ElementAttributes } from './Element';

type FormProps = {
  attr?: ElementAttributes;
  class?: string;
  id?: string;
  styles?: Partial<CSSStyleDeclaration>;
};

export function Form(props?: FormProps) {
  return Element({
    tag: 'form',
    ...props,
  });
}
