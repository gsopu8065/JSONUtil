# JSONUtil

This utilities are useful to perform operations of JSON objects. The installation and usage is shown below.

#### Installation
```bash
npm install -g JSONUtil
```
#### Basic Object Initialization 
```bash
var JSONUtil = require("JSONUtil");
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
This Function is useful to get all values of key. This function will go through the complete json object and finds all values of given key.
```bash
var result = JSONUtil.json_getValues_of_key(testJson,"formatted_address");
result = [
 "1016 N Plum Ave, Inman, KS 67546, USA",
 "1016 N Plum St, Hutchinson, KS 67501, USA",
 "1016 N Plum St, Springfield, OH 45504, USA",
 "1016 N Plum Point Rd, Himrod, NY 14842, USA"]
```
