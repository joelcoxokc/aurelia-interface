    import {AiAside}  from './ai-aside'
    import {AiBody}   from './ai-body'
    import {AiMain}   from './ai-main'
    import {AiFooter} from './ai-footer'
    import {AiHeader} from './ai-header'
    import {AsideToggle} from './aside-toggle'


    import {AsideToggleAttachedBehavior} from './ai-aside-toggle'

    function install(aurelia){

        aurelia.withResources([
            AiAside,
            AiBody,
            AiMain,
            AiFooter,
            AiHeader,
            AsideToggleAttachedBehavior,
            AsideToggle
        ]);

    }

    export {

        AiAside,
        AiBody,
        AiMain,
        AiFooter,
        AiHeader,
        AsideToggleAttachedBehavior,
        AsideToggle,
        install

    };
