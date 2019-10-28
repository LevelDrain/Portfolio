const init = () => {
    const title = document.getElementById('TitileLogo'),
        height = 400;
    let offset = 0,
        lastPosition = 0,
        ticking = false;

    const onScroll = () => {
        if (lastPosition > height) {
            if (lastPosition > offset) {
                title.classList.add('ScrollAnimation');
            } else {
                title.classList.remove('ScrollAnimation');
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
}

onload = init;