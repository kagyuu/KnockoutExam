/*
 * アプリケーションのイニシャライザ.
 */
require.config({

  // Javascript の Base Url
  baseUrl: 'js/lib',

  // ライブラリのパスの別名を定義する
  paths: {
   'app':      '../',
   'template' : '../../template',
   'knockout' : 'knockout-3.2.0',
  },

  // AMDに対応してないモジュールを読み込む
  shim: {
  }
});

require(['knockout', 'app/knockoutEx9_vmodel', 'template/color', 'text!template/color.html', 'domReady!'],
  function(ko, vmdl, colorMdl, colorView) {
	ko.components.register('color-slider', {
	    viewModel: colorMdl,
	    template: colorView
	});
    ko.applyBindings(new vmdl());
  }
);