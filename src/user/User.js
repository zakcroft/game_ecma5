App.User = (function (_super, utils) {

    function User() {
        _super.apply(this, arguments);

        Object.defineProperties(User,  {
            "invisibility": { writable: true, enumerable: true, configurable: true, value:null },
            "strength":{  writable: true, enumerable: true, configurable: true, value:null }
        });

        this.init();
    }

    utils.inheritsEC5(User, _super);

    User.prototype.init = function (settings) {

    };

    User.prototype.move = function () {
        _super.prototype.move.call(this, 5);
        alert("goodbye from ");
    },

    User.prototype.isLivingDead = function(){
            if(this.lifeSpanExtended) {
                return this.age > 250;
            } else{
                _super.prototype.isLivingDead.call();
            }
     }

    return User;

})(App.AbstractUser,
        App.utils)



// statics

App.User.isType = function(obj, type){
     return obj && type? obj instanceof type: 'not enough parameters';
}

// user  = new App.User()
//App.User.isType(user, App.User) => true








