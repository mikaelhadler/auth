# 1. Authentication System

## TODO

| feature                                         | progress | percent |
| ----------------------------------------------- | -------- | ------- |
| [account](doc/account/account.md)               | 5/7      | 71,42%  |
| [auth-group](doc/auth/auth-group.md)            | 6/6      | 100%    |
| [activity-log](doc/log/activity-log.md)         | 3/5      | 60%     |
| [session](doc/log/activity-log.md)              | 8/8      | 100%    |
| [login-fail](doc/auth/login-fail-flow.md)       | 0/10     | 0%      |
| [login-success](doc/auth/login-success-flow.md) | 0/4      | 0%      |
| TOTAL                                           | 22/40    | 55%     |

## GUID

[database](doc/database/database-guid.md)

## Architecture

`Clean Architecture`

1. entities (business-rules)
2. use-case (application-rules)
3. adapters
   - controllers (web-routers)
   - presenters (adapters-presenters)
   - gateways (database-adapters)
4. frameworks
   - config
   - database
   - express

[LICENSE](LICENSE)
