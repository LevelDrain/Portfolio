const init = () => {
    const $title = document.querySelector('.TitleLogo'),
        $pagetop = document.querySelector('#PageTop'),
        $rocketcat = document.querySelector('#Rocket'),
        $menubarS = document.querySelector('#Menubar-s'),
        $hmenu = document.querySelector('.Hmenu'),
        $HmenuOpen = document.querySelector('#HamburgerOpen'),
        $HmenuClose = document.querySelector('#HamburgerClose'),
        height = 400; //上から400pxでタイトルロゴが消える
    let lastPosition = 0,
        ticking = false;

    // タイトルロゴとトップボタンの出し入れ
    const onScroll = () => {
        if (lastPosition > height) {
            $title.classList.add('ScrollAnimation');
            $pagetop.classList.add('ScrollAnimation');
        } else {
            $title.classList.remove('ScrollAnimation');
            $pagetop.classList.remove('ScrollAnimation');
        }
    }

    window.addEventListener('scroll', () => {
        lastPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                onScroll(lastPosition);
                ticking = false;
            });
            ticking = true;
        }
    });

    // 「トップへ」アニメーション
    $pagetop.addEventListener('click', () => {
        $pagetop.classList.add('hideCat');
        $rocketcat.classList.add('PageTopAnimation');
        setTimeout(() => { $pagetop.classList.remove('hideCat'); $rocketcat.classList.remove('PageTopAnimation') }, 500);
        window.scrollTo({
            top,
            behavior: 'smooth'
        });
    });

    $hmenu.addEventListener('click', () => {
        if ($HmenuOpen.style.display == 'block' && $HmenuClose.style.display == 'none') {
            $HmenuOpen.style.display = 'none';
            $HmenuClose.style.display = 'block';
        } else {
            $HmenuOpen.style.display = 'block';
            $HmenuClose.style.display = 'none';
        }

        ($menubarS.style.display == 'none') ? $menubarS.style.display = 'block' : $menubarS.style.display = 'none';
    });


    // https://allabout.co.jp/gm/gc/23805/

}

onload = init;

//メモ
//https://firstlayout.net/scroll-down-and-scroll-up-with-javascript/
//https://www.to-r.net/media/smooth_scrolling_2019/
//https://www.webprofessional.jp/our-top-9-animation-libraries/