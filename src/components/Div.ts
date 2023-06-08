import { Element, ElementProps } from './Element';

export interface DivProps extends ElementProps {}

export function Div(props?: DivProps) {
  return Element({
    tag: 'div',
    ...props,
  });
}
