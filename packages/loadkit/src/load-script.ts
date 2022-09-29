export default (inUrl: string, inProps: Partial<HTMLScriptElement>): Promise<any> => {
  const id = inProps.id;
  if (id && document.getElementById(id)) return Promise.resolve(null);

  const props = {src: inUrl, ...inProps};

  const script = document.createElement('script');
  for (const key in props) script.setAttribute(key, props[key]);
  document.body.appendChild(script);
  return new Promise((resolve, reject) => {
    script.onload = () => resolve(null)
    script.onerror = () => reject(new Error(`Failed to load script: ${inUrl}`))
  });
}
