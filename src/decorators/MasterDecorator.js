App.decorators.MasterDecorator = (function (UserDecorator, utils) {

    function MasterDecorator(user) {
        UserDecorator.call(this, user);


    }

    utils.inheritsEC5(MagicDecorator, UserDecorator);

    MasterDecorator.prototype.castSpell = function(target) {
        return target.die();
    };


    return MagicDecorator;

})(App.abstracts.AbstractUserDecorator, App.utils);

