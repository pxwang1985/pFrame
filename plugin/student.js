
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.Student = factory();
    }
}(this, function () {
   return function (config) {
       'use strict';           
       var VERSION = "1.2.0";    
       var name = '';
       config = config || {};

       this.setName = function(val) {
        name = val;
    };
       
       this.getName = function() {
           return name;
       };
       
   }
}))