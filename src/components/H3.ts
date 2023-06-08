import { Element, ElementProps } from './Element';

export interface H3Props extends ElementProps {}

export function H3(props: H3Props) {
  return Element({
    tag: 'h3',
    ...props,
  });
}
