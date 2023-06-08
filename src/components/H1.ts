import { Element, ElementProps } from './Element';

export interface H1Props extends ElementProps {}

export function H1(props: H1Props) {
  return Element({
    tag: 'h1',
    ...props,
  });
}
