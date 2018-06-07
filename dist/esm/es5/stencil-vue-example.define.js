// StencilVueExample: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './stencil-vue-example.core.js';
import {
  ProfileCard
} from './stencil-vue-example.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    ProfileCard
  ], opts);
}