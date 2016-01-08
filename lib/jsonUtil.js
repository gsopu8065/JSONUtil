/**
 * Created by srujangopu on 12/23/15.
 */

var JSONUtil = function(){};

JSONUtil.prototype.json_getValues_of_key = function( input, target ) {
        var result = [];

        function parseData( input, target ) {

                if(Array.isArray(input)) {
                        input.forEach(function (obj) {
                                parseData(obj, target);
                        });
                }
                else if(typeof input == 'object'){

                        var keys = Object.keys(input);
                        keys.forEach(function(key){
                                var valueOFKey = input[key];
                                if(key == target)
                                  result.push(valueOFKey);
                                if((typeof valueOFKey == "object") || (Array.isArray(valueOFKey))){
                                        parseData(valueOFKey, target);
                                }
                        });
                }
        }

        if(input)
                parseData( input, target );

        return result;
};

JSONUtil.prototype.json_getKeys = function(input, nested){
        nested = nested || false;

        if(nested){
                var result = [];
                function parseData( input ) {

                        if(Array.isArray(input)) {
                                input.forEach(function (obj) {
                                        parseData(obj);
                                });
                        }
                        else if(typeof input == 'object'){

                                var keys = Object.keys(input);
                                keys.forEach(function(key){
                                        var valueOFKey = input[key];
                                        if((typeof valueOFKey == "object") || (Array.isArray(valueOFKey))){
                                                parseData(valueOFKey);
                                        }

                                        if(result.indexOf(key) == -1){
                                                result.push(key);
                                        }
                                });
                        }
                }
                if(input)
                        parseData( input );

                return result;
        }
        return Object.keys(input);
};

JSONUtil.prototype.json_array_length = function(input){
        input = input || [];
        return input.length;
};

JSONUtil.prototype.json_extract_path_text = function(input, path){
        path = path || [];
        path.forEach(function(pathElement){
             input = getData(input, pathElement);
        });

        function getData(input1, pathElement1){
                return input1[pathElement1];
        }
        return input;
};

JSONUtil.prototype.json_find_keyvalue_pair = function(input, target){
        target = target || {};
        var keys = Object.keys(target) || [];
        var returnValue = true;
        keys.forEach(function(key){
           var value = target[key];
           var sourceValues = new JSONUtil().json_getValues_of_key(input,key);
           if(returnValue && (sourceValues.length == 0 || sourceValues.indexOf(value) == -1)){
             returnValue = false;
           }
        });
        return returnValue;
};

JSONUtil.prototype.json_concat_objects = function(object1, object2){

        return [object1,object2];
};

JSONUtil.prototype.json_remove_objects_from_array_using_key = function(input, object){

        input = input || [];
        var indexes = [];
        input.forEach(function(element,index){
                if(new JSONUtil().json_find_keyvalue_pair(element,object)){
                        indexes.push(index);
                }
        });
        indexes.forEach(function(index){
           input.slice(index,1);
        });
        return input;
};

JSONUtil.prototype.json_sort_array_using_key = function(input, field, reverse, type){

        reverse = reverse || false;
        var primer = function(a){return a.toUpperCase()};
        if(type == 1)
        {
                primer = parseInt;
        }
        if(type == 2)
        {
                primer = parseFloat;
        }
        var sort_by = function(field, reverse, primer){
                var key = function (x) {return primer ? primer(x[field]) : x[field]};

                return function (a,b) {
                        var A = key(a), B = key(b);
                        return ( (A < B) ? -1 : ((A > B) ? 1 : 0) ) * [-1,1][+!!reverse];
                }
        };
        input.sort(sort_by(field, reverse, primer));
        return input;
};

JSONUtil.prototype.json_array_reverse = function(object1){

        return object1.reverse();
};

module.exports = new JSONUtil();