App.base.Abstract = (function(utils){

    function Abstract(){
        Object.defineProperty(this, "type", {
            value: this.constructor.toString().slice(0, this.constructor.toString().indexOf(')')+1)
        })
    }

    Abstract.prototype.init = function(){
        throw new Error(this+' Class is not intended for init');
    }

    Abstract.prototype.throwError = function(message){
        throw new Error('Error in '+this.type+'. '+message);
    }

    Abstract.prototype.makePropertyMandatory = function(prop){
        return prop? prop:  this.throwError('mandatory property not supplied in '+this.type)
    }

    return Abstract;

})(App.utils)
