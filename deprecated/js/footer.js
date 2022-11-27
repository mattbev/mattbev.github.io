

class Copyright extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = '<div class="content" style="text-align: center">' +
            '<p>&copy;' +
            new Date().getFullYear() +
            '</p></div >';
    }
}

customElements.define('copyright-component', Copyright);
