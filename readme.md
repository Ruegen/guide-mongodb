<p align="center"><img src="mongodb.png"></p>
# Using MongoDb


## Install mongodb

* Mac
* Windows
* Linux

[Guide to Install](https://docs.mongodb.com/manual/administration/install-community/)

### 1. Create place to hold database file
Create a folder in your User/Home directory.
This way the folder permissions are to you the user and mongodb has read/write permissions. Without those permissions it can't create data.
```
mkdir -p /data/db
```

### 2. Run mongodb using the command mongod and the flag -dbpath
e.g. (windows can be a different path)
```
mongod -p -dbpath ~/data/db/
```


### 3. view mongodb in mongodb shell
```
mongo shell
```
### 4. select a database from mongodb
we are going to use the test db
```
use test
```
this switches to the test database

### 5. View collections (tables) in the database 'test'
```
show collections
```

# Database methods
We will now use some of the simple methods that allow you to make changes to the collections <br>
[mongodb collection methods](https://docs.mongodb.com/manual/reference/method/#collection)

### 6. Create a collection in the test database
```
db.createCollection('people')
```
when you run 'show collections' now you will see the 'people' collection

### 7. insert some data into your collection 'people'
NOTE: your are passing in a 'javascript' object, key value pairs into the insert() function using the {} braces
```
db.people.insert({firstname: 'YOURNAME', lastname: 'YOURLASTNAME'})
```

### 8. Look inside your collection and find all the records created in it.
```
db.foods.find()
```

This returns the ObjectId for each record, replace ObjectId in the next step

### 9. Find and delete record the same record in one function
```
db.foods.findOneAndDelete(ObjectId("5761fc4b639f77271a098f51"))
```
This will return the removed value in the console for a validation of what was removed.
