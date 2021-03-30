# API DOCS / https://usemytechstuff.herokuapp.com

#### User register:
[POST] `/api/users/register`
```javascript
Body:                                     |            Response:
{                                         |            {
  "username": string,                |              "user_id": 1,
  "user_password": string,                |              "username": "user",
  "user_email": email                     |              "user_email": "user@user.com"
}                                         |            }
```
#### User login:
[POST] `/api/users/login`
```javascript
Body:                                     |            Response:
{                                         |            {
  "username": string,                |              "message": "Welcome user.",
  "user_password": string                 |              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}                                         |            }
```
#### All items:
[GET] `/api/items`
```javascript
Body:                                     |           Response:
                                          |           [
                                          |             {
                                          |               "item_id": 1,,
                                          |               "item_name": "item",
                                          |               "item_available": true,
                                          |               "item_price": "1.00",
                                          |               "item_owner": 'user name',
                                          |             }
                                          |           ]

```
#### One item:
[GET] `/api/items/:id`
```javascript
Body:                                     |           Response:
                                          |           {
                                          |             "item_id": 1,,
                                          |             "item_name": "item",
                                          |             "item_available": true,
                                          |             "item_price": "1.00",
                                          |             "item_owner": 'user name',
                                          |           }

```
