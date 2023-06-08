import { Element, ElementAttributes, ElementProps } from './Element';

export interface LabelAttributes extends ElementAttributes {
  for?: string;
}

export interface LabelProps extends ElementProps {
  attr?: LabelAttributes;
}

export function Label(props?: LabelProps) {
  return Element({
    tag: 'label',
    ...props,
  });
}
