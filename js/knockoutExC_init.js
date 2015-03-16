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
   'validationEngine' : 'jquery-Validation-Engine-2.6.2/jquery.validationEngine',
   'validation' : 'jquery-Validation-Engine-2.6.2/languages/jquery.validationEngine-ja'
  },

  // AMDに対応してないモジュールを読み込む
  shim: {
    'validationEngine' : ['jquery', 'validation'],
    'validation' : ['jquery'],    
  }
});

require(['knockout', 'app/knockoutExC_vmodel', 'jquery', 'validation', 'validationEngine', 'domReady!'],
  function(ko, vmdl, $) {
    ko.applyBindings(new vmdl());
    
    $('#myForm').validationEngine('attach');
  }
);