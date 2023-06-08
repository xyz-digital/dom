import { Element, ElementProps } from './Element';

export function Table(props?: ElementProps) {
  return Element({
    tag: 'table',
    ...props,
  });
}

export function Tr(props?: ElementProps) {
  return Element({
    tag: 'tr',
    ...props,
  });
}

export function Th(props?: ElementProps) {
  return Element({
    tag: 'th',
    ...props,
  });
}

export function Td(props?: ElementProps) {
  return Element({
    tag: 'td',
    ...props,
  });
}
