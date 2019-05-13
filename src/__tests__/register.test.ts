import { IAttribute, IOptions, RegisterCustomElement } from '../register';

interface ITestParams {
  containerId: string,
  name: string,
  url: string,
  cssClass: string,
  attributes: IAttribute[]
}

const params: ITestParams  = {
  attributes: [{
    name: 'chris',
    value: 'chrisValue'
  }],
  containerId: 'myTestContainer',
  cssClass: 'chrisTest',
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

test('Register - custom element css class', () => {
  const containerEl: HTMLElement = document.createElement('div')
  containerEl.id = params.containerId;
  document.body.append(containerEl);
  const options: IOptions = {
    className: params.cssClass
  }
  RegisterCustomElement(containerEl, params.name, params.url, options);
  expect(containerEl.querySelectorAll('chris-app.chrisTest').length).toBeGreaterThan(0);
});

test('Register - custom element attribute', () => {
  const containerEl: HTMLElement = document.createElement('div')
  containerEl.id = params.containerId;
  document.body.append(containerEl);
  const options: IOptions = {
    attributes: params.attributes
  }
  RegisterCustomElement(containerEl, params.name, params.url, options);
  expect(containerEl.querySelectorAll('chris-app[chris=chrisValue]').length).toBeGreaterThan(0);
});