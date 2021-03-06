export const JS = {
  id: 'js',
  extension: '.js',
  condition: '.jsx?$',
  code: `
import React from 'react';
import { render } from 'react-dom';
export default function(module) {
  const node = document.createElement('div');
  document.body.appendChild(node);
  render(React.createElement(module.default), node);
}
`,
};

export const HTML = {
  id: 'html',
  extension: '.html',
  condition: '.html$',
  code: `
export default function(module) {
  document.body.innerHTML = module
}
`,
};

export const TS = {
  id: 'ts',
  extension: '.ts',
  condition: '.tsx?$',
  code: `
import * as React from 'react';
import { render } from 'react-dom';
export default function(module) {
  const node = document.createElement('div');
  document.body.appendChild(node);
  render(React.createElement(module.default), node);
}
`,
};

export default [JS, HTML, TS];
