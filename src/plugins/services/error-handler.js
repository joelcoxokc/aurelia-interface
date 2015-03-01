import {PluginHandler} from './plugin-handler';

export class ErrorHandler{

    static inject(){
        return [PluginHandler];
    }

    constructor(pluginsHandler){
        this.pluginsHandler = pluginsHandler
        this.prefixes = 'Activator'
    }
    new(type, name, message){
        this.pluginsHandler.plugins[name].create(type, name, message)
    }


}
