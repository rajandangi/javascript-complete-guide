class InfoToggle extends HTMLElement {
    constructor() {
        super();

        this._isVisible = false;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    background-color: #ff0000;
                    color: white;
                    padding: 10px;
                    border: none;
                }
                #info-box {
                    display: none;
                    background-color: #0000ff;
                    color: white;
                    padding: 10px;
                }
            </style>
            <button>show</button>
            <p id="info-box"><slot>More infos</slot></p>
        `;
        this._toggleButton = this.shadowRoot.querySelector('button');
        this._infoBox = this.shadowRoot.querySelector('p');
        this._toggleButton.addEventListener('click', this._toggleInfoBox.bind(this));
    }

    connectedCallback() {
        if (this.hasAttribute('is-visible')) {
            if (this.getAttribute('is-visible') === 'true') {
                this._isVisible = true;
                this._infoBox.style.display = 'block';
                this._toggleButton.textContent = 'Hide';
            }
        }
    }

    _toggleInfoBox() {
        this._isVisible = !this._isVisible;
        this._infoBox.style.display = this._isVisible ? 'block' : 'none';
        this._toggleButton.textContent = this._isVisible ? 'Hide' : 'Show';
    }
}

customElements.define('rajan-button', InfoToggle);