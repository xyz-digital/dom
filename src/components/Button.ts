import { Element, ElementAttributes, ElementProps } from './Element';

interface ButtonAttributes extends ElementAttributes {
  type?: 'button' | 'submit';
  textContent?: string;
  onclick?: (e?: any) => void;
  disabled?: boolean;
}

interface ButtonProps extends ElementProps {
  attr?: ButtonAttributes;
}

export function Button(props?: ButtonProps) {
  return Element({
    tag: 'button',
    ...props,
  }) as HTMLButtonElement;
}
