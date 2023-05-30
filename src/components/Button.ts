import { Element, ElementAttributes } from './Element';

interface ButtonAttributes extends ElementAttributes {
  type?: 'button' | 'submit';
  textContent?: string;
  onclick?: (e?: any) => void;
  disabled?: boolean;
}

type ButtonProps = {
  attr?: ButtonAttributes;
  class?: string;
  id?: string;
  styles?: Partial<CSSStyleDeclaration>;
};

export function Button(props?: ButtonProps) {
  return Element({
    tag: 'button',
    ...props,
  }) as HTMLButtonElement;
}
