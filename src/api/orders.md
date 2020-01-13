# Orders

#### Order statuses:
* <b>Created</b>
* <b>Payed</b>
* <b>ReadyForDelivery</b>
* <b>PartiallyDelivered</b>
* <b>Delivered</b> - final status
* <b>Canceled</b> - final status

## Get orders

* <b>URL</b>: `/v1/orders`
* <b>Method</b>: `GET`
* <b>Headers:</b>
  - Authorization: Bearer [YOUR_ACCESS_TOKEN] `required`
  - Content-Type: application/json

#### Query parametrs
| Parametr | Type	|   Description                               	|
|--------	 | -----      | -----------------------------------------------------	|
| page   	 | integer |    The page number to be retrieved, for the list of items. So, a page=1 returns the first 20 orders. A page=2 returns the next 20 orders. |

#### Example
`/order?page=1`

### Response
<hr />

* <b>Status</b>: 200 OK
* <b>Type</b>: `json`

#### Body
| Field 	| Type              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| data   	| `array`    	      |  (contains the [ orders ](#order )   )  |
| totalPages   	| `int`       	      | The total number of pages that are available for the search criteria. Clients MUST NOT assume that the value of totalPages is constant. The value MAY change from one request to the next|
| currentPage   	| `int`       	      | - |
| pageSize   	| `int`       	      | The maximum number of orders to return in the response. This constant equals 20 |


##### Order
| Field 	| Type              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| id   	| `uuid`       	      | - |
| number   	| `int`       	      | - |
| createdDate   	| `DateTime`       	      | - |
| status   	|  `enum`     	      |  [ order statuses ](#order-statuses) |
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
* <b>URL</b>: `/v1/orders`
* <b>Method</b>: `POST`
* <b>Headers:</b>
  - Authorization: Bearer [YOUR_ACCESS_TOKEN] `required`
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


## Get order status
* <b>URL</b>: `/v1/orders/{order_id}/status`
* <b>Method</b>: `GET`
* <b>Headers:</b>
  - Authorization: Bearer [YOUR_ACCESS_TOKEN] `required`
  - Content-Type: application/json

  ### Path parameters

| Parametr 	| Type              	| Description                                         	|
|--------	  |--------------------	|-----------------------------------------------------	|
| order_id  | `uuid`       	      | The ID of the order for which to show status.         |


  ### Response
  * <b>Status:</b> 200 (OK)

#### example
   ````json
{
    "status": "Created",
}
 ````

 ## Get order details

 ::: tip coming soon
   
  14.01.2019

 :::