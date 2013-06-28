/* abstract class AbstractUserDecorator implements AbstractUserInterface */

//The decorator pattern benefits heavily from the use of interfaces. The most important feature
//of the decorator is that it can be used in place of its component.

//Decorator is used so we can add, replace, or change methods before or after execution - on an instance?

// add is less robust, rest of code needs to know about it? polymorphism? must type check before running added functionality on instance
// see end


App.abstracts.AbstractUserDecorator = (function (Abstract, UserInterface, Interface, utils) {

    function AbstractUserDecorator(user) {

        this.user = user;
        this.interface = UserInterface;

        // Loop through all of the attributes of this.bicycle and create pass-through
        // methods for any methods that aren't currently implemented.
        outerloop: for (var key in this.user) {
            // Ensure that the property is a function.
            if (typeof this.user[key] !== 'function') {
                continue outerloop;
            }
        // Ensure that the method isn't in the interface.
            for (var i = 0, len = this.interface.methods.length; i < len; i++) {
                if (key === this.interface.methods[i]) {
                    continue outerloop;
                }
            }
        // Add the new method.
            var that = this;
            (function (methodName) {
                that[methodName] = function () {
                    return that.user[methodName]();
                };
            })(key);
        }

    }

    AbstractUserDecorator.prototype.move = function () {
        this.user.move()
    }

    AbstractUserDecorator.prototype.can = function (ability) {
        this.user.abilities[ability];
    }

    AbstractUserDecorator.prototype.has = function (possesion) {
        this.user.possessions[possesion];
    }

    AbstractUserDecorator.prototype.status = function (state) {
        this.user.statuses[state];
    }

    AbstractUserDecorator.prototype.get_MAX_LIFESPAN = function () {
        this.user.get_MAX_LIFESPAN();
    }

    AbstractUserDecorator.prototype.get_EXTENDED_LIFESPAN = function () {
        this.user.get_EXTENDED_LIFESPAN();
    }

    AbstractUserDecorator.prototype.isLivingDead = function () {
        this.user.isLivingDead();
    }

    AbstractUserDecorator.prototype.increaseLifeSpan = function () {
        this.user.increaseLifeSpan();
    }

    return AbstractUserDecorator;

})(App.base.Abstract, App.interfaces.user, App.base.Interface, App.utils);



