/* */ 
"format register";
var hasTemplateElement = ('content' in document.createElement('template'));

function importElements(frag, link, callback) {
  document.head.appendChild(frag);

  if(window.Polymer && Polymer.whenReady){
    Polymer.whenReady(callback);
  }else{
    link.addEventListener('load', callback);
  }
}

export class Loader {
  static createDefaultLoader(){
    throw new Error('No default loader module imported.');
  }

  loadModule(id){
    throw new Error('Loaders must implement loadModule(id).');
  }

  loadAllModules(ids){
    throw new Error('Loader must implement loadAllModules(ids).');
  }

  loadTemplate(url){
    throw new Error('Loader must implement loadTemplate(url).');
  }

  importDocument(url){
    return new Promise((resolve, reject) => {
      var frag = document.createDocumentFragment();
      var link = document.createElement('link');

      link.rel = 'import';
      link.href = url;
      frag.appendChild(link);

      importElements(frag, link, () => resolve(link.import));
    });
  }

  importTemplate(url){
    return this.importDocument(url).then(doc => {
      return this.findTemplate(doc, url);
    });
  }

  findTemplate(doc, url){
    if(!hasTemplateElement){
      HTMLTemplateElement.bootstrap(doc);
    }

    var template = doc.querySelector('template');

    if(!template){
      throw new Error(`There was no template element found in '${url}'.`);
    }

    return template;
  }
}