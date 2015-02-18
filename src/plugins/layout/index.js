    import {AiAside}  from './ai-aside'
    import {AiBody}   from './ai-body'
    import {AiMain}   from './ai-main'
    import {AiFooter} from './ai-footer'
    import {AiHeader} from './ai-header'

    function install(aurelia){

        aurelia.withResources([
            AiAside,
            AiBody,
            AiMain,
            AiFooter,
            AiHeader
        ]);

    }

    export {

        AiAside,
        AiBody,
        AiMain,
        AiFooter,
        AiHeader,
        install

    };
