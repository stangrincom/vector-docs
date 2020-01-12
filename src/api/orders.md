# Orders

#### Order statuses:
* <b>Created</b>
* <b>Payed</b>
* <b>ReadyForDelivery</b>
* <b>PartiallyDelivered</b>
* <b>Delivered</b> - final status
* <b>Canceled</b> - final status

## Get orders

* <b>URL</b>: `/orders`
* <b>Method</b>: `GET`
* <b>Headers:</b>
  - Authorization: Bearer [YOUR_ACCESS_TOKEN]
  - Content-Type: application/json

#### Query parametrs
| Parametr 	|   Description                                         	|
|--------	  | -----------------------------------------------------	|
| page   	  |    Sets the current page of the list of orders, the maximum number on the page is 20 orders. The default page is 1 |

#### Example
`/order?page=1`

### Response
<hr />

* <b>Status</b>: 200 OK
* <b>Type</b>: `json`

#### Body
| Field 	| Type              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| data   	| `array`   [ orders ](#order )       	      | - |
| totalPages   	| `int`       	      | - |
| currentPage   	| `int`       	      | - |
| pageSize   	| `int`       	      | - |


##### Order
| Field 	| Type              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| id   	| `uuid`       	      | your acceess token |
| number   	| `int`       	      | time live token in second |
| createdDate   	| `DateTime`       	      | - |
| status   	| `string`       	      |  [ order statuses ](#order-statuses) |
| customerEmail   	| `string`       	      | - |
| total   	| `decimal`       	      | - |

##### Example:

```json
{
  "data": [
    {
      "id": "ef4eb23e-1cf0-4cbe-82c6-c118e5605042",
      "number": 3048,
      "createdDate": "2020-01-11T16:13:56.814239",
      "status": "Created",
      "customerEmail": "sss@ss.ss",
      "total": 2200
    },
    {
      "id": "ef4eb23e-1cf0-4cbe-82c6-c118e5605041",
      "number": 3047,
      "createdDate": "2020-01-11T15:58:05.816375",
      "status": "Created",
      "customerEmail": "sss@ss.ss",
      "total": 0
    }
  ],
  "totalPages": 1,
  "currentPage": 1,
  "pageSize": 20
}
```







## Create order
* <b>URL</b>: `/orders`
* <b>Method</b>: `POST`
* <b>Headers:</b>
  - Authorization: Bearer [YOUR_ACCESS_TOKEN]
  - Content-Type: application/json

#### Body
| Field 	| Type              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| orderId   	| `uuid`       	      |  Required. Generate on client side
| customer   	| `object`  [ Customer ](#customer )       	      | - |
| certificates   	| `array`     [ Certificate ](#certificate )     	      | - |

##### Customer
| Field 	| Type              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| customer.email   	| `string`       	      | Required |
| customer.name   	| `string`       	      |  - |
| customer.phone   	| `string`       	      | - |

##### Certificate
| Field 	| Type              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| id   	| `uuid`       	      | - |
| quantity   	| `int`       	      | - |



 ##### Example:
 ````json
{
    "orderId": "B5AA69DF-61A5-4D97-B1FB-4F6772DFBBEB",
    "customer": {
        "email": "test@test.test",
        "phone": "79251153242",         
        "name": "John Doe",
    },
    "certificates": [
        {
            "id": "A25714EA-F9E6-4D53-94FC-6F9D0587BB9D",
            "quantity": 1
        },
        {
            "id": "53AF1480-1D33-41CA-A08E-0BDC4BD318D6",
            "quantity": 1
        }
    ]
}
 ````

  ### Response
  * <b>Status:</b> 200 (OK)

<!-- # Orders

### Request
 <b>Url:</b> https://api.vektor-adv.com/api/orders <br>
 <b>Method:</b> POST <br>
 <b>Type:</b> JSON <br>
  <b>Headers:</b>
  - Authorization: Bearer [YOUR_ACCESS_TOKEN]
  - Content-Type: application/json
  ##### BODY:
  - <b>orderId</b> <small>(uuid, required)</small> - generate client side
  - <b>customer</b> <small>(object, required)</small>
    - <b>customer.email</b> <small>(string, required)</small>
    - <b>customer.name</b> <small>(string)</small>
    - <b>customer.phone</b> <small>(string)</small>
  - <b>certificates</b> <small>(array, required)</small>
    - <b>certificates[0].id</b> <small>(uuid, required)</small> - get from <i>Get certificates</i>
    - <b>certificates[0].quantity</b> <small>(int,required)</small>
 
 ##### Example:
 ````json
{
    "orderId": "B5AA69DF-61A5-4D97-B1FB-4F6772DFBBEB",
    "customer": {
        "email": "test@test.test",
        "phone": "79251153242",         
        "name": "John Doe",
    },
    "certificates": [
        {
            "id": "A25714EA-F9E6-4D53-94FC-6F9D0587BB9D",
            "quantity": 1
        },
        {
            "id": "53AF1480-1D33-41CA-A08E-0BDC4BD318D6",
            "quantity": 1
        }
    ]
}
 ````
 ### Response
 
   <b>Type:</b> json
   
   <b>Status:</b> 200 (OK)
 
 #### Errors
 
 <b>Status:</b> 400 (Bad request)
 ````json
{
  "message": "Invalid request",
  "status": 400,
  "errors": {
    "Customer.Email": [
      "The Email field is required."
    ]
  }
}
 ````




 # Get orders

### Request
 <b>Url:</b> https://api.vektor-adv.com/api/orders <br>
 <b>Method:</b> POST <br>
 <b>Type:</b> JSON <br>
  <b>Headers:</b>
  - Authorization: Bearer [YOUR_ACCESS_TOKEN]
  - Content-Type: application/json
  ##### BODY:
  - <b>orderId</b> <small>(uuid, required)</small> - generate client side
  - <b>customer</b> <small>(object, required)</small>
    - <b>customer.email</b> <small>(string, required)</small>
    - <b>customer.name</b> <small>(string)</small>
    - <b>customer.phone</b> <small>(string)</small>
  - <b>certificates</b> <small>(array, required)</small>
    - <b>certificates[0].id</b> <small>(uuid, required)</small> - get from <i>Get certificates</i>
    - <b>certificates[0].quantity</b> <small>(int,required)</small>
 
 ##### Example:
 ````
{
    "orderId": "B5AA69DF-61A5-4D97-B1FB-4F6772DFBBEB",
    "customer": {
        "email": "test@test.test",
        "phone": "79251153242",         
        "name": "John Doe",
    },
    "certificates": [
        {
            "id": "A25714EA-F9E6-4D53-94FC-6F9D0587BB9D",
            "quantity": 1
        },
        {
            "id": "53AF1480-1D33-41CA-A08E-0BDC4BD318D6",
            "quantity": 1
        }
    ]
}
 ````
 ### Response
 
   <b>Type:</b> json
   
   <b>Status:</b> 200 (OK)
 
 #### Errors
 
 <b>Status:</b> 400 (Bad request)
 ````
{
  "message": "Invalid request",
  "status": 400,
  "errors": {
    "Customer.Email": [
      "The Email field is required."
    ]
  }
}
 ```` -->