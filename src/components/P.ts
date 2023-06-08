import { Element, ElementProps } from './Element';

export function P(props?: ElementProps) {
  return Element({
    tag: 'p',
    ...props,
  });
}
