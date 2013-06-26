App.classes.User= (function (AbstractUser, utils) {

    function User() {
        AbstractUser.apply(this, arguments);

        Object.defineProperties(User,  {
            "invisibility": { writable: true, enumerable: true, configurable: true, value:null },
            "strength":{  writable: true, enumerable: true, configurable: true, value:null }
        });

        this.init();
    }

    utils.inheritsEC5(User, AbstractUser);

    User.prototype.init = function (settings) {

    };

    User.prototype.move = function () {
        return
    },

    User.prototype.isLivingDead = function(){
            if(this.lifeSpanExtended) {
                return this.age > 250;
            } else{
                _super.isLivingDead.call(this);
            }
     }

    return User;

})(App.abstracts.AbstractUser, App.utils)

// interfaces
App.interfaces.user = new App.base.Interface('User', ['move', 'isLivingDead', 'increaseLifeSpan', 'get_MAX_LIFESPAN_AGE']);


// statics
App.classes.User.isStronger = function(user1, user2){
   return user1.strength > user2.strength;
}









