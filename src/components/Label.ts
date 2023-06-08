import { Element, ElementAttributes, ElementProps } from './Element';

interface LabelAttributes extends ElementAttributes {
  for?: string;
}

interface LabelProps extends ElementProps {
  attr?: LabelAttributes;
}

export function Label(props?: LabelProps) {
  return Element({
    tag: 'label',
    ...props,
  });
}
