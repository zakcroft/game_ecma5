/* abstract class AbstractUserDecorator
   extends Abstract
   implements UserInterface */

App.abstracts.AbstractUserDecorator = (function (Abstract, UserInterface, Interface, utils) {

    function AbstractUserDecorator(user) {
        Interface.ensureImplements(AbstractUserDecorator, UserInterface);
        this.user = user;
    }

    utils.inheritsEC5(AbstractUserDecorator, Abstract);

    AbstractUserDecorator.prototype.move = function () {
        this.user.move()
    }

    get_MAX_LIFESPAN_AGE = function () {
        this.user.get_MAX_LIFESPAN_AGE();
    }

    isLivingDead = function () {
        this.user.isLivingDead();
    }

    increaseLifeSpan = function () {
        this.user.increaseLifeSpan();
    }

    return AbstractUserDecorator;

})(App.base.Abstract, App.interfaces.User, App.base.Interface, App.utils);
