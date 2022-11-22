import loadNode, {LoadNodeOptions} from './load-node';

type LoadStyleOptions = LoadNodeOptions & Partial<HTMLLinkElement>;

export const loadStyle = (inUrl: string, inProps: LoadStyleOptions): Promise<null> => {
  const {id, urlKey = 'href', tagName = 'link', rel = "stylesheet", container = document.head, ...props} = inProps;
  return loadNode(inUrl, {id, urlKey, tagName, rel, container, ...props});
};

export const loadStyles = (inUrls: string[], props: LoadStyleOptions): Promise<null> => {
  return Promise.all(inUrls.map((url) => loadStyle(url, props))).then(() => null);
};
