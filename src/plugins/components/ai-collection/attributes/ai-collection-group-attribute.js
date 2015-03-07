import {iElement, ai} from './ai'

class AiCollectionGroup{
    get collection(value){
        return this.element.children
    }

    set collection(context){
        this.container[context.interfaceId] = context;
        this.collectionAttached(context)
    }

    constructor(){
        this.container = {};
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

    static metadata(){
        return iElement.options((ie)=>{
            ie.option('collapsable')
            ie.option('expandable')
        })
    }

    static inject(){
        return [Element];
    }


    set activeCollection(interfaceId){

        if(interfaceId === this._activeCollection){ return }
        var oldCollection = this._activeCollection
        this._activeCollection = interfaceId;
        this.collectionExpanded(this._activeCollection, oldCollection)
    }

    constructor(element){
        this.element = element;
        this._activeCollection = null;
    }



    attached(){
        this.configure();
    }

    collectionAttached(collection){
        console.log(collection)
        collection.parent = this;
    }
    collectionExpanded(newId, oldId){
        this.container[oldId].expanded = false;
    }

}
