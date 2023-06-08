import { Element, ElementProps } from './Element';

export interface FormProps extends ElementProps {}

export function Form(props?: FormProps) {
  return Element({
    tag: 'form',
    ...props,
  });
}
