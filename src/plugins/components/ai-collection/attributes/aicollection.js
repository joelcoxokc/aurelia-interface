let defaults = {
    parent: {
        name     : 'collectionItem',
        selector : 'collection-item',
        required : false,
        trigger  : true,
        property : 'collection',
    },
    child:{
        name     : 'collection-item',
        required : true,
        selector : 'collection-item',
        attachTo : 'collections',
    },
    name       : 'aiCollection',
    selector   : 'ai-collection',
    hasMany    : 'collectionItem' ,
    belongsTo  : 'collectionItem',
    attachTo   : 'collectionItem',
    hasHeader  : true,
    hasBody    : false,
}
let defaults2 = {
    parent: {
        name     : 'aiCollection',
        selector : 'ai-collection',
        required : false,
        trigger  : true,
        property : 'items',
    },
    child:{
        name     : 'aiCollection',
        required : false,
        selector : 'ai-collection',
        attachTo : 'collection',
    },
    name       : 'collectionItem',
    selector   : 'collection-item',
    hasMany    : 'items' ,
    belongsTo  : 'item',
    hasHeader  : true,
    hasBody    : true,
    trigger    : 'collection',
    attachFrom : 'collection',
}


class Shared{

    get parent(){
        return this.findParent(this.defaults.parent.name);
    }

    set parent(parent){
        parent.childAttached(this);
        this.parentAttached(parent);
    }

    set child(value){
        this.persmissionToAttach(value, (respond)=>{
            respond &&( this.container[value.interfaceId].parent = this);
        });
    }

    attached(){
        this.attachTo();
    }

    attachTo(){
        this.parent[this.defalts.attachTo] = this;
    }

    parentAttached(parent){

    }

    childAttached(child){

    }

    validateChild(context){
        if(context.name === this.defaults.hasMany){
            return this.context.interfaceId ? (context.name === this.defaults.hasMany) : false;
        }
    }

    persmissionToAttach(context, respond){
        if(this.validateChild(context)){
            ( this.container[value.interfaceId] = value );
            return respond(true);
        }
        return respond(false)
    }

}

export class Item extends Shared{

    set body(body){
        this.validateBody(body, function(response){
            response &&( this.container[body.interfaceId] = body );
            this.hasMany = 'collectBody';
            this.hasBody = true;
        });
    }

    constructor(){
        this.defaults  = defaults2;
        this.mainName = 'CollectionItem';
        this.nameValue = 'collectionItem';
        this.belongsTo = 'aiCollection';
        this.hasMany   = 'aiCollection';
        this.selector  = 'collection-item';
        this.hasHeader = true;
        this.hasBody   = true;
    }

    validateBody(body, respond){
        return body.interfaceId &&(respond(true));
    }

    bodyAttached(){

    }

    style(){
        this.expanded    && classList.push(this.defaults.class.expanded);
        this.showActions && classList.push(this.defaults.class.showActions);
        this.classList.add.apply(this.classList, classList);
    }


}
export class Collection extends Shared{


    constructor(){
        this.defaults  = defaults;
        this.main      = 'AiCollection';
        this.nameValue = 'aiCollection';
        this.belongsTo = 'collectionItem';
        this.hasMany   = 'collectionItem';
        this.selector  = 'ai-collection';
        this.hasHeader = true;
        this.hasBody   = false;
        this.keepOpen  = 'keep-open';
    }

    attached(){
        this.interfaceId = tools.generateId('CollectionItem');
        this.style();
    }


    style(){
        var classList = ['ai-collection'];
        this.keepOpen &&( classList.push(this.class.keepOpen) );
        this.showActions  && classList.push(defaults.class.showActions)
        this.element.classList.add.apply(this.element.classList, classList);
    }

}









