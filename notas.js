print("Mongo");
var db = db.getSiblingDB("video");
print(db.getCollectionNames());

var query= {};
query ={year:2005};
var cursor = db.movieDetails.find(query);
