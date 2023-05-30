import { Element, ElementAttributes } from './Element';

type TableProps = {
  attr?: ElementAttributes;
  class?: string;
  id?: string;
  styles?: Partial<CSSStyleDeclaration>;
};

export function Table(props?: TableProps) {
  return Element({
    tag: 'table',
    ...props,
  });
}

export function Tr(props?: TableProps) {
  return Element({
    tag: 'tr',
    ...props,
  });
}

export function Th(props?: TableProps) {
  return Element({
    tag: 'th',
    ...props,
  });
}

export function Td(props?: TableProps) {
  return Element({
    tag: 'td',
    ...props,
  });
}
