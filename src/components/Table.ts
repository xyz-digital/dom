import { Element, ElementProps } from './Element';

export interface TableProps extends ElementProps {}
export interface TrProps extends ElementProps {}
export interface ThProps extends ElementProps {}
export interface TdProps extends ElementProps {}

export function Table(props?: TableProps) {
  return Element({
    tag: 'table',
    ...props,
  });
}

export function Tr(props?: TrProps) {
  return Element({
    tag: 'tr',
    ...props,
  });
}

export function Th(props?: ThProps) {
  return Element({
    tag: 'th',
    ...props,
  });
}

export function Td(props?: TdProps) {
  return Element({
    tag: 'td',
    ...props,
  });
}
