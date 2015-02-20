import {Behavior} from 'aurelia-templating'

var defaults =  { size : 'sm'
                , fixed: true
                , bgColor  : 'white'
                , textColor: 'purple'
                , brand    : 'brand'
                }

export class AiAsideNav{

    static metadata(){
        return Behavior
            .customElement('ai-aside-nav')
            .withProperty('router')
            .withProperty('side', 'sideChanged')
            .withProperty('open', 'openChanged')
            .withProperty('fold', 'foldChanged')
            .withProperty('size', 'sizeChanged')
            .withProperty('fixed')
            .withProperty('brand', 'brandChanged')
    }

    static inject(){
        return [Element]
    }

    constructor(element){
        var _this   = this;

        this.element = element

        this.current = defaults;
        _.assign(this, this.current)

        this.resetSide = createToggle('side'     , 'toolbar', this.removeClass, this.resetSide);
        this.resetOpen = createToggle('open'     , 'toolbar', this.removeClass, this.resetOpen);
        this.resetFold = createToggle('fold'     , 'toolbar', this.removeClass, this.resetFold);
        this.resetSize = createToggle('size'     , 'toolbar', this.removeClass, this.resetSize);
        this.resetText = createToggle('textColor', 'text'   , this.removeClass, this.resetText);
        this.resetBg   = createToggle('bgColor'  , 'bg'     , this.removeClass, this.resetBg);

        function createToggle(name, prefix, toggleMethod, resetMethod){
            var classed = _.capitalize(name)
            return function(value){
                _this[`on${classed}`] = _this.adapter(name, `${prefix}-${value}`, toggleMethod, resetMethod)
            }
        }
        function adapter(name, args, toggleMethod, callback){
            var _this = this;
            return function(value){
                toggleMethod(args)
                callback(value)
                _this.current[name] = value;
            }
        }
        this.pre = function(prefix){
            var args = Array.prototype.slice.call(arguments).slice(1)
            return _.map(args, (arg, index)=>{
                return `${prefix}-${arg}`
            })
        }
    }

    bind(){
        var _this = this;
        var classList = ['ai-aside-nav']
        this.fixed     && classList.push(this.pre('aside', 'fixed'))
        this.open      && classList.push(this.pre('aside', 'open'))
        classList.push(this.pre('bg',    this.bgColor  ))
        classList.push(this.pre('text',  this.textColor))
        classList.push(this.pre('aside', this.size))
        classList.push(this.pre('aside', this.side))
        this.addClass(classList);
    }

    bgChanged(value){

        if(value === this.current.bgColor){ return }
        this.onBg(value)
        this.addClass(`bg-${value}`)

    }

    textChanged(value){

        if(value === this.current.textColor){ return }
        this.onText(value)
        this.addClass(`text-${value}`)

    }

    sizeChanged(value){

        if(value === this.current.size){ return }
        this.onSize(value)
        this.addClass(`toolbar-${value}`)

    }

    openChanged(value){
        if(value) {
            this.element.classList.add('aside-open')
            console.log(value)
            return;
        }
        this.element.classList.remove('aside-open')
    }

    addClass(array){
        var args = Array.isArray(array) ? array : arguments;
        this.element.classList.add.apply(this.element.classList, args)
    }

    removeClass(array){
        var args = Array.isArray(array) ? array : arguments;
        this.element.classList.removeClass.apply(this.element.classList, args)
    }
}
