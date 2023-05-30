import { Element, ElementAttributes } from './Element';

interface InputAttributes extends ElementAttributes {
  checked?: boolean;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  type?:
    | 'text'
    | 'date'
    | 'time'
    | 'checkbox'
    | 'datetime-local'
    | 'password'
    | 'radio';
  value?: string;
  onkeyup?: (e: KeyboardEvent) => void;
}

type InputProps = {
  attr?: InputAttributes;
  class?: string;
  id?: string;
  styles?: Partial<CSSStyleDeclaration>;
};

export function Input(props?: InputProps) {
  return Element({
    tag: 'input',
    ...props,
  });
}
