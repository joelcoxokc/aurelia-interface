var cwd = process.cwd();
var path = require('path');
var initJspm = require('../src/init');


describe('jspm plugin init', function(){
    var files, jspm, client;
    var basePath = ".";

    beforeEach(function(){
        files = [];
        jspm = {
            config: 'custom_config.js',
            loadFiles: ['src/**/*.js'],
            packages: 'custom_packages/',
            serveFiles: ['testfile.js']
        };
        client = {};

        initJspm(files, basePath, jspm, client);
    });

    it('should add adapter.js to the top of the files array', function(){
        expect(files[3].pattern).toEqual(cwd + '/src/adapter.js');
        expect(files[3].included).toEqual(true);
    });

    it('should add config.js to the top of the files array', function(){
        expect(files[2].pattern).toEqual(cwd + '/custom_config.js');
        expect(files[2].included).toEqual(true);
    });

    it('should add systemjs to the top of the files array', function(){
        expect(files[1].pattern).toEqual(cwd + '/custom_packages/system.js');
        expect(files[1].included).toEqual(true);
    });

    it('should add es6-module-loader to the top of the files array', function(){
        expect(files[0].pattern).toEqual(cwd + '/custom_packages/es6-module-loader.js');
        expect(files[0].included).toEqual(true);
    });

    it('should add files from jspm.loadFiles to client.expandedFiles', function(){
        expect(client.jspm.expandedFiles).toEqual(['src/adapter.js', 'src/init.js']);
    });

    it('should add files from jspm.serveFiles to the end of the files array as served files', function(){
        expect(files[files.length - 1].pattern).toEqual(cwd + '/testfile.js');
        expect(files[files.length - 1].included).toEqual(false);
        expect(files[files.length - 1].served).toEqual(true);
        expect(files[files.length - 1].watched).toEqual(true);
    });

    it('should use the configured jspm_packages path and include it in the files array', function(){
        expect(files[4].pattern).toEqual(path.resolve(cwd, './custom_packages/**/*'));
        expect(files[4].included).toEqual(false);
        expect(files[4].served).toEqual(true);
        expect(files[4].watched).toEqual(true);
    });

});
