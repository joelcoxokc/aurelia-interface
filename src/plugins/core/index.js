    import {aInterface} from './a-interface'

    function install(aurelia){

        aurelia.withResources([
            AiTogglerAttachedBehavior,
            AInterface
        ]);

    }

    export {
        AiTogglerAttachedBehavior,
        AInterface,
        install
    };
