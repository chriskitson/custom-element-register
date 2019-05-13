export interface IAttribute {
  name: string;
  value: any;
 }
 
 export interface IOptions {
   className?: string;
   attributes?: IAttribute[]
 }

export const RegisterScript = (name: string, src: string): void => {
  // dynamically insert script (if doesn't already exist)
  if (!document.getElementById(name)) {
    const script = document.createElement('script');
    script.src = src;
    script.id = name;
    // script.onerror = () => console.error(`error loading ${src}`);
    document.body.appendChild(script);
  }
};

export const CreateElement = (container: HTMLElement, name: string, options?: IOptions): void => {
  // dynamically insert element
  const element: HTMLElement = document.createElement(name);
  // add class
  if (options && options.className) {
    element.className = options.className;
  }
  // add attributes
  if (options && options.attributes && options.attributes.length > 0) {
    options.attributes.forEach((attr: IAttribute) => element.setAttribute(attr.name, attr.value));
  }
  // element.addEventListener('message', msg => console.log(msg));
  container.appendChild(element);
};

export const RegisterCustomElement = (container: HTMLElement, name: string, src: string,  options?: IOptions): void => {
  RegisterScript(name, src);
  CreateElement(container, name, options);
};