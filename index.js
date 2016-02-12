var Sequelize = require('sequelize');

var db = new Sequelize('reddit', 'andyding', '', {
    dialect: 'mysql'
});

var User = db.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING, // TODO: make the passwords more secure!
    email: Sequelize.STRING
});

// Even though the content belongs to users, we will setup the userId relationship later
var Content = db.define('content', {
    url: Sequelize.STRING,
    title: Sequelize.STRING,
    //userId: Sequelize.INTEGER
});

// Even though a vote has a link to user and content, we will setup the relationship later
var Vote = db.define('vote', {
    upVote: Sequelize.BOOLEAN,
    //userId: Sequelize.INTEGER,
    //contentId: Sequelize.INTEGER
});

// User <-> Content relationship
Content.belongsTo(User); // This will add a `setUser` function on content objects
User.hasMany(Content); // This will add an `addContent` function on user objects

// User <-> Vote <-> Content relationship
User.belongsToMany(Content, {through: Vote, as: 'Upvotes'}); // This will add an `add`
Content.belongsToMany(User, {through: Vote});

//db.sync(); // Only needs to be used once!

function createNewUser(username, password, callback){
    var userCreated = User.create({
        username: username,
        password: password,
    });
    callback(userCreated);
}

// createNewUser('bonnie','ding',function(userCreated){
//     console.log(userCreated);
// });

function createNewContent(userId,url,title,callback){
    var contentAdded = Content.create({
        userId: userId,
        url: url,
        title: title
    });
    callback(contentAdded);
}

// createNewContent('1','http://www.google.com','Google is a great website',function(contentAdded){
//     console.log(contentAdded);
// });

function voteOnContent(contentId, userId, upVote, callback){
    var voted = Vote.create({
        contentId: contentId,
        userId: userId,
        upVote: upVote,
    });
    callback(voted);
}