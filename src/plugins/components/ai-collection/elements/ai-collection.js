import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'


export {AiCollectionGroupAttachedBehavior} from './ai-collection-group-attribute'
export {CollectionItemAttachedBehavior} from './collection-item-attribute'
export {CollectionHeadingAttachedBehavior} from './collection-heading-attribute'
export {CollectHeaderAttachedBehavior} from './collect-header-attribute'
export {CollectIconAttachedBehavior} from './collect-icon-attribute'
export {CollectTitleAttachedBehavior} from './collect-title-attribute'
export {CollectSummaryAttachedBehavior} from './collect-summary-attribute'
export {CollectActionsAttachedBehavior} from './collect-actions-attribute'
export {CollectBodyAttachedBehavior} from './collect-body-attribute'
export {CollectFooterAttachedBehavior} from './collect-footer-attribute'
export {AiCollectionAttachedBehavior} from './ai-collection-attribute'
export class AiCollection extends AiElement{

    static metadata(){

        return Behavior
            .customElement('ai-list')
            .withProperty('direction')
            .withProperty('header')
            .withProperty('items')

    }

    static inject(){

        return [Element]

    }


    constructor(element) {

        this.element = element

    }


    bind(){

        this.addClass('ai-list', `list-${this.direction}`)


    }

    onReveal(value){
        console.log('revealed', value)
    }

    toggleReveal(event){
        event.preventDefault();
        this.reveal = !this.reveal
    }

}

