/*
 * アプリケーションのコントローラ.
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

// インタフェースオブジェクトを返さないやつ(jqueryui, domReady)は、最後に読み込む
require(['knockout', 'app/knockoutEx2_vmodel', 'app/knockoutEx2_model', 'jquery', 'jqueryui', 'domReady!'],
  function(ko, vmdl, mdl, $) {
    // knockout.js
    ko.applyBindings(new vmdl(new mdl()));
    
    // jQuery UI の tooltip
    $('input').tooltip({
    items: '[title]',
    content: function() {
      var message = $(this).attr('title');
      return '<strong>' + message + '</strong><br/>よろしくお願いします';
    }    
    });
  }
);