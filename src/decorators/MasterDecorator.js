App.decorators.MasterDecorator = (function (UserDecorator, utils) {

    function MasterDecorator(user) {
        UserDecorator.call(this, user);
    }

    utils.inheritsEC5(MasterDecorator, UserDecorator);

    MasterDecorator.prototype.teach = function(pupil) {
        pupil.giveLesson(lesson);
    };


    return MasterDecorator;

})(App.abstracts.AbstractUserDecorator, App.utils);

