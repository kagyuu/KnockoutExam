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
   // jQuery 1.7～, Query UI 1.11～ は AMD に対応
   'jquery'   : 'jquery-ui-1.11.3/external/jquery/jquery',
   'jqueryui' : 'jquery-ui-1.11.3/jquery-ui.min',
  },

  // AMDに対応してないモジュールを読み込む
  shim: {
  }
});

require(['knockout', 'app/knockoutEx8_vmodel', 'jquery', 'jqueryui', 'domReady!'],
  function(ko, vmdl, $) {
    ko.applyBindings(new vmdl());
    
	$( "#dialog" ).dialog({ autoOpen: false, width: 400 });
	$( "#dialog2" ).dialog({ autoOpen: false, width: 400 });
  }
  
);