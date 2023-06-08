import { Element, ElementProps } from './Element';

export function H3(props: ElementProps) {
  return Element({
    tag: 'h3',
    ...props,
  });
}
