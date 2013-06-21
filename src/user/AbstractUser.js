App.AbstractUser = (function(Abstract, utils){

   function AbstractUser(name, icon, age){
       Abstract.call(this);
       Object.defineProperty(this, "name", {
           value: this.makeMandatory(name)
       })

       Object.defineProperty(this, "icon", {
           value: this.makeMandatory(icon)
       })

       //enumerable = false as only character qualities(strength, invisibilty) can be enumerable

       Object.defineProperty(this, "lifeSpanExtended", {
           value: false,  writable: true
       })

       this.age = age;
   }

    utils.inheritsEC5(AbstractUser, Abstract);


   AbstractUser.prototype.move = function(){
             throw new Error('Unimplemented method in '+ this.type);
   }

   AbstractUser.prototype.isLivingDead = function(){
                        return this.age > 120;
    },

   AbstractUser.prototype.increaseLifeSpan = function(){
           this.age === 250;  /// game CONSTANT?
           // this cannot be changed back once granted
           Object.defineProperty(this, "lifeSpanExtended", {
               value:true,  writable: false
           })
           // Test this below
       //x = new App.User('asdasd','asdsa')
//       User {age: undefined, init: function, move: function, isLivingDead: function, move: function…}
//       x.lifeSpanExtended
//       false
//       x.increaseLifeSpan()
//       undefined
//       x.lifeSpanExtended
//       true
//       delete x.lifeSpanExtended
//       false
//       x.lifeSpanExtended
//       true
//       x.lifeSpanExtended = false
//       false
//       x.lifeSpanExtended
//       true
   }

   return AbstractUser;

})(App.Abstract, App.utils)