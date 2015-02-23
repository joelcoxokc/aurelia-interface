import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'



export class AiActionGroup extends AiElement{

    static metadata(){
        return Behavior
            .customElement('ai-action-group')
            .withProperty('side')
            .withProperty('type')
            .withProperty('action')
    }


    static inject(){
        return [Element]
    }


    constructor(element){
        this.element = element
        this.defaults = { side: 'top'
                        , type: 'reveal'
                        }
    }


    bind(){
        var classList = ['ai-action-group'];
        classList.push(`action-group-${this.type || this.defaults.type}`);
        classList.push(`action-group-${this.side || this.defaults.side}`);
        this.addClass.apply(this, classList);

        this.toggleAction(false)

        this.addEvent('mouseenter', function(){
            this.toggleAction();
        });
        this.addEvent('mouseleave', function(){
            this.toggleAction();
        });
    }
    attached(){

        this.group         = {}
        this.action        = this.element.querySelector('.ai-action');
        this.group.element = this.element.querySelector('.ai-btn-group');
        this.group.btns    = this.group.element.getElementsByClassName('ai-btn');

        _.each(this.group.btns, (el, index)=>{
            el.classList.add(`btn-position-${index+1}`)

        })

    }

    toggleAction(value){
        this.action = !this.action;

    }

    actionChanged(value){
        this[value ? 'addClass' : 'removeClass']('action-off')
        this[value ? 'removeClass' : 'addClass']('action-on')
    }
}
