# API DOCS / https://usemytechstuff.herokuapp.com

#### User register:
[POST] `/api/users/register`
```javascript
Body:                                     |            Response:
{                                         |            {
  "username": string,                     |              "user_id": 1,
  "password": string,                     |              "username": "user",
  "email": email                          |              "email": "user@user.com"
}                                         |            }
```
#### User login:
[POST] `/api/users/login`
```javascript
Body:                                     |            Response:
{                                         |            {
  "username": string,                     |              "message": "Welcome user.",
  "password": string                      |              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                                          |              "user_id": 0
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
                                          |               "item_description": "someDescription",
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
                                          |             "item_description": "someDescription",
                                          |             "item_available": true,
                                          |             "item_price": "1.00",
                                          |             "item_owner": 'user name',
                                          |           }

```
#### Connected user's items:
[GET] `/api/users/items`
```javascript
Body:                                     |           Response:
                                          |           [
                                          |             {
                                          |               "user_id": 1,
                                          |               "item_owner": 'username',
                                          |               "item_id": 1,
                                          |               "item_name": "item",
                                          |               "item_available": true,
                                          |               "item_price": "1.00",
                                          |               "item_owner": 'user name',
                                          |               "item_description": 'someDescription,
                                          |             }
                                          |           ]

```
[PUT] `/api/items/:item_id`
[POST] `/api/items`
[DELETE] `/api/items/:item_id`
