import { setStyle } from '../utils/DOMutils';

export interface ElementAttributes {
  className?: string;
  innerText?: string;
  innerHTML?: string;
  value?: string;
  name?: string;
  onchange?: (ev: Event) => void;
  onclick?: (ev: Event) => void;
  onmouseover?: (ev: Event) => void;
  onmouseout?: (ev: Event) => void;
}

interface Tag {
  tag: string;
}
export interface ElementProps {
  attr?: ElementAttributes;
  class?: string;
  classOnHover?: string;
  id?: string;
  styles?: Partial<CSSStyleDeclaration>;
}

export function Element(props: Tag & ElementProps) {
  const el = document.createElement(props.tag);
  const { id, attr, styles, classOnHover } = props;

  if (id) {
    el.setAttribute('id', id);
  }

  if (props.class) {
    el.setAttribute('class', props.class);
  }

  if (attr) {
    Object.keys(attr).forEach((key) => {
      (el as any)[key] = attr[key as keyof ElementAttributes];
    });
  }

  if (styles) {
    setStyle(el, styles);
  }

  if (classOnHover) {
    const classListOnHover = classOnHover.split(' ');
    el.onmouseover = () => el.classList.add(...classListOnHover);
    el.onmouseout = () => el.classList.remove(...classListOnHover);
  }

  return el;
}
