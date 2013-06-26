App.decorators.MagicDecorator = (function (UserDecorator, utils) {

    function MagicDecorator(user) {
        UserDecorator.apply(this, arguments);

        Object.defineProperties(User, {
            "invisibility": { writable: true, enumerable: true, configurable: true, value: null },
            "strength": {  writable: true, enumerable: true, configurable: true, value: null }
        });


    }

    utils.inheritsEC5(MagicDecorator, UserDecorator);

    MagicDecorator.prototype.castSpell = function(target) {
        return target.die();
    };


    return MagicDecorator;

})(App.decorators.UserDecorator, App.utils);


