import {Behavior} from 'aurelia-templating'

export class Demo{

    static metadata(){
        return Behavior
            .customElement('demo')
            .withProperty('sections')
            .withProperty('name')
    }

    static inject(){
        return [Element]
    }

    constructor(element){
        this.element = element
        this.element.classList.add('ai-section','row')
    }

    bind(){
        var _this = this;
        this.title = camelize(this.name, '-');
        this.camelName = camelize(this.name)

        this.sections = _.map(this.sections, (item, index)=>{
            if(!item.heading){
                item.tag && (item.heading = this.camelName + ' @ ' + item.tag)
                item.withProp &&(item.heading = this.camelName)
                item.useTitle &&(item.heading = this.title)
            } else {
                item.heading = item.name;
            }
            item.views = item.views || []
            return item
        })

        console.log(this.sections)

        function classify() {
            var name = _this.name.split('-');

            return name[1][0].toUpperCase() + name[1].slice(1);
        }

        function camelize(name, splitter){
            var name = _this.name.split('-');
            splitter = splitter || '';
            return name[0] + splitter+ classify(name[1]);

        }


    }
}
