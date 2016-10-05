import Vue from 'vue'

export default class CorespringMultipleChoiceVueElement extends HTMLElement{
  constructor(){
    super();
    this._model = null;
    this._session = null;
  }

  get model(){
    return this._model;
  }
  
  set model(s){
    this._model = s;
    this._rerender();
  }

  get session(){
    return this._session;
  }
  
  set session(s){
    this._session = s;
    this._rerender();
  }

  createdCallback() {
    console.log('created');
    this.innerHTML = "<root-component></root-component>";
    this._rerender();
  }

  attachedCallback(){
    console.log('attached');
  }

  _rerender() {
    console.log('_rerender...');
    if (this._model && this._session) {

      var MyComponent = Vue.extend({
        template: '<div>A custom component!</div>'
      })
      Vue.component('root-component', MyComponent)
      let vm = new Vue({
        el: this
      })
     console.log("vue rendered");

    } else {
      console.log('skip');
    }
  }

}



