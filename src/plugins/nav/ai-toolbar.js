import {Behavior} from 'aurelia-templating'

var defaults =  { size : 'sm'
                , fixed: true
                , bgColor  : 'white'
                , textColor: 'purple'
                , brand    : 'brand'
                }

export class AiToolbar{

    static metadata(){
        return Behavior
            .customElement('ai-toolbar')
            .withProperty('router')
            .withProperty('fixed')
            .withProperty('brand', 'brandChanged')
            .withProperty('bg-color', 'bgChanged')
            .withProperty('text-color', 'textChanged')
            .withProperty('size', 'sizeChanged')
    }

    static inject(){
        return [Element]
    }

    constructor(element){
        var _this = this;
        this.element = element
        this.current = defaults;

        _.assign(this, this.current);

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
        var classList = ['ai-toolbar']
        var _this = this;

        Object.observe(this.router, function(){
            _this.size = _this.router.currentInstruction.config.toolbar.size       || defaults.size
            _this.bgColor = _this.router.currentInstruction.config.toolbar.bgColor || defaults.bgColor
            _this.textColor = _this.router.currentInstruction.config.toolbar.bgColor || defaults.textColor
        })

        this.fixed     && classList.push(this.pre('toolbar', 'fixed'))
        this.bgColor   && classList.push(this.pre('bg', this.bgColor))
        this.textColor && classList.push(this.pre('text', this.textColor))
        this.size      && classList.push(this.pre('toolbar', this.size))
        this.addClass(classList);
        // Object.observe(this.router.navigation, ()=>{
            // console.log(this.router.navigation.container.viewModel.aside)
        // })

    }

    bgChanged(value){

        if(value === this.currentBg){ return }
        this.onBg(value)
        this.addClass(`bg-${value}`)

    }

    textChanged(value){

        if(value === this.currentText){ return }
        this.onText(value)
        this.addClass(`text-${value}`)

    }

    sizeChanged(value){

        if(value === this.current.size){ return }
        console.log('size', value)
        this.element.classList.remove(`toolbar-${this.current.size}`)
        this.element.classList.add(`toolbar-${value}`)
        this.current.size = value;

    }

    adapter(args, elementMethod, callback, storageKey){
        var _this = this;
        return function(value){
            elementMethod(args)
            callback(value)
            _this[storageKey] = value;
        }
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
