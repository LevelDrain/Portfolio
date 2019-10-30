const init = () => {
    const title = document.getElementById('TitileLogo'),
        pagetop = document.getElementById('PageTop'),
        height = 400;
    let offset = 0,
        lastPosition = 0,
        ticking = false;

    const onScroll = () => {
        if (lastPosition > height) {
            if (lastPosition > offset) {
                title.classList.add('ScrollAnimation');
                pagetop.classList.add('ScrollAnimation');
            } else {
                title.classList.remove('ScrollAnimation');
                pagetop.classList.remove('ScrollAnimation');
                //セクションに被った段階で下スクロールをすると逆に表示される
            }
            offset = lastPosition;
        }
    }

    window.addEventListener('scroll', () => {
        lastPosition = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                onScroll(lastPosition);//onScrollは引数を取らないはずでは？
                ticking = false;//何のための初期化？
            });
            ticking = true;
        }
    });

    //参考：https://firstlayout.net/scroll-down-and-scroll-up-with-javascript/

    pagetop.addEventListener('click', () => {
        title.classList.remove('ScrollAnimation');
        title.classList.add('ScrollAnimation');
        scrollTo(0, 0);
        //     pagetop.classList.remove('ScrollAnimation');
        //     pagetop.classList.add('PageTopAnimation');
        console.log(title);
    })
}

onload = init;