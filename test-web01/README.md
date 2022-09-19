# Test Website #1
First test website written with Laravel.

## Configuration
Rename `.env.example` to `.env`. Afterwards, modify settings to suit your needs.

## Create Database + User
### MySQL/MariaDB
The following Linux/MySQL commands may be used to create the database and assign all privileges to a specific user.

```bash
# Log into MySQL server as 'root'.
sudo mysql -u root -p

# Create database 'test_web01'.
MariaDB [(none)]> CREATE DATABASE test_web01;
Query OK, 1 row affected (0.000 sec)

# Create MySQL user restricted to localhost/127.0.0.1 with the password 'mypassword' (should be changed).
MariaDB [(none)]> CREATE USER 'test'@'localhost' IDENTIFIED BY 'mypassword';
Query OK, 0 rows affected (0.001 sec)

# Grant all privileges to the test user on the test database we created.
MariaDB [(none)]> GRANT ALL PRIVILEGES ON test_web01.* TO 'test'@'localhost';
Query OK, 0 rows affected (0.000 sec)

# Flush/reload all privileges.
MariaDB [(none)]> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.000 sec)
```

## Installation
Install Laravel and run the following commands.

```bash
# Migrate database.
php artisan migrate

# Serve to 0.0.0.0:8080.
php artisan serve --host=0.0.0.0 --port=8080
```

## Credits
* [Christian Deacon](https://github.com/gamemann)