import { Element, ElementProps } from './Element';

export function Span(props?: ElementProps) {
  return Element({
    tag: 'span',
    ...props,
  });
}
