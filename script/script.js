const portfolio = {};

portfolio.init = () => {

    /*namespace variables*/
    portfolio.menuItems = document.querySelectorAll(".menuItem");
    portfolio.pages = document.querySelectorAll("#home, #about, #projects, #contact");
    portfolio.tabMsg = document.querySelector(".tabMsg");

    /*namespace functions - details below*/
    portfolio.scrolledNav();
    portfolio.keyboardNav();
    portfolio.touchNav();
    portfolio.formSubmit();
}


/*change active on scroll*/
portfolio.scrolledNav = () => {
    
    /*check whether target element is within view*/
    const checkInView = (elem) => {
        const checkElemView = elem.getBoundingClientRect();
        return (
            checkElemView.top <= 300 &&
            checkElemView.bottom >= 0
            );
    };

    /*on scroll, if page is within view, define element as partfolio.inview variable*/
    window.addEventListener('scroll', function () {
        portfolio.pages.forEach ( page => {
            if (checkInView(page)) {
                portfolio.inView = page;
            }
        });

        /*for each menu item, if menu hash is same as page id, add active line to menu*/
        portfolio.menuItems.forEach ( menuItem => {
            const viewID = menuItem.hash;
            const viewIDNoHash = viewID.slice(1);

            if (viewIDNoHash === portfolio.inView.id) {
                menuItem.classList.add("active");
            } else {
                menuItem.classList.remove("active");
            }            
        });        
    });
}

/*tie touch and mouse to solve multiple active nav issue when scrolling with touch*/
portfolio.touchNav = () => {
    document.addEventListener("touchend", function(e) {
        let touched = e.target;
        touched.click();
        e.preventDefault();
    })
}

/*tip for keyboard users on using F4 to quickly toggle menu*/
portfolio.keyboardNav = () => {    
    document.addEventListener("keydown", function(e) {
        if (e.code === "F4") {
            portfolio.activePage.focus();
        }
    });
}

/*disable and clear contact form on submit*/
portfolio.formSubmit = () => {
    const submit = document.querySelector("button");
    const formMsg = document.querySelector(".formMsg");
    const clearInput = document.querySelectorAll("input[type=Text]");

    submit.addEventListener("click", function(e) {
        submit.classList.add("submitted");
        formMsg.innerHTML = "Thank you!"
        clearInput.forEach(input => {
            input.value = "";
            input.disabled = true;
        })
    })
}

portfolio.init();