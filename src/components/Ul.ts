type Attributes = { id?: string; class?: string };
type UlProps = {
  attributes?: Attributes;
  class?: string;
  id?: string;
  elementsList: any[];
};

export function Ul(props: UlProps) {
  const ul = document.createElement('ul');
  props.elementsList.map((element) => {
    const li = document.createElement('li');
    li.innerText = element;
    ul.appendChild(li);
  });

  return ul;
}
