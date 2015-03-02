import {Behavior} from 'aurelia-framework';
import {ExampleContext} from './example-context';

var extensionLanguageMap = {
  js: 'javascript',
  html: 'markup'
};

function getLanguage(filename) {
  var extension = (/\.(\w+)$/).exec(filename)[1].toLowerCase();
  return extensionLanguageMap[extension];
}

export class File {
  static metadata() {
    return Behavior
      .customElement('file')
      .withProperty('src', 'propertyChanged')
      .withProperty('view', 'propertyChanged')
      .withProperty('model', 'propertyChanged');
  }

  static inject() { return [ExampleContext]; }
  constructor( context) {
    this.context = context;
    this.info = null;
  }

  propertyChanged() {
    var src = this.src, context = this.context, example = context.example;
    this.info = {
      name: src,
      moduleId: context.base + '/' + src.substr(0, src.indexOf('.')),
      language: getLanguage(src),
      url: 'src/' + context.base + '/' + src,
      repoUrl: context.githubBase + '/src/' + context.base + '/' + src
    };
    if (this.view === 'true')
      example.view = this.info;

    if (this.model === 'true')
      example.model = this.info;

    example.result = example.view && example.model;
  }
}
