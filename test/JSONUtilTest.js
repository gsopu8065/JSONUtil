/**
 * Created by srujangopu on 1/3/16.
 */

var assert = require('chai').assert;
var superagent = require('superagent');
var JSONUtil = require("../");

var testJson = require("./testjson.json")
describe('JSONUtil Testing', function() {

    it('Testing json_getValues_of_key ', function() {
        var result = JSONUtil.json_getValues_of_key(testJson,"formatted_address");
        assert.equal(result.length, 18);
    });

    it('Testing json_getAllKeys nestedKey false', function() {
        var result = JSONUtil.json_getKeys(testJson,false);
        assert.equal(result.length, 2);
    });

    it('Testing json_getAllKeys nestedKey true', function() {
        var result = JSONUtil.json_getKeys(testJson,true);
        assert.equal(result.length, 18);
    });

    it('Testing json_array_length', function() {
        var result = JSONUtil.json_array_length(testJson.results);
        assert.equal(result, 18);
    });

    it('Testing json_extract_path_text', function() {
        var result = JSONUtil.json_extract_path_text(testJson, ["results","0" ,"address_components", "0", "long_name"]);
        assert.equal(result, 1016);
    });

    it('Testing json_find_keyvalue_pair', function() {
        var result = JSONUtil.json_find_keyvalue_pair(testJson, {"lat": 42.6076245, "lng": -76.92065099999999});
        assert.equal(result, true);
    });

    it('Testing json_concat_objects', function() {
        var result = JSONUtil.json_concat_objects({"lat": "42.6076245"}, {"lng": "-76.92065099999999"});
        assert.equal(result.length,2);
    });

    it('Testing json_remove_objects_from_array_using_key', function() {
        var count = JSONUtil.json_find_keyvalue_pair(testJson.results,{"formatted_address": "1016 N Plum Point Rd, Himrod, NY 14842, USA"});
        assert.equal(count,1);
        var result = JSONUtil.json_remove_objects_from_array_using_key(testJson.results, {"formatted_address": "1016 N Plum Point Rd, Himrod, NY 14842, USA"});
        count = JSONUtil.json_find_keyvalue_pair(result.results,{"formatted_address": "1016 N Plum Point Rd, Himrod, NY 14842, USA"});
        assert.equal(count,0);
    });

    it('Testing json_sort_array_using_key', function() {
        var homes = [{
            "id": "3",
            "city": "Dallas",
            "price": "162500"
        }, {
            "id": "4",
            "city": "Bevery Hills",
            "price": "319250"
        }, {
            "id": "5",
            "city": "New York",
            "price": "962500"
        }];
        var sort_dec_by_id = JSONUtil.json_sort_array_using_key(homes,'id',false,1);
        assert.equal(sort_dec_by_id[0]['id'],5);

        var sort_asc_by_city = JSONUtil.json_sort_array_using_key(sort_dec_by_id,'city',true,0);
        assert.equal(sort_dec_by_id[0]['city'],'Bevery Hills');

        var sort_asc_by_price = JSONUtil.json_sort_array_using_key(sort_asc_by_city,'price',true,2);
        assert.equal(sort_asc_by_price[0]['price'],'162500');

    });

    it('Testing json_array_reverse', function() {
        var result = JSONUtil.json_array_reverse(testJson.results);
        assert.equal(result[0]['formatted_address'],'1016 N Plum Point Rd, Himrod, NY 14842, USA');
    });

});
