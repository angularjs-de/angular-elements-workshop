(function () {
  window.customElements.define('business-card',
    class extends HTMLElement {
      connectedCallback() {
        this.render();
      }
      render() {
        this.innerHTML = `<div>
          <h2>${this.name}</h2>
          <h3>${this.email}</h3>
        </div>`
      }

      static get observedAttributes() {
        return [''];
      }
      set name(val) {
        this.setAttribute('name', val);
      }
      get name() {
        return this.getAttribute('name');
      }
      set email(val) {
        this.setAttribute('email', val);
      }
      get email() {
        return this.getAttribute('email');
      }

    });
})();
