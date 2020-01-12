

# Get access token

### Request
 <b>Url:</b> https://api.vektor-adv.com/connect/token <br>
 <b>Method:</b> POST <br>
 <b>Type:</b> form-data (!)not json
 
##### BODY:
-  <b>client_id</b> <small>(string, required)</small>  - your client id
-  <b>client_secret</b> <small>(string, required)</small>   - your client secret
-  <b>grant_type</b> <small>(string, required)</small>   = client_credentials

##### Example:
````
client_id: [your client id]
client_secret: [your client secret]
grant_type: client_credentials
````
### Response

  <b>Type:</b> json  
  
##### BODY:
- access_token  (string)
- expires_in (int)  - time live token in second
- token_type (string)  
- scope (string)

<b>Status:</b> 200 (OK)

##### Example:
````json
{
    "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IlJ2eURPZEF...",
    "expires_in": 3600,
    "token_type": "Bearer",
    "scope": "external-api"
}
````
 #### Errors:
<b>Status:</b> 400 (Bad request)
````json
{
    "error": "invalid_request"
}
````

# Create order

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

# Get certificates

### Request
 <b>Url:</b> https://api.vektor-adv.com/api/certificates <br>
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
````
