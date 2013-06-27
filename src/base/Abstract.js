App.base.Abstract = (function(utils){

    function Abstract(){
        Object.defineProperty(this, "type", {
            value: this.constructor.toString().slice(this.constructor.toString().indexOf('function')+8, this.constructor.toString().indexOf('('))
        })
    }

    Abstract.prototype.init = function(){
        throw new Error(this.type+' Class is not intended for init');
    }

    Abstract.prototype.throwError = function(message){
        throw new Error('Error in '+this.type+'. '+message);
    }

    Abstract.prototype.makePropertyMandatory = function(prop){
        return prop? prop:  this.throwError('mandatory property not supplied in '+this.type)
    }

    return Abstract;

})(App.utils)
