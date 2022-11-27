===================== database tables =====================

+-------------+--------------+----------------------------+
|                        user                             |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| name        | varchar(255) |                            |
| email       | varchar(255) |                            |
| avatarUrl   | varchar(255) |                            |
| createAt    | timestamp    |                            |
| updateAt    | timestamp    |                            |
| projectId   | int(11)      | FOREIGN KEY                |
+-------------+--------------+----------------------------+

+-------------+--------------+----------------------------+
|                        comment                          |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| body        | varchar(255) |                            |
| createAt    | timestamp    |                            |
| updateAt    | timestamp    |                            |
| userId      | int(11)      | FOREIGN KEY                |
+-------------+--------------+----------------------------+

+-------------+--------------+----------------------------+
|                        Project                          |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| name        | varchar(255) |                            |
| url         | varchar(255) |                            |
| description | text         |                            |
| category    | varchar(255) |                            |
| createAt    | timestamp    |                            |
| updateAt    | timestamp    |                            |
+-------------+--------------+----------------------------+

+-----------------------+--------------+----------------------------+
|                            Issue                                  |
+-----------------------+--------------+----------------------------+
| id                    | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| title                 | varchar(255) |                            |
| description           | text         |                            |
| descriptionText       | text         |                            |
| type                  | varchar(255) |                            |
| status                | varchar(255) |                            |
| priority              | varchar(255) |                            |
| position              | varchar(255) |                            |
| timeSpent             | integer      |                            |
| timeRemaining         | integer      |                            |
| estimate              | integer      |                            |
| createAt              | timestamp    |                            |
| updateAt              | timestamp    |                            |
| reporterId            | int(11)      |                            |
+-----------------------+--------------+----------------------------+

