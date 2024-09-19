$(function () {
  /*=================================================
  ハンバーガーメニュー
  解説は、「中級編：ストアサイト（インテリア）」参照
  ===================================================*/
  $(".toggle-btn").on("click", function () {
    $("header").toggleClass("open"); 
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $("#mask").on("click", function () {
    $("header").removeClass("open");
  });

  // リンクをクリックした時にメニューを閉じる
  $("#navi a").on("click", function () {
    $("header").removeClass("open");
  });
});

$(window).scroll(function () {
    $(".left-box").each(function () {

var scroll = $(window).scrollTop();

    var target = $(this).offset().top;

    var windowHeight = $(window).height();

    if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("slide-left");
    }
    });
});

$(window).scroll(function () {
    $(".right-box").each(function () {

    var scroll = $(window).scrollTop();

    var target = $(this).offset().top;

    var windowHeight = $(window).height();

    if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("slide-right");
}
    });
});

$(".slide-items").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
    {
        breakpoint: 768,
        settings: {
        centerPadding: "50px",
        slidesToShow: 1,
        },
    },
    ],
});

$(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
      // 画面の高さ
    let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
    if (scroll > target - windowHeight + 150) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
    }
    });
});

$(function () {
    /*=================================================
    スムーススクロール
    ===================================================*/
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function () {
      // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
      // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
      // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
      // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
      // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop:position  }, 600, "swing");
      // urlが変化しないようにfalseを返す
    return false;
    });
});
