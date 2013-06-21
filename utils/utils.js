App = Object.create(null);

App.utils = (function (app) {
    "use strict"

        var createGettersAndSetters = function (obj, props) {

            var allowed = null;
            if (!obj || !props)  throw Error('Not enough parameters');

            props.every(function (prop) {
                console.log(prop);
            })
        };

        var mixin = function (obj, props) {
            for (var prop in props) {
                if (props.hasOwnProperty(prop)) {
                    obj[prop] = props[prop];
                }
            }
        };

        var clone = function(obj){
            var c = {}
            mixin(c, obj)
            return c
        }

        var inherits = function (c, p) {

            function __() {
                this.constructor = c;
            }
            __.prototype = p.prototype;

            c.prototype = new __();

            c.prototype._super = p.prototype;

        }

        var inheritsEC5 = function (c, p) {

             // is this right?
            if (Object.isFrozen(p.prototype)) {
                throw new TypeError("Extending this class is forbidden");
            }

           // however this is meant to be slower that inherits part above
            //http://jsperf.com/object-create-vs-constructor-vs-object-literal/7
            c.prototype = Object.create(p.prototype)


            /* Adding props this way avoids enumeration and overwriting*/
            // you still need to reset the constructor
            Object.defineProperty(c.prototype, "constructor", {
                value: c
            });

            // set _super on the prototype as its nicer
            Object.defineProperty(c.prototype, "_super", {
                value: p.prototype
            });

            //  Object.getOwnPropertyDescriptor(User.prototype, 'constructor')
            //      => Object {value: function, writable: false, enumerable: false, configurable: false}

            }

        return {
            //createGettersAndSetters: createGettersAndSetters,
            mixin:mixin,
            clone:clone,
            inherits: inherits,
            inheritsEC5:inheritsEC5
        }
    })(App);

//function Point(x, y){
//    return Object.freeze({
//        x:+x,
//        y:+y
//    })
//}
//
//
//function Point(x, y){
//    return Object.freeze(
//        Object.create(Point.prototype, {
//            x:{value:+x, enumerable:true},
//            y:{value:+y ,enumerable:true}
//        })
//    )
//}
//
//Object.defineProperty(Function.prototype, 'build', {
//    value:function(attrMap){
//        return Object.freeze(Object.create(this.prototype, attrMap))
//    },
//    writable: false,
//    enumerable: false,
//    configurable:false
//})


