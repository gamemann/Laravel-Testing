# Test Website #1
This project includes Tailwind CSS and React using the [Infinite Scroller NPM package](https://www.npmjs.com/package/react-infinite-scroller). We demonstrate how to continously load static data from an array. The source file where most of this performed may be found [here](https://github.com/gamemann/Laravel-Testing/blob/master/test-web01/resources/js/components/test.jsx)!

We will be implementing this functionality (both React and the Infinite Scroller package) into [Best Mods](https://bestmods.io) instead of relying on a jQuery library called [DataTables](https://datatables.net/).

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
```

## Running/Serving
To run the web server, you may use the following command.

```bash
# Serve to 0.0.0.0:8080.
php artisan serve --host=0.0.0.0 --port=8080
```

**Note** - If you're hosting multiple websites, it's recommended to use a web server as a reverse proxy such as NGINX and Apache.

## Demo
![GIF Video](../demos/test-web01-1.gif)

## Credits
* [Christian Deacon](https://github.com/gamemann)