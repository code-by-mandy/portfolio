const portfolio = {};

portfolio.init = () => {
    portfolio.toggleMain();
}

portfolio.toggleMain = () => {
    const contentClass = document.querySelectorAll(".wrapper");

    contentClass.forEach (page => {
        //store value of href
        //store value of id
        //store index of nodelist per id
        //check if href of clicked element equal id value
        //if yes, add class list staged to corresponding nodelist index content[0].classList.add("staged");

        page.addEventListener('click', function() {
            console.log(this);
        });
    })
}

portfolio.init();