# Session - Create session on login

[HOME](../../README.md)

- [x] check if the account has reached the limit of simultaneous sessions before logging in
- [x] drop open session from the same account (when you reach the limit)
- [x] a list of sessions from the same account will be provided when the open session limit is reached
- [x] check if the session provided in the JWT is active
- [x] a session will not be validated from a user agent other than the one logged in
- [x] the system administrator will have access to all active sessions
- [x] update authentication status to offline if not has other session opened
- [x] drop session if it is active and any other condition is not valid
