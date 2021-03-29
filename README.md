# API DOCS

#### User register:
```javascript
[POST] /api/users/register 
Body:                                     |            Response:
{                                         |            {
  "user_username": string,                |              "user_id": 1,
  "user_password": string,                |              "user_username": "user",
  "user_email": email                     |              "user_email": "user@user.com"
}                                         |            }
```
#### User login:
```javascript
[POST] /api/users/login
Body:                                     |            Response:
{                                         |            {
  "user_username": string,                |              "message": "Welcome user.",
  "user_password": string                 |              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}                                         |            }
```

