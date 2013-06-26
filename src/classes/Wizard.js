App.classes.Wizard = (function (User, utils) {

    function Wizard() {
        User.apply(this, arguments);
        this.init();
    }

    utils.inheritsEC5(Wizard, User);

    Wizard.prototype.init = function (settings) {

    };

    Wizard.prototype.move = function () {
          if(this.can('fly') || this.has('carpet')){
                  this.position = this.position + 20;

          }else if(this.status('injured')){

              this.position = this.position + 1;

          }else{
               // move like a basic user
              _super.move.call(this);
          }
    }

    return Wizard;

})(App.classes.User, App.utils);











