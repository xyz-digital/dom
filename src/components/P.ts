import { Element, ElementProps } from './Element';

export interface PProps extends ElementProps {}

export function P(props?: PProps) {
  return Element({
    tag: 'p',
    ...props,
  });
}
