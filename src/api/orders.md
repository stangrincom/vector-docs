# Orders

#### Order statuses:
* <b>Created</b>
* <b>Payed</b>
* <b>ReadyForDelivery</b>
* <b>PartiallyDelivered</b>
* <b>AwaitingCertificateAssignment</b>
* <b>Delivered</b> - final status
* <b>Cancelled</b> - final status

## Get orders

* <b>URL</b>: `/v1/orders`
* <b>Method</b>: `GET`
* <b>Headers:</b>
  - Authorization: Bearer [YOUR_ACCESS_TOKEN] `required`
  - Content-Type: application/json

#### Query parametrs
| Parametr | Type	|   Description                               	|
|--------	 | -----      | -----------------------------------------------------	|
| page   	 | `int32`  |    The page number to be retrieved, for the list of items. So, a page=1 returns the first 20 orders. A page=2 returns the next 20 orders. |

#### Example
`/order?page=1`

### Response
<hr />

* <b>Status</b>: 200 OK
* <b>Type</b>: `json`

#### Body
| Field 	| Type              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| orders   	| `array`    	      |  (contains the [ orders ](#order )   )  |
| totalPages   	| `int32`       	      | The total number of pages that are available for the search criteria. Clients MUST NOT assume that the value of totalPages is constant. The value MAY change from one request to the next|
| currentPage   	| `int32`       	      | - |
| pageSize   	| `int32`       	      | The maximum number of orders to return in the response. This constant equals 20 |


##### Order
| Field 	| Type              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| id   	| `uuid`       	      | - |
| number   	| `int32`       	      | - |
| createdDate   	| `DateTime`       	      | - |
| status   	|  `enum`     	      |  [ order statuses ](#order-statuses) |
| participantLogin   	| `string`       	      | - |
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
      "participantLogin": "sss@ss.ss_company",
      "total": 2200
    },
    {
      "id": "ef4eb23e-1cf0-4cbe-82c6-c118e5605041",
      "number": 3047,
      "createdDate": "2020-01-11T15:58:05.816375",
      "status": "Created",
      "participantLogin": "sss@ss.ss_company",
      "total": 1000
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
| participant   	| `object`  [ Participant ](#participant )       	      | Required. |
| ecards   	| `array`     [ ECard ](#ecard )     	      | Required. |

##### Participant
| Field 	| Type              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| participant.email   	| `string`       	      | Required |
| participant.name   	| `string`       	      |  Required |
| participant.phone   	| `string`       	      | Required |

##### ECard
| Field 	| Type              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| id   	| `int32`       	      | Required |
| quantity   	| `int32`       	      | Required|
| faceValue   	| `string`       	      | Required|


 ##### Example:
 ````json
{
    "orderId": "B5AA69DF-61A5-4D97-B1FB-4F6772DFBBEB",
    "participant": {
        "email": "test@test.test",
        "phone": "79251153242",         
        "name": "John Doe"
    },
    "ecards": [
        {
            "id": "1",
            "quantity": 1,
            "faceValue": "100 ₽"
        },
        {
            "id": "2",
            "quantity": 4,
            "faceValue": "500 ₽"
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
   

 :::