db.aluna.remove({"_id": ObjectId("5cfc736697bdbbd59d7eef63") })
db.aluna.find().pretty();
db.aluna.find();
db.aluna.find({"nome":"Ada Lovelace"}).pretty();
db.aluna.find({ $or: [{ "nome" : "Ada Lovelace"}, 
{"nome" : "Grace Hopper" }] 
}).pretty();
db.aluna.find({ _id: 1}).pretty();


    db.aluna.insert(
        [
    { "nome" : "Ada Lovelace", "localNascimento" : "Londres" , "profissao": "Matemática", "anoNascimento" : "1815"},
    
     { "nome" : "Grace Hopper", "localNascimento" : "Nova York," , "profissao": "Matemática", "anoNascimento" : "1906"},
     
       { "nome" : "Jean E. Sammet", "localNascimento" : "Nova York" , "profissao": "Cientista da Computação", "anoNascimento" : "1928"},
       
         { "nome" : " Karen Sparck Jones", "localNascimento" : "Willingham" , "profissao": "Cientista da Computação,", "anoNascimento" : "1935"},
         
           { "nome" : "Carol Shaw,", "localNascimento" : "Palo Alto" , "profissao": "Engenheira de Software,", "anoNascimento" : "Engenheira de Software,"},
           
    ]
    )
db.aluna.find({"nome":"Ada Lovelace"},{"profissao":"Matematica"})
db.aluna.find({"nome":"Carol Shaw"},{"profissao":"Engenheira de Software"});
db.aluna.update({"nome":"Carol Shaw,"}, { $set :{"nome":"Carol Shaw"} })
db.aluna.update({"anoNascimento":"Engenheira de Software,"},{ $set :{"anoNascimento":"1955"} });
db.aluna.update({"_id": ObjectId("5cfc6be397bdbbd59d7eef5a")},{ $set :{"nome":"Ada Lovelace Maravilhosa"} });

db.aluna.update({"_id": ObjectId("5cfc6be397bdbbd59d7eef5a")},{ $set :{"nome":"Ada Lovelace Maravilhosa", "localNascimento":"Londres - UK" } });

db.aluna.find({ $or: [{ "nome" : "Carol Shaw"}, {"nome" : "Ada Lovelace" }] }).pretty();
db.aluna.find({"nome": { $in : ["Carol Shaw", "Ada Lovelace"] } }).pretty()

db.aluna.find({ "nome" : /^e/ }).pretty() 
db.aluna.find({ "nome" : /e$/ }).pretty() 





db.aluna.update({"_id": ObjectId("5cfc6be397bdbbd59d7eef5e")}, { $set :{"nome":"Carol Shaw Gamer Mara", "localNascimento": " Palo Alto - EUA" } });
db.aluna.update({"_id": ObjectId("5cfc6be397bdbbd59d7eef5d")}, { $set :{"nome":"Karen Sparck Jones Fodona", "localNascimento": "Willingham - UK" } });
db.aluna.update({"_id": ObjectId("5cfc6be397bdbbd59d7eef5c")}, { $set :{"nome":"Jean E. Sammet Fantástica", "localNascimento": "Nova York - EUA" } });
db.aluna.update({"_id": ObjectId("5cfc6be397bdbbd59d7eef5b")}, { $set :{"nome":"Grace Hopper Inspiração", "localNascimento": "Nova York - EUA" } });