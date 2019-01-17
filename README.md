# marketplace

## API reference

### Get Product Details by Title

#### Request Parameter
title: required

#### Sample Request
http://localhost:8080/fetch/title/phone

### Get All Product Details

#### Request Parameter
available_only: optional

#### Sample Requests
- http://localhost:8080/fetch_all
- http://localhost:8080/fetch_all/true

### Purchase Product
Reduce the product inventory by 1. Products with no inventory return a message.

#### Request Parameter
title: required

#### Sample Request

http://localhost:8080/purchase/title/phone

#### Expected Responses
1. "No product was found with title phone": if phone is not a product in the database
1. "No available inventory for the product with title phone" : if phone's inventory count is 0
1. "Purchase succesful": if purchase was succesful
