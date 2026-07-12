/**
 * 7月の新メニューLP — 軽量スクリプト(依存ライブラリなし)
 * 1. スクロールでヘッダーに背景を付与
 * 2. セクションのフェードイン(IntersectionObserver)
 * 3. ヒーローを過ぎたら追従予約バーを表示(スマホ)
 */
(function () {
  'use strict';

  var header = document.getElementById('js-header');
  var fixedCta = document.getElementById('js-fixed-cta');
  var hero = document.querySelector('.p-hero');

  /* 1 & 3: ヒーローの表示状態を1つのObserverで監視 */
  if ('IntersectionObserver' in window && hero) {
    var heroObserver = new IntersectionObserver(function (entries) {
      var heroVisible = entries[0].isIntersecting;
      if (header) header.classList.toggle('is-scrolled', !heroVisible);
      if (fixedCta) {
        fixedCta.classList.toggle('is-visible', !heroVisible);
        fixedCta.setAttribute('aria-hidden', String(heroVisible));
      }
    }, { threshold: 0, rootMargin: '-64px 0px 0px 0px' });
    heroObserver.observe(hero);
  }

  /* 2: フェードイン表示 */
  var reveals = document.querySelectorAll('.u-reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-inview');
          observer.unobserve(entry.target); // 一度表示したら監視を解除して軽量化
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { revealObserver.observe(el); });
  } else {
    // 非対応ブラウザではそのまま表示
    reveals.forEach(function (el) { el.classList.add('is-inview'); });
  }
})();
