// Refer to the README.md for the lifecycle of the custom element
// Every custom element must extend HTMLElement
// use ::slotted(*) to style all the elements that are slotted
// :host is used to style the custom element itself
// :host(.some-class) is used to style the custom element itself when it has a class of some-class
// :host-context(p) is used to style the custom element itself when it is inside a p element
class Tooltip extends HTMLElement {
    constructor() {
        super();// Always call super first in constructor

        this._tooltipIcon;
        this._tooltipVisible = false;
        this._tooltipText = 'Default tooltip text';
        this.attachShadow({ mode: 'open' }); // Shadow DOM (encapsulation
        this.shadowRoot.innerHTML = `
            <style>
            div{
                font-weight: normal;
                background-color:black;
                color:white;
                position:absolute;
                top:1.5rem;
                left:0.75rem;
                z-index:10;
                padding:0.15rem;
                border-radius:3px;
                box-shadow: 1px 1px 6px rgba(0,0,0,0.26);
            }
            :host{
                position:relative;
            }
            :host(.important){
                background-color: var(--color-primary, #ccc);
                padding: 0.15rem;
            }
            :host-context(p){
                font-weight: bold;
            }
            ::slotted(.highlight){
                border-bottom: 2px dotted red;
            }
            </style>
            <slot>Some Default</slot>
            <span> (?)</span>
            `;
    }

    // DOM Initialisation
    // connectedCallback() is called when the element is inserted into the DOM
    // this method built-in to the HTMLElement class
    connectedCallback() {
        // Get attribute value added to the custom element
        if (this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text');
        }

        this._tooltipIcon = this.shadowRoot.querySelector('span');
        this._tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        this._tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    }

    // attributeChangedCallback() is called when an observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        if (name === 'text') {
            this._tooltipText = newValue;
        }
    }

    // observedAttributes is a static method that returns an array of attribute names to watch for changes
    static get observedAttributes() {
        return ['text'];
    }

    // DisconnectedCallback() is called when the element is removed from the DOM
    disconnectedCallback() {
        this._tooltipIcon.removeEventListener('mouseenter', this._showTooltip);
        this._tooltipIcon.removeEventListener('mouseleave', this._hideTooltip);
    }

    _render() {
        let tooltipContainer = this.shadowRoot.querySelector('div');
        if (this._tooltipVisible) {
            tooltipContainer = document.createElement('div');
            tooltipContainer.textContent = this._tooltipText;
            this.shadowRoot.appendChild(tooltipContainer);
        } else {
            if (tooltipContainer) {
                this.shadowRoot.removeChild(tooltipContainer);
            }
        }
    }

    _showTooltip() {
        this._tooltipVisible = true;
        this._render();
    }

    _hideTooltip() {
        this._tooltipVisible = false;
        this._render();
    }
}

// Define the custom element
customElements.define('rajan-tooltip', Tooltip);

