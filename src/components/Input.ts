import { Element, ElementAttributes, ElementProps } from './Element';

interface InputAttributes extends ElementAttributes {
  autocomplete?: 'on' | 'off';
  checked?: boolean;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  type?: 'checkbox' | 'date' | 'datetime-local' | 'password' | 'radio' | 'search' | 'submit' | 'tel' | 'text' | 'time';
  value?: string;
  onkeyup?: (e: KeyboardEvent) => void;
}

interface InputProps extends ElementProps {
  attr?: InputAttributes;
}

export function Input(props?: InputProps) {
  return Element({
    tag: 'input',
    ...props,
  });
}
