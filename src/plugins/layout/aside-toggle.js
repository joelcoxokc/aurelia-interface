import {Behavior} from 'aurelia-templating'

export class AsideToggle{

    static metadata(){
        return Behavior
            .withProperty('aside')
            .withProperty('state')
            .withProperty('open', 'openChanged')
            .withProperty('fold')
            .withProperty('side')
    }

    constructor(element){
        this.toggles = {

            left:   { open: { on : []
                            , off: []
                            }
                    , fold: { on : []
                            , off: []
                            }
                    },
            right:  { open: { on : []
                            , off: []
                            }
                    , fold: { on : []
                            , off: []
                            }
                    }
        }
    }

    init(aside){
        this.aside = aside
        this.open  = aside.isOpen
        this.fold  = aside.isFolded
        this.side  = aside.side;
        return this
    }

    on(side, state, callback){
        if(!this.states[side][state]) return new Error(`Aside State ${state} does not exist!! PLease use open or fold`)
        this.toggles[side][state].on.push(callback)
    }

    off(side, state, callback){
        if(!this.toggles[side][state]) return new Error(`Aside State ${state} does not exist!! PLease use open or fold`)
        this.toggles[side][state].off.push(callback)
    }

    onOpen(side, callback){
        this.toggles[side].open.on.push(callback)
    }

    offOpen(side, callback){
        this.toggles[side].open.off.push(callback)
    }

    onFold(side, callback){
        this.toggles[side].fold.on.push(callback)
    }

    offFold(side, callback){
        this.toggles[side].fold.off.push(callback)
    }

    toggleOpen(){

        this.open = !this.open;
    }

    toggleFold(){
        this.fold = !this.fold;
    }

    toggleOpen(side){
        this.side = side
        this.open = !this.open;
        this.aside &&(this.aside.isOpen = this.open)
        this.openChanged(this.open)
    }

    toggleFold(side){
        this.side = side
        this.fold = !this.fold;
        this.aside &&(this.aside.isFolded = this.fold)
        this.foldChanged(this.open)
    }

    openChanged(value){
        let callbacks = value ? this.toggles[this.side].open.on : this.toggles[this.side].open.off;
        this.runCallBacks(callbacks)
    }

    foldChanged(value){
        let callbacks = value ? this.toggles[this.side].fold.on : this.toggles[this.side].fold.off;
        this.runCallBacks(callbacks)
    }

    runCallBacks(callbacks){
        for(let cb of callbacks){
            cb()
        }
    }

}
