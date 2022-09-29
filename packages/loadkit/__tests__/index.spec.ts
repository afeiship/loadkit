import {loadScript} from '../src';

jest.setTimeout(30000);

describe('api.basic', () => {
  test('normail single value case', (done) => {
    const url = 'https://unpkg.zhimg.com/@cfe/sentry-script@1.3.1/dist/init.js'
    loadScript(url, {id: 'lskit'}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      done()
    })
    // expect(document.getElementById('lskit')).toBeTruthy();
  });
});
