# Introduction


## Endpoints

Base: `https://api.vektor-adv.com/api`

**Token**
| Method 	| Endpoint              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| POST   	| `/v1/connect/token`       	| [get access token](api/token.md#get-access-token)           |


**Orders**
| Method 	| Endpoint              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| POST   	| `/v1/orders`              	| [create order ](api/orders.md#create-order )           	|
| GET    	| `/v1/orders/`            	| [get orders ](api/orders.md#get-orders )               	|
| GET    	| `/v1/orders/{id}`        	| [get order details ](api/orders.md#get-order-details ) 	|
| GET    	| `/v1/orders/{id}/status` 	| [get order status ](api/orders.md#get-order-status )         	|

**Certificates**
| Method 	| Endpoint              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| GET    	| `/v1/certificates/`       	| [get certificates](api/certificates.md#get-certificates) |


**Balance**
| Method 	| Endpoint              	| Description                                              |
|--------	|-----------------------	|-----------------------------------------------------	   |
| GET    	| `/v1/balance/`       	    | [get current balance](api/balance.md#get-current-balance) |

