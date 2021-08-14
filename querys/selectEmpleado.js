
var db = db.getSiblingDB("advertmind");
print(db.getCollectionNames());

var query= {};
query ={covid:true};
var projection= {"nombre" :1};
var cursor = db.empleado.find(query,projection);

print("Estos ya la pasaron:")
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}

print("Estos aun zafan:")
query2 ={covid:{$exists: false}};
var cursor2 = db.empleado.find(query2,projection);

while ( cursor2.hasNext() ) {
   printjson( cursor2.next() );
}