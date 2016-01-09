# JSONUtil

This utilities are useful to perform operations of JSON objects. The installation and usage is shown below.

#### Installation
```bash
npm install -g jsonutilities
```
#### Basic Object Initialization 
```bash
var JSONUtil = require("jsonutilities");
```

#### JSONUtil Functions
###### All JSON Util function examples are shown based on following JSON Object. Let assume variable 'testJson' have a following value.
```bash
{
  "results": [
    {
      "address_components": [
        {
          "long_name": "1016",
          "short_name": "1016",
          "types": [
            "street_number"
          ]
        }
      ],
      "formatted_address": "1016 N Plum Ave, Inman, KS 67546, USA",
      "place_id": "EiUxMDE2IE4gUGx1bSBBdmUsIElubWFuLCBLUyA2NzU0NiwgVVNB",
      "types": [
        "street_address"
      ]
    },
    {
      "address_components": [
        {
          "long_name": "1016",
          "short_name": "1016",
          "types": [
            "street_number"
          ]
        }
      ],
      "formatted_address": "1016 N Plum St, Hutchinson, KS 67501, USA",
      "place_id": "EikxMDE2IE4gUGx1bSBTdCwgSHV0Y2hpbnNvbiwgS1MgNjc1MDEsIFVTQQ",
      "types": [
        "street_address"
      ]
    },
    {
      "address_components": [
        {
          "long_name": "1016",
          "short_name": "1016",
          "types": [
            "street_number"
          ]
        }
      ],
      "formatted_address": "1016 N Plum St, Springfield, OH 45504, USA",
      "place_id": "EioxMDE2IE4gUGx1bSBTdCwgU3ByaW5nZmllbGQsIE9IIDQ1NTA0LCBVU0E",
      "types": [
        "street_address"
      ]
    },
    {
      "address_components": [
        {
          "long_name": "1016",
          "short_name": "1016",
          "types": [
            "street_number"
          ]
        }
      ],
      "formatted_address": "1016 N Plum Point Rd, Himrod, NY 14842, USA",
      "place_id": "EisxMDE2IE4gUGx1bSBQb2ludCBSZCwgSGltcm9kLCBOWSAxNDg0MiwgVVNB",
      "types": [
        "street_address"
      ]
    }
  ],
  "status": "OK"
}
```
###### 1. json_getValues_of_key
This function is useful to get all values of key. This function will go through the complete json object and finds all values of given key.
```bash
var result = JSONUtil.json_getValues_of_key(testJson,"formatted_address");
result = [
 "1016 N Plum Ave, Inman, KS 67546, USA",
 "1016 N Plum St, Hutchinson, KS 67501, USA",
 "1016 N Plum St, Springfield, OH 45504, USA",
 "1016 N Plum Point Rd, Himrod, NY 14842, USA"]
```
###### 2. json_getKeys
This function is useful to get all values of key. This function will go through the complete json object and finds all values of given key.
```bash
var result = JSONUtil.json_getKeys(testJson,true|false);
true - It will go through the complete object including nested objects
false - It doesn't go through nested object.

 var result = JSONUtil.json_getKeys(testJson,false);
 result = ["results","status"]
 
 var result = JSONUtil.json_getKeys(testJson,true);
 result=[
 "long_name"
"short_name"
"types"
"address_components"
"formatted_address"
"place_id"
"results"
"status"];
```
###### 3. json_array_length
This function is useful to get the length of an array.
```bash
var result = JSONUtil.json_array_length(testJson.results);
result = 4
```
###### 4. json_extract_path_text
This function gets the value of given path.
```bash
var result = JSONUtil.json_extract_path_text(testJson, ["results","0" ,"address_components", "0", "long_name"]);
result = 1016
```
###### 5. json_find_keyvalue_pair
This function finds whether the given target object is available in input or not.
```bash
var result = JSONUtil.json_find_keyvalue_pair(testJson, {"long_name": "1016", "short_name": "1016"});
result = true
```
###### 6. json_concat_objects
This function concatenates json objects.
```bash
JSONUtil.json_concat_objects(jsonObject1, jsonObject2);
```
###### 7. json_remove_objects_from_array_using_key
This function remove all objects having the key/value pair in json array..
```bash
JSONUtil.json_remove_objects_from_array_using_key(testJson.results, {"formatted_address": "1016 N Plum Point Rd, Himrod, NY 14842, USA"});
```
###### 8. json_sort_array_using_key
This function sorts array in asc/dec using given key.
```bash
JSONUtil.json_sort_array_using_key(jsonArray, key, reverse, keyType);
reverse - false for Ascending order.
          true for Decending order.
keyType - 0 for key type is string
          1 for key type is integer
          2 for key type is float/double

ex: 
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
var sort_asc_by_city = JSONUtil.json_sort_array_using_key(sort_dec_by_id,'city',true,0);
```
###### 9. json_array_reverse
This function reverse the objects in json array.
```bash
JSONUtil.json_array_reverse(jsonArray);
```
