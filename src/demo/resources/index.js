import {Markdown} from './markdown';
import {Source} from './source';
import {Example} from './example';
import {ExampleContext} from './example-context'
import {Column} from './column';
import {File} from './file';
import {Demo} from './demo';

export function install(aurelia) {
  aurelia.withResources(Markdown, Source, Demo);

  // aurelia.container.registerInstance(
    // ExampleContext,
    // new ExampleContext('https://github.com/jdanyow/aurelia-converters-sample/blob/gh-pages'))
  aurelia.withResources(Markdown, Source, Example, Column, File, Demo);
}
