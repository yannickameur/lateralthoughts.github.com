define(['jquery', 'text!tpl/common/header.tpl'], function($, headerContents) {
   return {
       update : function($body) {
           $body.prepend(headerContents);
       }
   }
});