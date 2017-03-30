console.log('hello');

const VuePie = require('../src/index').default;

customElements.define('vue-pie', VuePie);

let init = () => {
  customElements.whenDefined('vue-pie')
    .then(() => {
      let el = document.querySelector('vue-pie');
      el.model = { prompt: 'an external prompt' }
      el.session = { answer: 'hi' }
    });
}

if (document.readyState === 'ready') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    init();
  });
}