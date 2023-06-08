import { Element, ElementAttributes, ElementProps } from './Element';

interface TextareaAttributes extends ElementAttributes {
  placeholder?: string;
  required?: boolean;
}

interface TextareaProps extends ElementProps {
  attr?: TextareaAttributes;
}

export function Textarea(props?: TextareaProps) {
  return Element({
    tag: 'textarea',
    ...props,
  });
}
