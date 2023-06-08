import { Element, ElementAttributes, ElementProps } from './Element';

export interface TextareaAttributes extends ElementAttributes {
  placeholder?: string;
  required?: boolean;
}

export interface TextareaProps extends ElementProps {
  attr?: TextareaAttributes;
}

export function Textarea(props?: TextareaProps) {
  return Element({
    tag: 'textarea',
    ...props,
  });
}
