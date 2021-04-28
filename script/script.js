const portfolio = {};

portfolio.init = () => {

    portfolio.allNav = document.querySelector('nav');
    portfolio.menu = document.querySelectorAll(".menu");
    portfolio.pages = document.querySelectorAll("#home, #about, #projects, #contact");

    portfolio.toggleMain();
    portfolio.clearActiveNav();
    portfolio.minMenu();
}

/*toggle visibility of page when clicked in nav*/
portfolio.toggleMain = () => {
   
    portfolio.menu.forEach ( menuItem => {
        menuItem.addEventListener('click', function() {

            const chosenID = this.hash;
            const chosenIDNoHash = chosenID.slice(1);
            portfolio.chosenPage = this;

            portfolio.pages.forEach (page => {  
                if (chosenIDNoHash === page.id) {
                    page.classList.remove("sr-only");
                    portfolio.chosenPageID = page.id;
                } else {
                    page.classList.add("sr-only");
                }
            });
        });
    })
}

/*toggle active class on nav*/
portfolio.clearActiveNav = () => {


    portfolio.allNav.addEventListener('click', function() {
        portfolio.menu.forEach ( menuItem => {
            if (menuItem === portfolio.chosenPage) {
                menuItem.classList.add("active");
            } else {
                menuItem.classList.remove("active");
            }
        })

        portfolio.menuStyle();
    })
}

/*change mobile menu style based on page*/
portfolio.menuStyle = () => {
    
    //toggle css to show all if home  
    if (portfolio.chosenPageID !== "home") {
        portfolio.allNav.classList.remove("home");
    } else {
        portfolio.allNav.classList.add("home");
    }
}

/*minimize menu*/
portfolio.minMenu = () => {
    const openMenu = document.querySelector('.open_menu');
    const menuList = document.querySelector('.pop_menu')
    openMenu.addEventListener('click', function() {
        menuList.classList.add("opened");
    });
}

portfolio.init();