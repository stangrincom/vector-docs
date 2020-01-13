# Balance

## Get current balance
* <b>URL</b>: `/v1/balance`
* <b>Method</b>: `GET`
* <b>Headers:</b>
  - Authorization: Bearer [YOUR_ACCESS_TOKEN] `required`
  - Content-Type: application/json

  ### Response
  * <b>Status:</b> 200 (OK)

#### example
   ````json
{
    "balance": "100500",
}
 ````