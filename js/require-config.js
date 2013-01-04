define(['jquery', 'modules/loader', 'bootstrap', 'modernizr-2.5.3.min'], function($, loader) {
    $.extend({
        footer : {
            rssEntriesCount : 5
        }
    });

    require.config({
        baseUrl : "/js",
        map : {
            '*' : {
                'text' : '/js/text.js',
                'tpl' : '/tpl'
            }
        },
        paths: {
            "Mustache": "/js/mustache"
        }
    });
});