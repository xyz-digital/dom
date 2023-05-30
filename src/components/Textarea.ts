import { Element, ElementAttributes } from './Element';

interface TextareaAttributes extends ElementAttributes {
  placeholder?: string;
  required?: boolean;
}

type TextareaProps = {
  attr?: TextareaAttributes;
  class?: string;
  id?: string;
  styles?: Partial<CSSStyleDeclaration>;
};

export function Textarea(props?: TextareaProps) {
  return Element({
    tag: 'textarea',
    ...props,
  });
}
