function readYaml(yaml_path) {
    "use strict";
    $(document).ready(function () {
        $.get(yaml_path)
            .done(function (data) {
                var jsonString = JSON.stringify(data);
                return $.parseJSON(jsonString);
            });
    });
}

class PublicationsList extends HTMLElement {
    constructor() {
        super();
        this.data = readYaml("../assets/documents/publications.yaml");
    }

    connectedCallback() {
        this.innerHTML = '<p>' + str(this.data) + '</p>';
    }
}

customElements.define('publicationslist-component', PublicationsList);


class PublicationsTable extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        `;
    }
}

customElements.define('publicationstable-component', PublicationsTable);

