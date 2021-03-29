# API DOCS / https://usemytechstuff.herokuapp.com

#### User register:
[POST] `/api/users/register`
```javascript
Body:                                     |            Response:
{                                         |            {
  "user_username": string,                |              "user_id": 1,
  "user_password": string,                |              "user_username": "user",
  "user_email": email                     |              "user_email": "user@user.com"
}                                         |            }
```
#### User login:
[POST] `/api/users/login`
```javascript
Body:                                     |            Response:
{                                         |            {
  "user_username": string,                |              "message": "Welcome user.",
  "user_password": string                 |              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}                                         |            }
```
#### All items:
[Get] `/api/items`
```javascript
Body:                                     |            Response:
                                          |            {
                                          |              "item_id": 1,,
                                          |              "item_name": "item",
                                          |              "item_available": true, //default to false
                                          |              "item_price": "1.00",
                                          |              "user_id": 1, //item owner
                                          |            }
```

