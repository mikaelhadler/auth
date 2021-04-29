# login-flow

```
account -> authentication -> session
```

## javascript sample

## account

permitted activities:
`get | update | create | cancel`

```javascript
{
  "name": "Leanne Graham", // confidential data
  "username": "Bret",  // confidential data
  "email": "Sincere@april.biz",  // confidential data
  "phone": "1-770-736-8031 x56442",  // confidential data
  "address": {
    "street": "Kulas Light",  // confidential data
    "suite": "Apt. 556",  // confidential data
    "city": "Gwenborough",  // confidential data
    "zipcode": "92998-3874"  // confidential data
  },
  "created-at": "2013-01-01 12:00:00Z",
  "active": true, // only approved status
  "status": "approved" // "waiting for approval" | "approved" | "reproved" | "blocked"
}
```

## authentication

permitted activities:
`get | update | create | cancel`

```javascript
{
  "account_id": "account_id",
  "password": "hashpassword",  // confidential data
  "attempts": 0,
  "session_limit": 3,
  "status": "offline", //"online" | "offline" | "blocked" | "created"
  "active": true,
  "auth-group": ["auth-group-id"],
  "created-at": "2013-01-01 12:00:00Z",
  "updated-at": "2013-01-01 12:00:00Z"
}
```

## auth-group

permitted activities:
`get | update | create | delete`

```javascript
{
  "title": "administrator",
  "activities": [
    { name: "account", permissions: ["all"] },
    { name: "authentication", permissions: ["get", "create", "update"] },
    { name: "session", permissions: ["get", "delete"] },
    { name: "any_router", permissions: ["any_person_action"] }
  ]
}
```

## session

permitted activities:
`get | create | drop`

```javascript
{
  "authentication-id": 1,
  "username": "Bread",  // confidential data
  "created-at": "2021-01-01 12:00:00Z",
  "due-date": "2021-01-02 12:00:00Z",
  "device": "unknown",
  "active": true,
  "ip": "192.168.0.1"
}
```

## activity log

permitted activities:
`get | create`

```javascript
{
  "session-id": 1,
  "activity": "get_accounts", //get_accounts | create_account | update_account | delete_account | cancel_account
  "created-at": "2001-01-01 12:00:00Z",
  "username": "bread",
  "ip": "192.168.0.1"
}
```
