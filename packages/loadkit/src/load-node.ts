export interface LoadNodeOptions {
  id?: string;
  urlKey?: string;
  tagName?: string;
  callback?: (node) => any;
  container?: HTMLElement;

  [key: string]: any;
}

export default function loadNode(inUrl: string, inProps: LoadNodeOptions): Promise<null> {
  const { id, urlKey, tagName, callback, container, ...opts } = inProps;
  const containerNode = container || document.body;
  if (id && document.getElementById(id)) return Promise.resolve(null);

  const props = { [urlKey!]: inUrl, ...opts };

  let node = document.createElement(tagName!);
  if (id) node.id = id;
  callback && (node = callback(node));
  for (const key in props) node.setAttribute(key, props[key]);
  containerNode.appendChild(node);
  return new Promise((resolve, reject) => {
    node.onload = () => resolve(null);
    node.onerror = () => reject(new Error(`Failed to load node: ${inUrl}`));
  });
}
