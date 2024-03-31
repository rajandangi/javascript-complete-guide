// This is how you can extend the existing HTML elements and add your own custom behavior to it.
class ConfirmLink extends HTMLAnchorElement {
    connectedCallback() {
        this.addEventListener('click', event => {
            if (!confirm('Do you really want to leave?')) {
                event.preventDefault();
            }
        })
    }
}

customElements.define('rajan-confirm-link', ConfirmLink, { extends: 'a' });