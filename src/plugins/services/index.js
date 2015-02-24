    import {AiClassAttachedBehavior} from './ai-class'
    import {ToggleRegistry} from './toggle-registry'

    function install(aurelia){

        aurelia.withResources([
            ToggleRegistry,
            AiClassAttachedBehavior

        ]);

    }

    export {
        ToggleRegistry,
        AiClassAttachedBehavior,
        install

    };
