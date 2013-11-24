var html =
    '<p>Redis is an open source, BSD licensed, advanced <strong>key-value store</strong>. It' +
    ' is often referred to as a <strong>data structure server</strong> since' +
    ' keys can contain <a href="/topics/data-types#strings">strings</a>,</p>';

describe('Search suite', function() {
    var textAt = StringUtils.textAt;

    it('should find first text node within html', function() {
        expect(textAt(html, 0)).toEqual('Redis is an open source, BSD licensed, advanced ');
    });

    it('should find second text node within html', function() {
        expect(textAt(html, 1)).toEqual('key-value store');
    });

    it('should not find text node within html index out of bound', function() {
        expect(textAt(html, -1)).toBeUndefined();
    });

    it('should not find text node within html index out of bound', function() {
        expect(textAt(html, 100)).toBeUndefined();
    });

    it('should not find text node within empty string', function() {
        expect(textAt('', 0)).toBeUndefined();
    });
});

describe('Replace suite', function() {
    var replaceAt = StringUtils.replaceAt;

    it('should replace first text node within html', function() {
        expect(replaceAt(html, 0, "RPG")).toMatch(/<p>RPG<strong>/);
    });

    it('should replace second text node within html', function() {
        expect(replaceAt(html, 1, "KVS")).toMatch(/<strong>KVS<\/strong>/);
    });

    it('should not replace text node within index out of bound', function() {
        expect(replaceAt(html, -1, "KVS")).toEqual(html);
    });

    it('should not replace text node within index out of bound', function() {
        expect(replaceAt(html, 100, "KVS")).toEqual(html);
    });

    it('should not replace text node within empty string', function() {
        expect(replaceAt('', 0, "KVS")).toEqual('');
    });
});