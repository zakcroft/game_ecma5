App.decorators.UserDecorator = (function (Interface, UserInterface) {

    function UserDecorator(user) {
        Interface.ensureImplements(UserDecorator, UserInterface);
        this.user = user;
    }

    UserDecorator.prototype = {
        move: function () {
            this.user.move()
        },

        get_MAX_LIFESPAN_AGE: function () {
            this.user.get_MAX_LIFESPAN_AGE();
        },

        isLivingDead: function () {
            this.user.isLivingDead();
        },

        increaseLifeSpan: function () {
            this.user.increaseLifeSpan();
        }
    }

    return UserDecorator;

})(App.base.Interface, App.interfaces.User);
