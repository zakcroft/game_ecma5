App.abstracts.AbstractUser = (function (Clazz, utils) {

    function AbstractUser(settings) {

        //var args = Array.prototype.slice.call(arguments,0)
        Clazz.call(this, settings);

        Object.defineProperty(this, "name", {
            value: this.makePropertyMandatory(settings.name)
        })

        Object.defineProperty(this, "icon", {
            value: this.makePropertyMandatory(settings.icon)
        })

        //writable, configurable and enumerable all FALSE by default when creating property this way
        //enumerable = false as only character qualities(strength, invisibilty) can be enumerable
        Object.defineProperty(this, "lifeSpanExtended", {
            value: false, writable: true
        })

        /// Where for these??? decorators?
//        Object.defineProperties(User, {
//            "invisibility": { writable: true, enumerable: true, configurable: true, value: null },
//            "strength": {  writable: true, enumerable: true, configurable: true, value: null }
//        });

        // writable, configurable and enumerable all TRUE by default when creating property this way
        this.age = settings.age;



        // CONSTANT
        var NORMAL_LIFESPAN = 250;
        var EXTENDED_LIFESPAN = 250;

        this.abilities = [];
        this.possessions = [];
        this.statuses = []; // can have more than one, like healing, injured, flying
    }

    utils.inheritsEC5(AbstractUser, Clazz);


    AbstractUser.prototype.move = function () {
        throw new Error('Unimplemented method in abstract class' + this.type);
    }

//    AbstractUser.prototype.fight = function () {
//        throw new Error('Unimplemented method in abstract class' + this.type);
//    }

    AbstractUser.prototype.can = function (ability) {
        return this.abilities[ability];
    }

    AbstractUser.prototype.has = function (possesion) {
        return this.possessions[possesion];
    }

    AbstractUser.prototype.status = function (state) {
        return this.statuses[state];
    }

    AbstractUser.prototype.increaseLifeSpan = function () {
        this.age === this.get_EXTENDED_LIFESPAN();

        // this cannot be changed back once granted
        Object.defineProperty(this, "lifeSpanExtended", {
            value: true, writable: false
        })
    }

    AbstractUser.prototype.isLivingDead = function(){
        if(this.lifeSpanExtended) {
            return this.age > EXTENDED_LIFESPAN;
        } else{
            return this.age > NORMAL_LIFESPAN;
        }
    }

    AbstractUser.prototype.get_NORMAL_LIFESPAN = function () {
        return this.get_NORMAL_LIFESPAN();
    }

    AbstractUser.prototype.get_EXTENDED_LIFESPAN = function () {
        return this.get_EXTENDED_LIFESPAN();
    }

    return AbstractUser;

})(App.base.Abstract, App.utils);

// interfaces
App.interfaces.user = new App.base.Interface('User', ['move', 'can', 'has', 'status', 'isLivingDead', 'increaseLifeSpan', 'get_EXTENDED_LIFESPAN']);


// statics
App.abstracts.AbstractUser.isStronger = function (user1, user2) {
    return user1.strength > user2.strength;
}


// Test this below
//x = new App.User('asdasd','asdsa')
//       User {age: undefined, init: function, move: function, isLivingDead: function, move: function…}
//       x.lifeSpanExtended
//       false
//       x.increaseLifeSpan()
//       undefined
//       x.lifeSpanExtended
//       true
//       delete x.lifeSpanExtended
//       false
//       x.lifeSpanExtended
//       true
//       x.lifeSpanExtended = false
//       false
//       x.lifeSpanExtended
//       true