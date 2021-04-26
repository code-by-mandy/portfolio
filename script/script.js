const portfolio = {};

portfolio.init = () => {
    portfolio.toggleMain();
}

/*toggle visibility of page when clicked in nav*/
portfolio.toggleMain = () => {

    const menu = document.querySelectorAll(".menu")
    const pages = document.querySelectorAll("#home, #about, #projects, #contact")
   
    menu.forEach ( menuItem => {
        menuItem.addEventListener('click', function() {
            let menuID = this.hash;
            let menuIDNoHash = menuID.slice(1);
            pages.forEach (page => {                
                if (menuIDNoHash === page.id) {
                    page.classList.remove("sr-only");
                } else {
                    page.classList.add("sr-only");
                }
            })
        });
    })
}

portfolio.init();