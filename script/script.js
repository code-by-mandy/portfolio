const portfolio = {};

portfolio.init = () => {

    /*namespace variables*/
    portfolio.menuItems = document.querySelectorAll(".menuItem");
    portfolio.pages = document.querySelectorAll("#home, #about, #projects, #contact");
    portfolio.tabMsg = document.querySelector(".tabMsg");

    portfolio.scrolledNav();
    portfolio.keyboardNav();
    portfolio.formSubmit();

}

/*change active on scroll*/
portfolio.scrolledNav = () => {
    
    const checkInView = (elem) => {
        const checkElemView = elem.getBoundingClientRect();
        return (
            checkElemView.top <= 300 &&
            checkElemView.bottom >= 0
            );
    };

    window.addEventListener('scroll', function () {
        portfolio.pages.forEach ( page => {
            if (checkInView(page)) {
                portfolio.inView = page;
            }
        });

        portfolio.menuItems.forEach ( menuItem => {
            const viewID = menuItem.hash;
            const viewIDNoHash = viewID.slice(1);

            if (viewIDNoHash === portfolio.inView.id) {
                menuItem.classList.add("active");
                portfolio.activePage = menuItem;   
            } else {
                menuItem.classList.remove("active");
            }
        });
    }, false);
    
}

portfolio.keyboardNav = () => {    

    document.addEventListener("keydown", function(e) {

        if (e.code === "F4") {
            portfolio.activePage.focus();
        }
    });
}

portfolio.formSubmit = () => {
    const submit = document.querySelector("button");
    submit.addEventListener("click", function(e) {
        e.preventDefault();
    })
}

portfolio.init();