/*
 * アプリケーションの View Model.
 *
 * require から呼び出されるモジュールは
 * define([mod1, mod2], function(if1, if2) {
 *   return function ifObj() {
 *     var _name = "";
 *     this.getName = function()     { return _name; };
 *     this.setName = function(name) { _name = name; };
 *   };
 * }
 * と記述する。
 *
 * これは、AMD ((Asynchronous Module Definition) に準拠している
 * モジュール定義。 
 * 第一引数は、依存するライブラリ名。
 * 第二引数は、インタフェースオブジェクトを作成する処理で、引数は
 * 依存ライブラリのインタフェースオブジェクト。
 */
define(['knockout'], function(ko) {
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