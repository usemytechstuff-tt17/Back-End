# API DOCS

#### User register:
[POST] /api/users/register 
```javascript
Body:                                     |            Response:
{                                         |            {
  "user_username": string,                |              "user_id": 1,
  "user_password": string,                |              "user_username": "user",
  "user_email": email                     |              "user_email": "user@user.com"
}                                         |            }
```
#### User login:
[POST] /api/users/login
```javascript
Body:                                     |            Response:
{                                         |            {
  "user_username": string,                |              "message": "Welcome user.",
  "user_password": string                 |              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}                                         |            }
```

