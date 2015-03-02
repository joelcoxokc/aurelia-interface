    import {AiAside}  from './ai-aside'
    import {AiBody}   from './ai-body'
    import {AiBar}    from './ai-bar'
    import {AiMain}   from './ai-main'
    import {AiFooter} from './ai-footer'
    import {AiHeader} from './ai-header'
    import {AiAsideAttachedBehavior}  from './ai-aside-attribute'
    import {AiBodyAttachedBehavior}  from './ai-body-attribute'
    import {AiMainAttachedBehavior}  from './ai-main-attribute'
    import {AiFooterAttachedBehavior}  from './ai-footer-attribute'
    import {AiHeaderAttachedBehavior}  from './ai-header-attribute'



    function install(aurelia){

        aurelia.withResources([
            AiAside,
            AiBar,
            AiBody,
            AiMain,
            AiFooter,
            AiHeader,
            AiAsideAttachedBehavior,
            AiBodyAttachedBehavior,
            AiMainAttachedBehavior,
            AiFooterAttachedBehavior,
            AiHeaderAttachedBehavior,
        ]);

    }

    export {
        AiAside,
        AiBar,
        AiBody,
        AiMain,
        AiFooter,
        AiHeader,
        AiAsideAttachedBehavior,
        AiBodyAttachedBehavior,
        AiMainAttachedBehavior,
        AiFooterAttachedBehavior,
        AiHeaderAttachedBehavior,
        install
    };
