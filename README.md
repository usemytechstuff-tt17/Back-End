# API

## Users:
[POST] /api/users/register 
```javascript
Body:
{ 
  "user_username": *string*,
  "user_password": *string*,
  "user_email": *email*
}
```
```javascript
Response:
{
  "user_id": 1,
  "user_username": "user",
  "user_email": "user@user.com"
}
```
