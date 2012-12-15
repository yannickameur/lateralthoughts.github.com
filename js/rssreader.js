$.Mustache.add('rssshort', '<ul>'+
                            '{{#entries}}'+
                            '<li><a href="{{link}}" target="_blank">{{title}}</a><p>{{contentSnippet}}</p> </li>'+
                            '{{/entries}}'+
                            '</ul>');


$.Mustache.add('rssfull', '<ul>'+
                            '{{#entries}}'+
                            '<li><a href="{{link}}" target="_blank">{{title}}</a><p>{{contentSnippet}}</p> </li>'+
                            '{{/entries}}'+
                            '</ul>');


var rssReader = {
    containers : null,

    // initialization function
    init : function(selector) {
        $(selector).each(function() {
            var rssUrl = $(this).attr('rss_url');
            var num = $(this).attr('rss_num');
            var id = $(this).attr('id');

            // creating temp scripts which will help us to transform XML (RSS) to JSON
            var url = encodeURIComponent(rssUrl);
            var googUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num='+num+'&q='+url+'&callback=rssReader.parse&context='+id;

            var script = document.createElement('script');
            script.setAttribute('type','text/javascript');
            script.setAttribute('charset','utf-8');
            script.setAttribute('src',googUrl);
            $(selector).append(script);
        });
    },

    // parsing of results by google
    parse : function(context, data) {
        var entries = data.feed.entries;
        $('#'+context).empty().mustache('rssshort', {'entries':entries});
    }
};

$(document).ready (function() {
    rssReader.init('.post_results');
});
