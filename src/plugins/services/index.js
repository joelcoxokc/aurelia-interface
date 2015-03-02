    import {AiClassAttachedBehavior} from './ai-class'
    import {ToggleRegistry} from './toggler'

    function install(aurelia){

        aurelia.withResources([
            AiClassAttachedBehavior

        ]);

    }

    export {
        AiClassAttachedBehavior,
        install

    };
