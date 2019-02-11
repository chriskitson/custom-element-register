export const RegisterCustomElement = (container: HTMLElement, name: string, src: string,  className?: string): void => {
  RegisterScript(name, src);
  CreateElement(container, name, className);
};

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

export const CreateElement = (container: HTMLElement, name: string, className?: string): void => {
  // dynamically insert element
  const element: HTMLElement = document.createElement(name);
  // add class
  if (className) {
    element.className = className;
  }
  // element.addEventListener('message', msg => console.log(msg));
  container.appendChild(element);
};