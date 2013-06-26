App.classes.Warrior = (function (User, utils) {

    function Wizard() {
        User.apply(this, arguments);
        this.init();
    }

    utils.inheritsEC5(Warrior, User);

    Warrior.prototype.init = function (settings) {

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

})(App.classes.User, App.utils);
