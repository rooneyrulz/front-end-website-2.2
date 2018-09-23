window.onload = () => {

    //Initialize sidenav
    const $sidenav = document.querySelector('.sidenav');
    M.Sidenav.init($sidenav, {});

    //Initialize autocomplete
    const $ac = document.querySelector('.autocomplete');
    M.Autocomplete.init($ac, {
        data: {
            "Aruba": null,
            "Bahamas": null,
            "Bermuda": null,
            "Cancun": null,
            "California": null,
            "Careebian": null,
            "Chicago": null,
            "Hawaii": null,
            "Florida": null,
            "Jamaica": null,
            "Loas": null,
            "Panama": null,
            "Canada": null,
            "Iceland": null,
            "Java": null,
            "Norway": null
        }
    });

    //Initialize scrollspy
    const $ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init($ss, {});
};