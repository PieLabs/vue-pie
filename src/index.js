import Hello from './hello';
import Vue from 'vue';

export default class CorespringMultipleChoiceVueElement extends HTMLElement {
  constructor() {
    super();
    this._model = null;
    this._session = null;
  }

  set model(s) {
    this._model = s;
    this._rerender();
  }

  set session(s) {
    this._session = s;
    this._rerender();
  }

  connectedCallback() {
    console.log('connected');
    this._rerender();
  }

  _rerender() {
    console.log('_rerender...');
    if (this._model && this._session) {

      let vm = new Vue({
        el: this,
        render: h => h(Hello, { props: { msg: this._model.prompt } })
      });
      console.log('vm: ', vm);
    } else {
      console.log('skip');
    }
  }

}



