## Setting up MySQL

I am on a Mac OS system using version Catalina. To have MySQL running on my machine I had to install the following tools;

- MySQL community server [download link](https://dev.mysql.com/downloads/mysql/)
- MySQL workbench [download link](https://dev.mysql.com/downloads/workbench/)

If you are on a windows machine you can use the same tools or you can use [XAMPP](https://www.apachefriends.org/index.html) as well.

### Installing MySQL

First we have to install [MySQL community server](https://dev.mysql.com/downloads/mysql/). Install this and follow along the instructions. It will at the end stages of installion ask you to set a password for your username.

> Set up a strong password. (We will remove it later 😂😂), because current MySQL lib of Deno doesn't connect to a username with a password.

Go to your system preferences

![MAC OS system preferences](assets/1-system-preferences.png?raw=true "system preferences")

Click on `MySQL` a new dialog will open up.

![MySQL before starting](assets/2-mysql-before-start.png?raw=true "mysql")

Click on `Start MySQL Server` button

![MySQL after starting](assets/3-mysql-after-start.png?raw=true "mysql")

### Installing MySQL Workbench

Next we have to install [MySQL workbench](https://dev.mysql.com/downloads/workbench/). Follow the steps along. Once it is installed. Open `workbench`. It should look like below. (Make sure before opening this that you have your MySQL instance running)

![MySQL workbench](assets/4-workbench.png?raw=true "workbench")

Once open an instance of `localhost` It will open up a dialog like this

![MySQL workbench query panel](assets/5-workbench-query-panel.png?raw=true "workbench query panel")

##### Set your MySQL password to empty

Inside the `query panel box` write the following query.

```sql
select current_user();
set password = "";
```

& hit `cmd + enter`. This will execute the query.

What this query does is, it will select whatever the current user logged is (which is `root`) & for that user set it's password to `""` empty.

-----

Having done this, you are ready to start playing with deno + oak + mysql 😍😍😍