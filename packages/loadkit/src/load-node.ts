export interface LoadNodeOptions {
  id: string;
  urlKey: string;
  tagName: string;

  [key: string]: any;
}

export default function loadNode(inUrl: string, inProps: LoadNodeOptions): Promise<null> {
  const { id, urlKey, tagName, ...opts } = inProps;
  if (id && document.getElementById(id)) return Promise.resolve(null);

  const props = { [urlKey]: inUrl, ...opts };

  const node = document.createElement(tagName);
  for (const key in props) node.setAttribute(key, props[key]);
  document.body.appendChild(node);
  return new Promise((resolve, reject) => {
    node.onload = () => resolve(null);
    node.onerror = () => reject(new Error(`Failed to load node: ${inUrl}`));
  });
}
