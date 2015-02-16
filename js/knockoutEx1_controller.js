/*
 * アプリケーションのコントローラ.
 * MVVC の C
 * -----------------------------------------------------------------------------
 * HTML から呼び出されるモジュールは
 * require([mod1, mod2], function(if1, if2) {
 *   // 処理
 * }
 * と記述する。
 *
 * 第一引数は、依存するライブラリ名。
 * 第二引数は、画面の初期化を行う処理で、その引数は依存するライブラリ
 * のインタフェースオブジェクト。
 *
 * 依存するライブラリは、AMD に準拠している必要がある。
 * AMD に関しては knockoutEx1_model を参照してね
 */
require.config({

  // Javascript の Base Url
  baseUrl: 'js/lib',

  // ライブラリのパスの別名を定義する
  paths: {
   'app':      '../',
   'knockout': 'knockout-3.2.0'
  },

  // AMDに対応してないモジュールを読み込む
  shim: {
  }
});

require(['knockout', 'app/knockoutEx1_vmodel', 'app/knockoutEx1_model', 'domReady!'],
  function(ko, vmdl, mdl) {
    ko.applyBindings(new vmdl(new mdl()));
  }
);