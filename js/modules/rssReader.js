define(['jquery', 'mustache', 'modules/loader', 'moment.min'], function($, mustache, loader) {
    var compiledTemplates = {
            rssshort : null,
            rssfull : null
        },
        containers = null,
        replaceDate = function($element) {
            $element.find('.date').each(function() {
                var date = new Date($(this).html());
                var momentized = moment(date);
                $(this).html(momentized.fromNow());
            });
        };


    /* global ;/ */ rssParse = function(context, data) {
            var $element = $('#'+context),
                scriptName = $element.attr('rss_script') || 'short',
                template = compiledTemplates['rss'+scriptName];

            $element.html(template({'entries':data.feed.entries}));
            replaceDate($element);
            loader.stop();
        };

    return {
        init : function(selector, shortTemplate, fullTemplate) {
            var num = $.footer.rssEntriesCount;

            compiledTemplates.rssshort = mustache.compile(shortTemplate);
            compiledTemplates.rssfull = mustache.compile(fullTemplate);

            $(selector).each(function() {
                var id = $(this).attr('id'),
                    url = encodeURIComponent($(this).data('rss_url')),
                    googUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num='+num+'&q='+url+'&callback=rssParse&context='+id,
                    script = document.createElement('script');

                script.setAttribute('type','text/javascript');
                script.setAttribute('charset','utf-8');
                script.setAttribute('src',googUrl);
                $(selector).append(script);
            });
        }
    }
});