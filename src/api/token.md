# Access token

## Get access token

### Request
<hr />

* <b>url</b>: `/connect/token`
* <b>method</b>: `POST`
* <b>type</b>: `form-data`

#### Body
| Field 	| Type              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| client_id   	| `string`       	      | your client id |
| client_secret   	| `string`       	      | your client secret |
| grant_type   	| `string`       	      | must be `client_credentials` |

#### Example:
````html
client_id: [your client id]
client_secret: [your client secret]
grant_type: client_credentials
````

### Response
<hr />

* <b>status</b>: 200 OK
* <b>type</b>: `json`

#### Body
| Field 	| Type              	| Description                                         	|
|--------	|-----------------------	|-----------------------------------------------------	|
| access_token   	| `string`       	      | your acceess token |
| expires_in   	| `number`       	      | time live token in second |
| token_type   	| `string`       	      | - |
| scope   	| `string`       	      | - |

##### Example:
````json
{
    "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IlJ2eURPZEF...",
    "expires_in": 3600,
    "token_type": "Bearer",
    "scope": "external-api"
}
````

### Errors
<hr />

* <b>status</b>: 400 Bad request
* <b>type</b>: `json`
##### Example:
````json
{
    "error": "invalid_request"
}
```` 


<!-- ### Request
 <b>Url:</b> `https://api.vektor-adv.com/connect/token` <br>
 <b>Method:</b> POST <br>
 <b>Type:</b> form-data
 
::: warning Note
When you publish your theme as an npm package, if you don’t have any theme configuration, that means you don’t have `theme/index.js`, you’ll need to set the `"main"` field  to `layouts/Layout.vue` in `package.json`, only in this way VuePress can properly resolve the theme.
:::

#### BODY:
-  <b>client_id</b> <small>(string, required)</small>  - your client id
-  <b>client_secret</b> <small>(string, required)</small>   - your client secret
-  <b>grant_type</b> <small>(string, required)</small>   = client_credentials

##### Example:

````html
client_id: [your client id]
client_secret: [your client secret]
grant_type: client_credentials
````

## Response

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
```` -->