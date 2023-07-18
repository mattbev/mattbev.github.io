class NavBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg py-3" style="background-color: #e8e8e8;">
                <div class="container-fluid">
                    <b class="navbar-brand">Matthew Beveridge</b>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href=".">Home</a>
                            <a class="nav-link" href="publications.html">Publications</a>
                            <a class="nav-link" href="service.html">Service</a>
                            <a class="nav-link" href="press.html">Press</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}
$(function () {
    $('a').each(function () {
        if ($(this).prop('href') == window.location.href) {
            $('a.active').removeClass('active');
            $('a.aria-current').val('');
            
            $(this).addClass('active');
            $(this).$('aria-current').val('page');
        } 
    });
});
customElements.define('navbar-component', NavBar);
