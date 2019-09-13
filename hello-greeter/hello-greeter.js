(function () {
  window.customElements.define(
    'hello-greeter',
    class extends HTMLElement {
      connectedCallback() {
        this.name = 'Workshop'
        this.render();
      }
      render() {
        this.innerHTML = `<h1>Hello ${this.name}!</h1>`
      }

      static get observedAttributes() {
        return ['name'];
      }

      attributeChangedCallback(attr, oldValue, newValue) {
        console.log('attribute changed', newValue)
        if (attr === 'name') {
          this.onNameChanged(oldValue, newValue)
          this.render();
        }
      }
      onNameChanged(oldValue, newValue) {
        this.dispatchEvent(
          new CustomEvent("name-changed", {
            detail: `name changed from ${oldValue} to ${newValue}`
          })
        );
      }
      get name() {
        return this.getAttribute('name');
      }
      set name(val) {
        this.setAttribute('name', val);
      }
    });
})();
