/*TODO: Not Working*/

import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
export class AiActionGroupAttachedBehavior extends AiElement{

    static metadata(){
        return Behavior
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
        this.icon = this.action.querySelector('i')


        _.each(this.group.btns, (el, index)=>{
            if(this.side === 'top' || this.side === 'left'){
                el.classList.add(`btn-position-${(this.group.btns.length - index)}`)
            } else {
                el.classList.add(`btn-position-${index}`)
            }

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
