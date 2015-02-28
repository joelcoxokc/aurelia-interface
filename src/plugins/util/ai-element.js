import {Behavior} from 'aurelia-templating'


export class AiElement{

    static inject(){

        return [Element]

    }

    constructor(element) {

        this.element = element

    }

    _parseArgs(args){
        return _(args)
            .flatten(true)
            .map(function(item){
                return item.split(' ')
            })
            .flatten()
            .value()
    }

    addClass(){
        var args = this._parseArgs(arguments)
        this.element.classList.add.apply(this.element.classList, args)

    }

    removeClass(){
        var args = this._parseArgs(arguments)
        this.element.classList.remove.apply(this.element.classList, args)
    }

    addEvent(evt, callback){
        var _this = this;

        this.element.addEventListener(evt, callInContext)

        function callInContext(){
            callback.apply(_this, arguments)
        }
    }


    removeEvent(evt, callback){
        var _this = this;

        this.element.removeEventListener(evt, callInContext, false)

        function callInContext(){
            callback.apply(_this, arguments)
        }
    }

    /**
     * toggleClassList    [add and  removes classes that are not simply toggleable also allows toggling classes on separate element, yet using "OWN" context variables]
     * @param  {String}   property  |REQUIRED| [Property name that exists on "this" or "context"]
     * @param  {String}   prefix    [Prefix for classNames]
     * @param  {Instance} context   [Use separate context from the element the toggle is being performed on]
     * @param  {String}   prev      [assigns the class name to be removed, Uses prev instead of the value of context[property] ]
     * @param  {String}   next      [Same as prev, except next will be the className added]
     */
    toggleClassList(property, prefix, context, prev, next){

        prefix = prefix || '';
        context = context || this;
        prev = prev || context.current[property]
        next = next || context[property]


        if(context[property] === context.current[property]){ return }

        prefix &&( (prev = prefix + prev)
                 , (next = prefix + next)
                 )
        // if(next.split(',').length){ next = next.split(',') }
        this.removeClass(prev)
        this.addClass(next)
        context.current[property] = context[property];
        return
    }

}


