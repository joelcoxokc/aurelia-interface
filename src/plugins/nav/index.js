    import {AiToolbar} from './ai-toolbar'
    import {Toolbar} from './toolbar'

    function install(aurelia){

        aurelia.withResources([

            AiToolbar,
            Toolbar

        ]);

    }

    export {

        AiToolbar,
        Toolbar,
        install

    };
