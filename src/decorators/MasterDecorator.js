App.decorators.MasterDecorator = (function (AbstractAvatarDecorator, utils) {

    function MasterDecorator(avatar) {
        AbstractAvatarDecorator.call(this, avatar);
    }

    utils.inheritsEC5(MasterDecorator, AbstractAvatarDecorator);

    MasterDecorator.prototype.teach = function(pupil) {
        pupil.giveLesson(lesson);
    };


    return MasterDecorator;

})(App.abstracts.AbstractAvatarDecorator, App.utils);

