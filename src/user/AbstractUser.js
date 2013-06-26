App.AbstractUser = (function (Abstract, utils) {

    function AbstractUser(name, icon, age) {
        Abstract.call(this);
        Object.defineProperty(this, "name", {
            value: this.makePropertyMandatory(name)
        })

        Object.defineProperty(this, "icon", {
            value: this.makePropertyMandatory(icon)
        })

        //writable, configurable and enumerable all FALSE by default when creating property this way
        //enumerable = false as only character qualities(strength, invisibilty) can be enumerable
        Object.defineProperty(this, "lifeSpanExtended", {
            value: false, writable: true
        })

        // writable, configurable and enumerable all TRUE by default when creating property this way
        this.age = age;

        // CONSTANT
        var MAX_LIFESPAN_AGE = 250;
    }

    utils.inheritsEC5(AbstractUser, Abstract);


    AbstractUser.prototype.move = function () {
        throw new Error('Unimplemented method in abstract class' + this.type);
    }

    AbstractUser.prototype.get_MAX_LIFESPAN_AGE = function () {
        return MAX_LIFESPAN_AGE;
    }

    AbstractUser.prototype.isLivingDead = function () {
        return this.age > 120;
    }

    AbstractUser.prototype.increaseLifeSpan = function () {
        this.age === this.get_MAX_LIFESPAN_AGE();

        // this cannot be changed back once granted
        Object.defineProperty(this, "lifeSpanExtended", {
            value: true, writable: false
        })
    }

    return AbstractUser;

})(App.Abstract, App.utils);


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