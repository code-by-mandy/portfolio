const portfolio = {};

portfolio.init = () => {

    portfolio.allNav = document.querySelector('nav');
    portfolio.menuList = document.querySelector('.pop_menu')
    portfolio.menu = document.querySelectorAll(".menu");
    portfolio.pages = document.querySelectorAll("#home, #about, #projects, #contact");
    portfolio.openMenu = document.querySelector('.open_menu');

    portfolio.toggleMain();
    portfolio.clearActiveNav();
    portfolio.minMenu();
}

/*toggle visibility of page when clicked in nav, close popup nav when page is chosen (line 29)*/
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
                    portfolio.menuList.classList.remove("opened");
                    portfolio.openMenu.innerHTML = "Menu";
                    portfolio.openMenu.hidden= false;   
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
        });

        portfolio.menuStyle();
    })
}


/*show minimized menu */
portfolio.minMenu = () => {
    portfolio.openMenu.addEventListener('click', function() {
        portfolio.menuList.classList.toggle("opened");
        if (portfolio.menuList.className === "pop_menu opened") {
            portfolio.openMenu.innerHTML = "Close";
        } else {
            portfolio.openMenu.innerHTML = "Menu";
        }        
    });
}

/*change mobile menu style based on page*/
portfolio.menuStyle = () => {
   
    //toggle css to show all if home  
    if (portfolio.chosenPageID !== "home") {
        portfolio.allNav.classList.add("minimized");
        portfolio.allNav.classList.remove("home");
    } else {
        portfolio.allNav.classList.add("home");
        portfolio.allNav.classList.remove("minimized");
        portfolio.openMenu.hidden = true;     
    }
}

portfolio.init();