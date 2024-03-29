// Refer to the README.md for the lifecycle of the custom element
// Every custom element must extend HTMLElement
class Tooltip extends HTMLElement {
    constructor() {
        super();// Always call super first in constructor

        this._tooltipContainer;
        this._tooltipText = 'Default tooltip text';
    }

    // DOM Initialisation
    // connectedCallback() is called when the element is inserted into the DOM
    // this method built-in to the HTMLElement class
    connectedCallback() {
        // Get attribute value added to the custom element
        if (this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text');
        }

        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?)';
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        this.appendChild(tooltipIcon);
    }

    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._tooltipText;
        this.appendChild(this._tooltipContainer);
    }

    _hideTooltip() {
        this.removeChild(this._tooltipContainer);
    }
}

// Define the custom element
customElements.define('rajan-tooltip', Tooltip);

