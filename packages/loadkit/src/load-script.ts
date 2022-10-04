import loadNode, { LoadNodeOptions } from './load-node';

type LoadScriptOptions = LoadNodeOptions & Partial<HTMLScriptElement>;

export const loadScript = (inUrl: string, inProps: LoadScriptOptions): Promise<null> => {
  const { id, urlKey = 'src', tagName = 'script', container = document.body, ...props } = inProps;
  return loadNode(inUrl, { id, urlKey, tagName, ...props });
};

export const loadScripts = (inUrls: string[], props: LoadScriptOptions): Promise<null> => {
  return Promise.all(inUrls.map((url) => loadScript(url, props))).then(() => null);
};
