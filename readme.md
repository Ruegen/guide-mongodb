![mongo db logo](/assets/images/mongodb.png)
# Using MongoDb


## Install mongodb

* Mac
* Windows
* Linux

[Guide to Install](https://docs.mongodb.com/manual/administration/install-community/)

## Using MongoDB locally
1. First we want to store the database locally and in our user directory rather than a system directory, this way the folder permissions are to you the user and mongodb has read/write permissions. Without those permissions it can't create data.
	```
	mkdir -p ~/data/db
	```

2. Run mongodb using the command mongod and the flag -dbpath
	e.g. (windows can be a different path)
	```
	mongod -p -dbpath ~/data/db/
	```

3. View mongodb in mongodb shell, this is an interactive environment similar to irb for Ruby but using JavaScript.
	```
	mongo shell
	```

4. Select a database from mongodb
	we are going to use the *test* db
	```
	use test
	```
	this switches to the test database

6. Optional: View collections (tables) in the database 'test'
	```
	show collections
	```

## Modifying the database collection
Using the previous instrucitons, you are now set to the database *test* and using the **db** object you can insert, update & delete into a collection.
We will now use some of the simple methods that allow you to make changes to the collections
	[mongodb collection methods](https://docs.mongodb.com/manual/reference/method/#collection)

1. Create a collection in the test database
	```
	db.createCollection('people')
	```
	when you run 'show collections' now you will see the 'people' collection

2. insert some data into your collection 'people'
	NOTE: your are passing in a 'javascript' object, key value pairs into the insert() function using the {} braces
	```
	db.people.insert({firstname: 'YOURNAME', lastname: 'YOURLASTNAME'})
	```

3. Look inside your collection and find all the records created in it.
	```
	db.foods.find()
	```

	This returns the ObjectId for each record, replace ObjectId in the next step

4. Find and delete record the same record in one function
	```
	db.foods.findOneAndDelete(ObjectId("5761fc4b639f77271a098f51"))
	```
	This will return the removed value in the console for a validation of what was removed.
