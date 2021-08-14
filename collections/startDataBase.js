var dbName = "MyDataBase";
if(db.getMongo().getDBNames().indexOf(dbName) < 0)
{
    print("It will be created a database witclsh the name: " + dbName);
}
else
{
    print("The data " + dbName + "base exits");
    db.getSiblingDB(dbName);
    db.dropDatabase();
}

db.getSiblingDB(dbName); //create and select the database for exercises

load("movies.js"); //create a movie collection from of file js

db.movies.insert({"title":"The Matrix","year":1999,"countries":"USA","comment": "No puedo creer que no este esta pelicula en el listado"});
db.movies.insert({"title":"Forrest Gump","year":1994,"countries":"USA","comment": "Esto no puede ser. Imperdonable que no este en la lista"});
db.movies.insert({"title":"Los bañeros más locos del mundo","year":1987,"countries":"Argentina","comment": "uhh loco, que buena peli"});
db.movies.insert({"title":"Los extermineitors","year":1989,"countries":"Argentina","comment": "Yo soy muy cagon"});