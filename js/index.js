const init = () => {
    const title = document.getElementById('TitileLogo'),
        pagetop = document.getElementById('PageTop'),
        rocketcat = document.getElementById('Rocket'),
        sectionAnimElm = document.querySelectorAll('SectionBG'),
        height = 400; //上から400pxでタイトルロゴが消える
    let offset = 0,
        lastPosition = 0,
        ticking = false;

    // タイトルロゴとトップボタンの出し入れ
    const onScroll = () => {
        if (lastPosition > height) {
            //if (lastPosition > offset) {
            title.classList.add('ScrollAnimation');
            pagetop.classList.add('ScrollAnimation');
            //}
            // else {
            //     title.classList.remove('ScrollAnimation');
            //     pagetop.classList.remove('ScrollAnimation');
            // }
            // offset = lastPosition;

        } else {
            title.classList.remove('ScrollAnimation');
            pagetop.classList.remove('ScrollAnimation');
        }
    }

    //スクロールでセクションをふわっと登場させる関数（未完成）
    const sectionAnimFunc = () => {
        let i = 0;
        for (; i < sectionAnimElm.length; i++) {
            if (window.innerHeight > sectionAnimElm[i].getBoundingClientRect().top + height) {
                sectionAnimElm[i].classList.add('show');
                console.log(sectionAnimElm);
            }
        }
    }

    window.addEventListener('scroll', () => {
        sectionAnimFunc();
        lastPosition = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                onScroll(lastPosition);//onScrollは引数を取らないはずでは？
                ticking = false;//何のための初期化？
            });
            ticking = true;
        }
    });

    // 「トップへ」アニメーション
    pagetop.addEventListener('click', () => {
        pagetop.classList.add('hideCat');
        rocketcat.classList.add('PageTopAnimation');
        setTimeout(() => { pagetop.classList.remove('hideCat'); rocketcat.classList.remove('PageTopAnimation') }, 500);
        window.scrollTo({
            top,
            behavior: 'smooth'
        });
    });
}

onload = init;

//メモ
//https://firstlayout.net/scroll-down-and-scroll-up-with-javascript/
//https://www.to-r.net/media/smooth_scrolling_2019/
//https://www.webprofessional.jp/our-top-9-animation-libraries/