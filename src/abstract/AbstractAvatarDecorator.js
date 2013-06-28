/* abstract class AbstractAvatarDecorator implements AbstractAvatarInterface */

//The decorator pattern benefits heavily from the use of interfaces. The most important feature
//of the decorator is that it can be used in place of its component.

//Decorator is used so we can add, replace, or change methods before or after execution - on an instance?

// add is less robust, rest of code needs to know about it? polymorphism? must type check before running added functionality on instance
// see end


App.abstracts.AbstractAvatarDecorator = (function (Abstract, UserInterface, Interface, utils) {

    function AbstractAvatarDecorator(user) {

        this.user = user;

        // Loop through all of the attributes of this.user and create pass-through
        // methods for any methods that aren't currently implemented.
        outerloop: for (var key in this.user) {

            // Ensure that the property is a function or that the method isn't in the interface.
            if (typeof this.user[key] !== 'function' || UserInterface.methods.indexOf(key) !== -1) continue outerloop;

            // Add the new method.
            this[key] = this.user[key];

        }
    }

    AbstractAvatarDecorator.prototype.init = function () {

    }

    AbstractAvatarDecorator.prototype.move = function () {
        this.user.move()
    }

    AbstractAvatarDecorator.prototype.can = function (ability) {
        this.user.abilities[ability];
    }

    AbstractAvatarDecorator.prototype.has = function (possesion) {
        this.user.possessions[possesion];
    }

    AbstractAvatarDecorator.prototype.status = function (state) {
        this.user.statuses[state];
    }

    AbstractAvatarDecorator.prototype.get_MAX_LIFESPAN = function () {
        this.user.get_MAX_LIFESPAN();
    }

    AbstractAvatarDecorator.prototype.get_NORMAL_LIFESPAN = function () {
        this.user.get_NORMAL_LIFESPAN();
    }

    AbstractAvatarDecorator.prototype.get_EXTENDED_LIFESPAN = function () {
        this.user.get_EXTENDED_LIFESPAN();
    }

    AbstractAvatarDecorator.prototype.isLivingDead = function () {
        this.user.isLivingDead();
    }

    AbstractAvatarDecorator.prototype.increaseLifeSpan = function () {
        this.user.increaseLifeSpan();
    }

    AbstractAvatarDecorator.prototype.throwError = function (message) {
        this.user.throwError();
    }

    AbstractAvatarDecorator.prototype.makePropertyMandatory = function (prop) {
        this.user.makePropertyMandatory();
    }

    return AbstractAvatarDecorator;

})(App.base.Abstract, App.interfaces.user, App.base.Interface, App.utils);



