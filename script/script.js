const portfolio = {};

portfolio.init = () => {

    /*namespace variables*/
    portfolio.navElement = document.querySelector('nav');
    portfolio.menuList = document.querySelector('.menuList')
    portfolio.menuItems = document.querySelectorAll(".menuItem");
    portfolio.pages = document.querySelectorAll("#home, #about, #projects, #contact");


    portfolio.toggleMain();
    portfolio.scrolledNav();

    portfolio.chosenPage = document.querySelector(".active")
}

/*toggle visibility of page when clicked in nav*/
portfolio.toggleMain = () => {
   
    portfolio.menuItems.forEach ( menuItem => {
        menuItem.addEventListener('click', function() {

            const chosenID = this.hash;
            const chosenIDNoHash = chosenID.slice(1);
            portfolio.chosenPage = this;

            portfolio.pages.forEach (page => {  
                if (chosenIDNoHash === page.id) {
                    portfolio.chosenPageID = page.id;
                } 
            });
        });
    })
}

/*change active on scroll*/
portfolio.scrolledNav = () => {
    
    const checkInView = (elem) => {
        const checkElemView = elem.getBoundingClientRect();
        return (
            checkElemView.top <= 0 &&
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
            } else {
                menuItem.classList.remove("active");
            }
        });
    }, false);
    
}

portfolio.init();