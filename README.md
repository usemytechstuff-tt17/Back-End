# API

## Users:
[POST] /api/users/register 
Body:
{ 
  "user_username": *string*,
  "user_password": *string*,
  "user_email": *email*
}
Response:
{
  "user_id": 5,
  "user_username": "user",
  "user_email": "user@user.com"
}
