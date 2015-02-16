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
     * 登録ボタンクリック時の処理.
     */
    this.registerClick = function() {
      // View Model を Model に書き戻す
      mdl.firstName = this.firstName();
      mdl.lastName = this.lastName();
      // 登録処理 (本当はサーバーアクセス)
      console.log($);
      alert(JSON.stringify(mdl));
    };
    
    /**
     * 登録ボタンの有効化フラグ.
     */
    this.isEnableRegister = ko.computed(function() {
      return '' === this.firstName() || '' === this.lastName();
    }, this);
  };
});