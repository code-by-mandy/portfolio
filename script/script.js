const portfolio = {};

portfolio.init = () => {

    /*namespace variables*/
    portfolio.navElement = document.querySelector('nav');
    portfolio.menuList = document.querySelector('.menuList')
    portfolio.menuItems = document.querySelectorAll(".menuItem");
    portfolio.openMenu = document.querySelector('.openMenu');
    portfolio.pages = document.querySelectorAll("#home, #about, #projects, #contact");

    portfolio.toggleMain();
    portfolio.clearActiveNav();
    portfolio.keyboardNav();

    portfolio.openMenu.onclick = portfolio.toggleMenu;

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
                    page.classList.remove("sr-only");
                    portfolio.chosenPageID = page.id;

                    /*close menu when page is chosen*/
                    portfolio.menuList.classList.remove("opened");
                    portfolio.openMenu.hidden= false; 
                    portfolio.openMenu.innerHTML = "Menu";

                } else {
                    page.classList.add("sr-only");
                }
            });
        });
    })
}

/*toggle active class on nav*/
portfolio.clearActiveNav = () => {
    portfolio.menuList.addEventListener('click', function() {
        portfolio.menuItems.forEach ( menuItem => {
            if (menuItem === portfolio.chosenPage) {
                menuItem.classList.add("active");   
            } else {
                menuItem.classList.remove("active");
            }
        });

        portfolio.menuStyle();
    })
}

/*toggle visibility menu */
portfolio.toggleMenu = () => {
        portfolio.menuList.classList.toggle("opened");
        if (portfolio.menuList.className === "menuList opened") {
            portfolio.openMenu.innerHTML = "Close";
        } else {
            portfolio.openMenu.innerHTML = "Menu";
        }        
}

/*nav keyboard accessibility*/
portfolio.keyboardNav = () => {
    //pick key for nav
    document.addEventListener("keydown", function(e) {
        if (e.code === "F4") {
            portfolio.toggleMenu();
            portfolio.chosenPage.focus();
        }

        if (e.code === "Tab") {
            
        }
    });
}

/*change mobile menu style based on page*/
portfolio.menuStyle = () => {
   
    //toggle css to show all if home  
    if (portfolio.chosenPageID !== "home") {
        portfolio.navElement.classList.add("notHome");
        portfolio.navElement.classList.remove("home");
    } else {
        portfolio.navElement.classList.add("home");
        portfolio.navElement.classList.remove("notHome");
        portfolio.openMenu.hidden = true;     
    }
}

portfolio.init();