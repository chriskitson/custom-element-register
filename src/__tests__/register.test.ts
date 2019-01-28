import { RegisterCustomElement } from '../register';

interface ITestParams {
  containerId: string,
  name: string,
  url: string
}

const params: ITestParams  = {
  containerId: 'myTestContainer',
  name: 'chris-app',
  url: 'http://a-test.url/'
};

test('Register - container to be defined', () => {
  const containerEl: HTMLElement = document.createElement('div')
  containerEl.id = params.containerId;
  document.body.append(containerEl);
  expect(document.getElementById('myTestContainer')).toBeDefined();
});

test('Register - custom element tag created', () => {
  const containerEl: HTMLElement = document.createElement('div')
  containerEl.id = params.containerId;
  document.body.append(containerEl);
  RegisterCustomElement(containerEl, params.name, params.url);
  expect(containerEl.querySelectorAll('chris-app').length).toBeGreaterThan(0);
});

test('Register - custom script tag created', () => {
  const containerEl: HTMLElement = document.createElement('div')
  containerEl.id = params.containerId;
  document.body.append(containerEl);
  RegisterCustomElement(containerEl, params.name, params.url);
  expect(document.querySelectorAll('script').length).toBeGreaterThan(0);
});

test('Register - custom script tag id correct', () => {
  const containerEl: HTMLElement = document.createElement('div')
  containerEl.id = params.containerId;
  document.body.append(containerEl);
  RegisterCustomElement(containerEl, params.name, params.url);
  expect(document.querySelectorAll('script')[0].id).toEqual(params.name);
});

test('Register - custom script tag url correct', () => {
  const containerEl: HTMLElement = document.createElement('div')
  containerEl.id = params.containerId;
  document.body.append(containerEl);
  RegisterCustomElement(containerEl, params.name, params.url);
  expect(document.querySelectorAll('script')[0].src).toEqual(params.url);
});

// test('Register - custom element loaded', () => {
//   const containerEl: HTMLElement = document.createElement('div')
//   containerEl.id = params.containerId;
//   document.body.append(containerEl);
//   Register(containerEl, params.name, params.url);
//   expect(document.querySelectorAll('script')[0].src).toEqual(params.url);
// });