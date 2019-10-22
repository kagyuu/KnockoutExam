/*
 * アプリケーションのイニシャライザ.
 */
require.config({

  // Javascript の Base Url
  baseUrl: 'js/lib',

  // ライブラリのパスの別名を定義する
  paths: {
   'app':      '../',
   'knockout' : 'knockout-3.2.0',
  },

  // AMDに対応してないモジュールを読み込む
  shim: {
  }
});

require(['knockout', 'app/knockoutExG_vmodel', 'domReady!'],
  function(ko, vmdl) {
    ko.applyBindings(new vmdl());
  }
);