import { loadScript } from '../src';

jest.setTimeout(5 * 1000);

describe('api.basic', () => {
  test('normail single value case', (done) => {
    const url = 'https://unpkg.zhimg.com/@cfe/sentry-script@1.3.1/dist/init.js';
    console.log(document.documentElement.innerHTML)
    loadScript(url, { id: 'lskit' })
      .then((res) => {
        console.log('rs.');
        console.log(document.documentElement.innerHTML)
        console.log(res);
      })
      .catch((err) => {
        console.log('err.');
        console.log(err);
      })
      .finally(() => {
        console.log('done.');
        done();
      });
    // expect(document.getElementById('lskit')).toBeTruthy();
  });
});
