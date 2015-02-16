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
   'jqgrid'   : 'jquery-grid-4.7.1/jquery.jqGrid.min',
   'jqgrid-locale' : 'jquery-grid-4.7.1/i18n/grid.locale-ja'
  },

  // AMDに対応してないモジュールを読み込む
  shim: {
    'jqgrid'  : ['jquery','jqueryui'],
    'jqgrid-locale'  : ['jqgrid']
  }
});

require(['knockout'
  , 'app/knockoutEx3_vmodel'
  , 'app/knockoutEx3_model'
  , 'jquery', 'jqueryui', 'jqgrid', 'jqgrid-locale', 'domReady!'],
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
    
    var tbl = $("#myTbl");
    tbl.jqGrid({
        data: [],
        datatype: "local",
        colNames: ['顧客番号','名','姓','住所','出生日','年齢','顧客区分'],
        colModel: [
            { name: 'id'        , index: 'id'           , width:  40 , align: 'center', classes: 'tbl_id_class'},
            { name: 'firstName' , index: 'firstName'    , width:  50 , align: 'center', classes: 'tbl_txt_class'},
            { name: 'lastName'  , index: 'lastName'     , width:  50 , align: 'center', classes: 'tbl_txt_class'},
            { name: 'address'   , index: 'address'      , width: 100 , align: 'center', classes: 'tbl_txt_class'},
            { name: 'born'      , index: 'born'         , width:  50 , align: 'center', classes: 'tbl_txt_class',
                formatter: function (cellValue, option) {
                    if (!cellValue) {
                        return "-";
                    }
                    var date = new Date(cellValue);
                    return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";
                }
            },
            { name: 'age'   , index: 'age'   , width: 40, align: 'right' , classes: 'tbl_num_class'},
            { name: 'class' , index: 'class' , width: 40, align: 'right' , classes: 'tbl_txt_class'},
        ],
        rowNum: 10, // デフォルトの 行/ページ
        rowList: [10, 20, 50], // 行/ページ セレクトボックスの候補
        caption: "Orders", // 表タイトル
        height: 250,
        width: 700,
        shrinkToFit: true, // 画面サイズに合わせて表の大きさを変える
        pager: 'myPager',  // Pager の id
        viewrecords: true, // 行数を pager の右下に表示する。
        multiselect: true, // 左側にチェックボックスを作成
    });
  }
);