import { Element, ElementAttributes } from './Element';

type SpanProps = {
  attr?: ElementAttributes;
  class?: string;
  id?: string;
  styles?: Partial<CSSStyleDeclaration>;
};

export function Span(props?: SpanProps) {
  return Element({
    tag: 'span',
    ...props,
  });
}
