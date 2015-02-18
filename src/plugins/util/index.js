    import {AiClassAttachedBehavior} from './ai-class'
    import {AiElement} from './ai-element'

    function install(aurelia){

        aurelia.withResources([

            AiClassAttachedBehavior

        ]);

    }

    export {

        AiClassAttachedBehavior,
        AiElement,
        install

    };
