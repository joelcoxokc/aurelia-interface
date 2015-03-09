import {iElement, ai} from './ai'

class AiCollectionGroup{
    get collection(value){
        return this.element.children
    }

    set collection(collection){
        this.collections[collection.interfaceId] = collection;
        this.collectionAttached(collection)
    }
    set activeCollection(interfaceId){
        if (!interfaceId) {return};
        if(interfaceId === this._activeCollection){ return }
        var oldCollection = this._activeCollection
        this._activeCollection = interfaceId;
        this.collectionExpanded(this._activeCollection, oldCollection)
    }


    configure(){
        this.style();
    }

    style(){
        var classList = ['ai-collection-group'];
        this.element.classList.add.apply(this.element.classList, classList);
    }
}

export class AiCollectionGroupAttachedBehavior extends AiCollectionGroup{

    static inject(){
        return [Element];
    }
    static metadata(){
        return iElement.options((ie)=>{
            ie.option('collapsable')
            ie.option('expandable')
        })
    }

    constructor(element){
        this.interfaceId = ai.generateId('aiGroupCollection');
        this.element = element;
        this._activeCollection = null;
        this.collections = {};
        this.activeCollection = this.activeCollection || false;
    }

    attached(){
        this.configure();
    }

    collectionAttached(collection){
        console.log(collection)
        collection.group = this;
    }
    collectionExpanded(newId, oldId){
        this.container[oldId].expanded = false;
    }

}
