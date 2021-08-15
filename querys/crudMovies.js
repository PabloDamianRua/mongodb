db=db.getSiblingDB('MyDataBase');
//Create
    print("Count row before create"+ db.movies.count());
    db.movies.insert({"title":"Insert-Los extermineitors","year":1989,"countries":"Argentina","comment": "Yo soy muy cagon"});
    db.movies.insert({"title":"Insert-Los extermineitors2","year":1990,"countries":"Argentina","comment": "Yo soy muy cagon"});
    print("Count row after create"+ db.movies.count());
//Read
    var query = {"title": "Insert-Los extermineitors"};
    print(db.movies.find(query));
//Update
    db.movies.updateOne(
        {"title":"Insert-Los extermineitors2"},
        {
            $set: {
                "title": "Esto es, los extrtminators"
            }
        }
    )
//Delete
    db.movies.deleteMany( {$and:[
            {"title":"Insert-Los extermineitors"},
            {"year": 1990}
        ]}
        );

//Like
    print(db.movies.find({title: new RegExp('Esto')}));