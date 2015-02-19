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
            .withProperty('bgColor', 'bgChanged')
            .withProperty('textColor', 'textChanged')
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
        this.container = this.element.firstElementChild;

        this.container.classList.add(`bg-${this.bgColor}`, `text-${this.textColor}`)

        this.fixed     && classList.push(this.pre('toolbar', 'fixed'))
        this.bgColor   && classList.push(this.pre('bg', this.bgColor))
        this.textColor && classList.push(this.pre('text', this.textColor))
        this.size      && classList.push(this.pre('toolbar', this.size))
        this.addClass(classList);
        Object.observe(this.router, function(){
            _this.size = _this.router.currentInstruction.config.toolbar.size           || defaults.size
            _this.bgColor = _this.router.currentInstruction.config.toolbar.bgColor     || defaults.bgColor
            _this.textColor = _this.router.currentInstruction.config.toolbar.textColor || defaults.textColor
        })
        // Object.observe(this.router.navigation, ()=>{
            // console.log(this.router.navigation.container.viewModel.aside)
        // })

    }

    bgChanged(value){

        if(value === this.current.bgColor){ return }
        this.container.classList.remove(`bg-${this.current.bgColor}`)
        this.container.classList.add(`bg-${this.bgColor}`)
        this.current.bgColor = value;

    }

    textChanged(value){

        if(value === this.current.textColor){ return }
        this.container.classList.remove(`text-${this.current.textColor}`)
        this.container.classList.add(`text-${this.textColor}`)
        this.current.textColor = value;

    }

    sizeChanged(value){

        if(value === this.current.size){ return }
        this.element.classList.remove(`toolbar-${this.current.size}`)
        this.element.classList.add(`toolbar-${value}`)
        this.current.size = value;

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
