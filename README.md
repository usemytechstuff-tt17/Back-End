# API

## Users:
[POST] /api/users/register 
```javascript
Body:                                     |  Response:
{                                         |  {
  "user_username": *string*,              |   "user_id": 1,
  "user_password": *string*,              |   "user_username": "user",
  "user_email": *email*                   |   "user_email": "user@user.com"
}                                         |  }
```

