//App.runtime = (function(){
var factory = new App.classes.SimpleAvatarFactory();

App.runtime.wizard = factory.createAvatar(
    'Wizard',
    {name: 'Megamus', icon: 'hat', age: '77'}, // mandatory
    ['master'] // decorators
    //['master', 'spirit_invoker', 'tree_talker', 'teleport'] // decorators
);


//App.runtime = new App.abstracts.AbstractUser();
//})();
