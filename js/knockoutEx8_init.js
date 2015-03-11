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
    
    // jQuery UI Auto complete
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#txtValue1" ).autocomplete({
      source: availableTags
    });    
    $( "#txtValue2" ).autocomplete({
      source: availableTags
    });    
    $( "#txtValue3" ).autocomplete({
      source: availableTags
    });    
    $( "#txtValue4" ).autocomplete({
      source: availableTags
    });    
    
  }
);