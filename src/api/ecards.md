# ECards

## Get ecards
* <b>URL</b>: `/v1/ecards`
* <b>Method</b>: `GET`
* <b>Headers:</b>
  - Authorization: Bearer [YOUR_ACCESS_TOKEN] `required`
  - Content-Type: application/json

### Response
<hr />

* <b>Status</b>: 200 OK
* <b>Type</b>: `json`

#### Response body
| Field 	  | Type              	    | Description                                         	|
|--------	  |-----------------------	|-----------------------------------------------------	|
| id      	| `int32`       	          | id ecard |
| name   	| `string`       	        | vendor name ecard |
| unit    	| `enum`       	          | nominal unit (ruble, month) |
| faceValues   	|  `obj`     	        |  (contains the [ face value ](#FaceValue )   ) |


##### FaceValue
| Field 	| Type              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| name   	| `string`       	      | name face value (Example:1000 ₽, 1 мес. ) |
| price   	| `int32`       	      | face value price |

#### Example
 ````json
[
  {
    "id": "1",
    "name": "Хофф",
    "description": "description",
    "faceValues": {
      "name": "1000 ₽",
      "price": 1100
    }
  
  },
  {
    "id": "2",
    "name": "Л'Этуаль",
    "description": "description",
    "faceValues": {
      "name": "500 ₽",
      "price": 500
    }
  }
]
````

<!-- # Certificates

### Request
 <b>Url:</b> `/v1/certificates` <br>
 <b>Method:</b> GET <br>
 <b>Type:</b> JSON <br>
 <b>Headers:</b>
   - Authorization: Bearer [YOUR_ACCESS_TOKEN]
### Response
  ##### BODY:
  - <b>id</b> <small>(uuid)</small>
  - <b>vendor</b> <small>(string)</small>
  - <b>unit</b> <small>(string)</small> - nominal unit (ruble, month)
  - <b>value</b> <small>(decimal)</small> - nominal value
  - <b>price</b> <small>(decimal)</small>
 ````json
[
  {
    "id": "1C730E2D-2323-46B7-8204-DDC7200B4976",
    "vendor": "Хофф",
    "unit": "rub",
    "value": 1000,
    "price": 1100
  },
  {
    "id": "0B6D23C8-9019-41DA-A34D-1A12B038742D",
    "vendor": "Л'Этуаль",
    "unit": "month",
    "value": 1,
    "price": 500
  }
]
```` -->