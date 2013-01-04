define(['jquery',
    'text!tpl/common/head-meta.tpl',
    'text!tpl/common/head-style.tpl',
    'text!tpl/common/head-script.tpl'], function($, meta, style, script) {
    return {
        update: function($head) {
            $head.append(meta, style, script);
        }
    }
});