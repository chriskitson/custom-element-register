# Custom Element Register

This script dynamically loads a script tag (to be used to serve a custom element) and creates a custom element tag inside another HTML element for the custom element.

[GitHub](https://github.com/chriskitson/custom-element-register)

## Usage

```
import { RegisterCustomElement } from 'custom-element-register';

RegisterCustomElement(document.getElementBy('#myContainer'), 'my-app', '/my-app/element.js');
```

## Register Script Only

```
import { RegisterScript } from 'custom-element-register';

RegisterScript('my-app', '/my-app/element.js');
```

## Create Element Only

```
import { CreateElement } from 'custom-element-register';

CreateElement(document.getElementBy('#myContainer'), 'my-app');
```