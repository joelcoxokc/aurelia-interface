import {Behavior} from 'aurelia-framework'

export class Navigation{

    static metadata(){
        return Behavior
            .withProperty('router')
            .withProperty('navs')
    }


    constructor(options){
        this._queue = {}
        this._navs = [];
        this.navs = [];

    }

    init(router){
        this.router = router;
        let navs = {}
        let children = {}

        this.router.navigation = _.map(this.router.navigation, (item)=>{
            return this.makeNav(item)
        })

        return this;
    }

    makeNav(item){
        if(!item.config.moduleId) return collection;

        var  nav = new Nav(item);

        if(this._queue[nav.moduleId])
            { for (child of this._queue[nav.moduleId]){ nav.addChild(child) }   }

        ( nav.level === 1 )
            && this.navs.push(nav);

        if( nav.level === 2 ) {
            var parent = this.navs.findIndex( (parentNav)=>{ return parentNav.moduleId === nav.parent } )

            if (this.navs[parent])

                { this.navs[parent].addChild(nav) }

            else
                { this._queue[nav.parent] = this._queue[nav.parent] || [];
                  this._queue[nav.parent].push(nav)
                }


        }
        item = nav;
        return item
    }

}


class Nav{

    static metadata(){
        return Behavior
            .withProperty('children')
    }

    constructor(options){
        this._children = {};
        _.assign(this, options)
        this.config.children  = [];
        this.moduleId = options.config.moduleId;
        this.level = options.config.settings.level;
        this.parent = (this.level > 1) ? options.config.settings.parent : null;
    }

    addChild(childNav){
        this._children[childNav.config.moduleId] = childNav
        this.config.children.push(this._children[childNav.config.moduleId])
    }

}
