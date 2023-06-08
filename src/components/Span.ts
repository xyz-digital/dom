import { Element, ElementProps } from './Element';

export interface SpanProps extends ElementProps {}

export function Span(props?: SpanProps) {
  return Element({
    tag: 'span',
    ...props,
  });
}
