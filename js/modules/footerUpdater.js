define(['jquery',
    'modules/rssReader',
    'text!tpl/common/footer.tpl',
    'text!tpl/common/tweet.tpl',
    'text!tpl/common/rssShort.tpl',
    'text!tpl/common/rssFull.tpl',
    'twitter.min'], function($, rssReader, footerContents, tweetTemplate, shortRssTemplate, fullRssTemplate) {

    var retrieveTweets = function() {
        $(document).ready(function() {
            getTwitters('tweet', {
                id: 'lateraithoughts',
                count: 5,
                enableLinks: true,
                ignoreReplies: true,
                clearContents: true,
                template: tweetTemplate
            });
        });
    }

    return {
        update : function($body) {
            $body.append(footerContents);
            retrieveTweets();
            rssReader.init('.post_results', shortRssTemplate, fullRssTemplate);
        }
    }
});