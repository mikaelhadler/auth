# Auth - Login Fail system

[HOME](../../README.md)

- [ ] when trying to log in with the wrong password, record the first and second attempt
- [ ] after the second wrong attempt, create a 1 min counter before releasing the next attempt
- [ ] after the third wrong attempt, block the account for 24 hours, not allowing further attempts in this period
- [ ] locked accounts should not log in even with the correct password
- [ ] before the third incorrect attempt if the account enters the correct data the attempt counter must be reset
- [ ] after the first wrong attempt to access an account, the account should receive an email informing him of the attempt, if he informs that he does not recognize the attempted access, the attempted browser will be blocked for 24 hours
- [ ] if there is no registered account for the email provided, the browser must be registered and an attempt counter for it must be created, with the same account rules
- [ ] in all attempts the account's ip and browser must be registered
- [ ] a blocked account can be restored by the system administrator
- [ ] the system administrator can block any account and access the system usage history
