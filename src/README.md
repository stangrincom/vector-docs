# Introduction

## Get Started

Before you can integrate , you must set up your development environment to get OAuth 2.0 client ID and secret credentials  live environments. You exchange these credentials for an access token that authorizes your REST API calls. 

You can get the client ID and secret credentials from the manager responsible for your company.
## Endpoints

 
 ::: tip Base endpoint for <b>test</b> environments
  `https://test-api.vektor-adv.com/api`
 :::

 ::: warning Base endpoint for <b>production</b> environments
  `https://api.vektor-adv.com/api`
 :::

**Token**
| Method 	| Endpoint              	| Description                                         	   |
|--------	|-----------------------	|-----------------------------------------------------     |
| POST   	| `/connect/token`       | [get access token](api/token.md#get-access-token)        |


**Orders**
| Method 	| Endpoint              	| Description                                         	    |
|--------	|-----------------------	|-----------------------------------------------------	    |
| POST   	| `/v1/orders`              | [create order ](api/orders.md#create-order )              |
| GET    	| `/v1/orders/`            	| [get orders ](api/orders.md#get-orders )                  |
| GET    	| `/v1/orders/{id}`        	| [get order details ](api/orders.md#get-order-details )    |
| GET    	| `/v1/orders/{id}/status` 	| [get order status ](api/orders.md#get-order-status )      |

**Certificates**
| Method 	| Endpoint              	| Description                                               |
|--------	|-----------------------	|-----------------------------------------------------	    |
| GET    	| `/v1/certificates/`       | [get certificates](api/certificates.md#get-certificates)  |


**Balance**
| Method 	| Endpoint              	| Description                                               |
|--------	|-----------------------	|-----------------------------------------------------	    |
| GET    	| `/v1/balance/`       	    | [get current balance](api/balance.md#get-current-balance) |

