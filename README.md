===================== database tables =====================

+-------------+--------------+----------------------------+
|                        user                             |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| name        | varchar(255) |                            |
| email       | varchar(255) |                            |
| avatarUrl   | varchar(255) |                            |
| createAt    | varchar(255) |                            |
| updateAt    | varchar(255) |                            |
| projectId   | int(11)      | FOREIGN KEY                |
+-------------+--------------+----------------------------+

+-------------+--------------+----------------------------+
|                        comment                          |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| body        | varchar(255) |                            |
| createAt    | varchar(255) |                            |
| updateAt    | varchar(255) |                            |
| userId      | int(11)      | FOREIGN KEY                |
+-------------+--------------+----------------------------+

+-------------+--------------+----------------------------+
|                        Project                          |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| name        | varchar(255) |                            |
| url         | varchar(255) |                            |
| description | varchar(255) |                            |
| category    | varchar(255) |                            |
| createAt    | varchar(255) |                            |
| updateAt    | varchar(255) |                            |
+-------------+--------------+----------------------------+

