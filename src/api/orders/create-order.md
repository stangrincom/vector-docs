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