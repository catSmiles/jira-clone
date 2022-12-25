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
| issueId     | int(11)      | FOREIGN KEY                |
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
| projectId             | int(11)      | FOREIGN KEY                |
+-----------------------+--------------+----------------------------+


=========== many-to-many relationship two entities User and Issue ==================

+-------------+--------------+----------------------------+
|                        user                             |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| name        | varchar(255) |                            |
| ...         | ...          |                            |
+-------------+--------------+----------------------------+

+-------------+--------------+----------------------------+
|                        issue                            |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| title       | varchar(255) |                            |
| ...         | ...          |                            |
+-------------+--------------+----------------------------+

+-------------+--------------+----------------------------+
|              user_issues_issue                          |
+-------------+--------------+----------------------------+
| userId      | int(11)      | PRIMARY KEY FOREIGN KEY    |
| issueId     | int(11)      | PRIMARY KEY FOREIGN KEY    |
+-------------+--------------+----------------------------+



======================================================= define list custom errors =======================================================

+-------------+-------------------+----------------------------+-------------+----------------------------------------------------------+
|             | define error      |     name errors            |    status   |                       message                            |
+-------------+-------------------+----------------------------+-------------+----------------------------------------------------------+
|     1       | invalid token     | InvalidTokenError          |     401     |     Unauthorized - Authentication token is invalid       |
|     2       | bad user input    | BadUserInputError          |     400     |     Bad Request  - There were validation errors          |
|     3       | route not found   | RouteNotFoundError         |     404     |     Not Found    - routename not found                   |
|     4       | entity not found  | EntityNotFoundError        |     404     |     Not found    - entityname not found                  |
+-------------+-------------------+----------------------------+-------------+----------------------------------------------------------+



============================ Meaning serializers word ============================

In computing, serialization (or serialisation) is the process of translating
a data structure or object state into a format that can be stored.

