import { Element, ElementProps } from './Element';

export function Div(props?: ElementProps) {
  return Element({
    tag: 'div',
    ...props,
  });
}
