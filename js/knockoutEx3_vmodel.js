/*
 * アプリケーションの View Model.
 */
define(['knockout', 'jquery'], function(ko, $) {
  return function appViewModel(mdl) {
    this.firstName = ko.observable(mdl.firstName);
    this.lastName = ko.observable(mdl.lastName);
    
    /**
     * フルネーム.
     */
    this.fullName = ko.computed(function() {
      return this.firstName() + " " + this.lastName().toUpperCase();
    }, this);
    
    /**
     * 検索ボタンクリック時の処理.
     */
    this.registerClick = function() {
      // View Model を Model に書き戻す
      mdl.firstName = this.firstName();
      mdl.lastName = this.lastName();
      // 検索処理 (本当はサーバーアクセス)
      var data = pseudoAjax(mdl);
      var tbl = $("#myTbl");
      tbl
        .jqGrid('clearGridData')
        .jqGrid('setGridParam', { data: data })
        .trigger('reloadGrid', [{ page: 1}]);
    };
    
    /**
     * 登録ボタンの有効化フラグ.
     */
    this.isEnableRegister = ko.computed(function() {
      return '' === this.firstName() || '' === this.lastName();
    }, this);
  };
});

var STATES = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado"
,"Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois"
,"Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland"
,"Massachusetts","Michigan","Minnesota","Mississippi","Missouri"
,"Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico"
,"New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon"
,"Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee"
,"Texas","Utah","Vermont","Virginia","Washington","West Virginia"
,"Wisconsin","Wyoming"];

var CUSTOMER_CLASS = ["お得意様","優良","普通","要注意","不良"];

function pseudoAjax(mdl) {

  var resArray = new Array();
  
  var bornStart = new Date(1970,0,1).getTime();
  var now = new Date().getTime();
  var bornEnd = now;
  
  var size = 20 + Math.floor(Math.random() * 100);
  for (cnt = 0; cnt < size; cnt++) {
    var entry = new Object();
    entry.id = Math.floor(Math.random() * 10000);
    entry.firstName = mdl.firstName;
    entry.lastName = mdl.lastName;
    entry.address = STATES[Math.floor(Math.random() * STATES.length)];
    entry.born = bornStart + Math.floor(Math.random() * (bornEnd - bornStart));
    entry.age = Math.floor((now - entry.born) / (365*24*60*60*1000));
    entry.class = CUSTOMER_CLASS[Math.floor(Math.random() * CUSTOMER_CLASS.length)];
    
    resArray.push(entry);
  }
  
  return resArray;
}