App.classes.Wizard = (function (User, utils) {

    function Wizard(settings) {
        User.call(this, settings);

        this.init();
    }

    utils.inheritsEC5(Wizard, User);

    Wizard.prototype.init = function (settings) {
       // _super.init.call(this, settings);
    };

    Wizard.prototype.move = function () {
          if(this.can('fly') || this.has('magic_carpet')){
                  this.position = this.position + 20;

          }else if(this.status('injured')){ // use ENUMS????

              this.position = this.position + 1;

          }else{
               // move like a basic user
              _super.move.call(this);
          }
    }

    return Wizard;

})(App.abstracts.AbstractUser, App.utils);











