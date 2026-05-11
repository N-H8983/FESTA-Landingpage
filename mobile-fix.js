(function () {
    var id  = 'festa-mobile-fix';
    var css =
        '@media (max-width:809.98px){' +
        '.framer-il26z .framer-1dt6xx9{padding-bottom:167px!important}' +
        '.framer-il26z .framer-1xk0gvt{bottom:53px!important;left:0!important;right:0!important;width:auto!important}' +
        '.framer-il26z .framer-jff71w{bottom:13px!important;left:0!important;right:0!important;width:auto!important}' +
        '.framer-il26z .framer-qm3vu{bottom:88px!important}' +
        '.framer-il26z .framer-1t357lr{right:0!important}' +
        '}';
    /* Poll every 50 ms until Framer has rendered .framer-il26z, then inject once */
    var timer = setInterval(function () {
        if (document.getElementById(id)) { clearInterval(timer); return; }
        if (document.querySelector('.framer-il26z')) {
            clearInterval(timer);
            var s = document.createElement('style');
            s.id = id;
            s.textContent = css;
            document.head.appendChild(s);
        }
    }, 50);
    setTimeout(function () { clearInterval(timer); }, 15000);
})();
