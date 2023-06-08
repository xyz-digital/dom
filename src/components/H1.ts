import { Element, ElementProps } from './Element';

export function H1(props: ElementProps) {
  return Element({
    tag: 'h1',
    ...props,
  });
}
