App.decorators.MasterDecorator = (function (AbstractUserDecorator, utils) {

    function MasterDecorator(user) {
        AbstractUserDecorator.call(this, user);
    }

    utils.inheritsEC5(MasterDecorator, AbstractUserDecorator);

    MasterDecorator.prototype.teach = function(pupil) {
        pupil.giveLesson(lesson);
    };


    return MasterDecorator;

})(App.abstracts.AbstractUserDecorator, App.utils);

