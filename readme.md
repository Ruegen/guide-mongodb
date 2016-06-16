# Using MongoDb


## Install mongodb

* Mac
* Windows
* Linux

## Create place to hold database file
NOTE: You may need to give permissions to the user for this folder once created.
```
mkdir -p /data/db
```

## Run mongodb
```
mongod
```

## view mongodb in mongodb shell
````
mongo shell
```
## select a database from mongodb
we are going to use the test db
```
use test
```
this switches to the test database

## view collections (tables) in the database 'test'
```
show collections
```
