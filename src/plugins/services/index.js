    import {AiClassAttachedBehavior} from './ai-class'
    import {ToggleRegistry} from './toggler'

    function install(aurelia){

        aurelia.withResources([
            Toggler,
            AiClassAttachedBehavior

        ]);

    }

    export {
        Toggler,
        AiClassAttachedBehavior,
        install

    };
