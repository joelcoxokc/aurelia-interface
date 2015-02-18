    import {aInterface} from './a-interface'

    function install(aurelia){

        aurelia.withResources([
            AInterface
        ]);

    }

    export {
        AInterface,
        install
    };
