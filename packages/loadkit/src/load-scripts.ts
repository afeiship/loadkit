import loadScript from './load-script';

export default (inUrls: string[], inOptions: Partial<HTMLScriptElement>) => {
  return Promise.all(inUrls.map((url) => loadScript(url, inOptions)));
};
