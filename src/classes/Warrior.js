App.classes.Warrior = (function (User, utils) {

    function Warrior(settings) {
        User.call(this, settings);
        this.init();
    }

    utils.inheritsEC5(Warrior, User);

    Warrior.prototype.init = function (settings) {
        //_super.init.call(this, settings);
    };

    Warrior.prototype.move = function () {

        if(this.has('movement_spell')){
            this.position = this.position + 15;

        }else if(this.status('injured')){

            // move like a basic user
            _super.move.call(this);

        }else {
            this.position = this.position + 10;
        }
    }

    return Warrior;

})(App.abstracts.AbstractUser, App.utils);
