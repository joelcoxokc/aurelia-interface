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
    belongsTo  : 'collectionItem'
    attachTo   : 'collectionItem'
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
    belongsTo  : 'item'
    hasHeader  : true,
    hasBody    : true,
    trigger    : 'collection',
    attachFrom : 'collection'
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

class Item extends shared{

    set body(body){
        this.validateBody(body, function(response){
            response &&( this.container[body.interfaceId] = body );
            this.hasMany = 'collectBody';
            this.hasBody = true;
        });
    }

    constructor(){
        this.defaults  = defaults2;
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


}
class Collection{


    constructor(){
        this.defaults  = defaults;
        this.nameValue = this.defaults;
        this.belongsTo = this.defaults.belongsTo;
        this.hasMany   = this.defaults.hasMany;
        this.selector  = this.defaults.selector;
        this.hasHeader = this.defaults.hasHeader;
        this.hasBody   = this.defaults.hasBody;
        this.keepOpen  = 'keep-open';
    }

    attached(){
        this.attachTo();
        this.style();
    }

    style(){
        var classList = [];
        this.selector &&( classList.push(this.selector) );
        this.keepOpen &&( classList.push(this.class.keepOpen) );
        this.element.classList.add.apply(this.element.classList, classList);
    }

}









