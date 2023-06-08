import { Element, ElementProps } from './Element';

export function Form(props?: ElementProps) {
  return Element({
    tag: 'form',
    ...props,
  });
}
