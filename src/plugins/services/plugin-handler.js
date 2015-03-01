let classes = {
    'error': ErrorService
}

export class PluginHandler{
    constructor(){
        this.plugins = {};
    }

    register(name, plugin){

        this.plugins[name] = new Plugin(plugin);
    }
}


class Plugin{
    constructor(name, plugin){
        this.classed = _.classify(name);
        this.camel   = _.camelCase(name);
        this.kebab   = _.kebabCase(name);
        this.errors  = {};
        this.logs    = {};
    }

    create(type, name, message){
        this[type][name] = new ErrorService(this.classed, name, message);
    }
}


class ErrorService{

    constructor(classed, name, msg){
       this.message = `${classed}.${name}: ${msg}`
       return ()=>{
           console.error(this.message);
       }
    }
}
