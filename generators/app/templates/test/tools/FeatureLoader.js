/**
 *  Feature loader
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

var loader = function(Feature) {
    var feature = new Feature();
    feature.run();
    return feature;
};

export default loader;
