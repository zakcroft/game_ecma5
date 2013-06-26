App.decorators.MagicDecorator = (function (UserDecorator, utils) {

    function MagicDecorator(user) {
        UserDecorator.apply(this, arguments);


    }

    utils.inheritsEC5(MagicDecorator, UserDecorator);

    MagicDecorator.prototype.castSpell = function(target) {
        return target.die();
    };


    return MagicDecorator;

})(App.abstracts.AbstractUserDecorator, App.utils);


