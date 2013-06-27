App.classes.User= (function (AbstractUser, utils) {

    function User(settings) {

        AbstractUser.call(this, settings);

        Object.defineProperties(User,  {
            "invisibility": { writable: true, enumerable: true, configurable: true, value:null },
            "strength":{  writable: true, enumerable: true, configurable: true, value:null }
        });

        this.abilities = [];
        this.possessions = [];
        this.statuses = []; // can have more than one, like healing, injured, flying

        this.init();
    }

    utils.inheritsEC5(User, AbstractUser);

    User.prototype.init = function (settings) {

    };

    User.prototype.move = function () {
       this.position = this.position + 5;
    }

    User.prototype.can = function(ability){
        return this.abilities[ability];
    }

    User.prototype.has = function(possesion){
        return this.possessions[possesion];
    }

    User.prototype.status = function(state){
        return this.statuses[state];
    }

    return User;

})(App.abstracts.AbstractUser, App.utils)


// interfaces
App.interfaces.user = new App.base.Interface('User', ['move','can', 'has', 'status', 'isLivingDead', 'increaseLifeSpan', 'get_EXTENDED_LIFESPAN']);



// statics
App.classes.User.isStronger = function(user1, user2){
    return user1.strength > user2.strength;
}












