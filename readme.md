# Using MongoDb


## Install mongodb

* Mac
* Windows
* Linux

## 1. Create place to hold database file
NOTE: You may need to give permissions to the user for this folder once created.
```
mkdir -p /data/db
```

## 2. Run mongodb
```
mongod
```

## 3. view mongodb in mongodb shell
```
mongo shell
```
## 4. select a database from mongodb
we are going to use the test db
```
use test
```
this switches to the test database

## 5. View collections (tables) in the database 'test'
```
show collections
```

## 6. Create a collection in the test database
```
db.createCollection('people')
```
when you run 'show collections' now you will see the 'people' collection

## 7. insert some data into your collection 'people'
NOTE: your are passing in a 'javascript' object, key value pairs into the insert() function using the {} braces
```
db.people.insert({firstname: 'YOURNAME', lastname: 'YOURLASTNAME'})
```

## 8. Look inside your collection and find all the records created in it.
```
db.foods.find()
```
