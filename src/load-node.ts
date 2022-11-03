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
  const props = { [urlKey!]: inUrl, ...opts };
  const selector = `${tagName}[${urlKey}="${inUrl}"]`;
  const cleanUp = () => {
    const els = document.querySelectorAll(selector) as any;
    if (els.length > 1) {
      // remove all but the first
      for (let i = 1; i < els.length; i++) {
        const el = els[i]!;
        el.parentNode.removeChild(els[i]);
      }
    }
  };

  let node = document.createElement(tagName!);
  if (id) node.id = id;
  if (callback) node = callback(node);

  for (const key in props) node.setAttribute(key, props[key]);
  containerNode.appendChild(node);

  return new Promise((resolve, reject) => {
    node.onload = () => (cleanUp(), resolve(null));
    node.onerror = () => reject(new Error(`Failed to load node: ${inUrl}`));
  });
}
