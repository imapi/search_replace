var StringUtils = (function () {
    'use strict';

    var textNodeAt = function (source, index) {
        var div = document.createElement('div');
        div.innerHTML = source;

        var result = {};
        var process = function (nodes, accu) {
            for (var i = 0; index > -1 && i < nodes.length; i++) {
                var node = nodes[i];
                if (3 === node.nodeType) accu.push(node);

                if (accu.length - 1 === index) result = accu[index];
                else if (nodes[i].hasChildNodes() && 'SCRIPT' !== node.nodeName) process(node.childNodes, accu);
            }
        };
        process(div.childNodes, []);

        return {parent: div, found: result};
    };

    return {
        textAt: function (source, index) {
            return textNodeAt(source, index).found.nodeValue;
        },

        replaceAt: function (source, index, withText) {
            var pair = textNodeAt(source, index);
            pair.found.nodeValue = withText;
            return pair.parent.innerHTML;
        }
    };
}());