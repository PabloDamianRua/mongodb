db=db.getSiblingDB('MyDataBase');

var query = {"year": 1994};
var rows = db.movies.find(query).sort({"title": 1});


rows.forEach(row => {
    print(row.title)
});

// Count movies for of year and order by count descending
var rows2 = db.movies.aggregate([
    {$group : {
             _id: "$year"
             ,"total":{$sum: 1 }
            }
            
    },
    { $sort : { "total" : -1 } }
   
]);

rows2.forEach(row => {
    print("Year(" + row._id +"): " + row.total);
});
