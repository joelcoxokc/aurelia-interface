/* */ 
"format register";
import {BindingLanguage} from 'aurelia-templating';
import {Parser, ObserverLocator, BindingExpression, NameExpression, ONE_WAY} from 'aurelia-binding';
import {SyntaxInterpreter} from './syntax-interpreter';

var info = {};

export class TemplatingBindingLanguage extends BindingLanguage {
  static inject() { return [Parser, ObserverLocator,SyntaxInterpreter]; }
	constructor(parser, observerLocator, syntaxInterpreter){
    this.parser = parser;
    this.observerLocator = observerLocator;
    this.syntaxInterpreter = syntaxInterpreter;
    this.interpolationRegex = /\${(.*?)}/g;
    syntaxInterpreter.language = this;
    this.attributeMap = syntaxInterpreter.attributeMap = {
      'class':'className',
      'for':'htmlFor'
    };
  }

  inspectAttribute(resources, attrName, attrValue){
    var parts = attrName.split('.');

    info.defaultBindingMode = null;

    if(parts.length == 2){
      info.attrName = parts[0].trim();
      info.attrValue = attrValue;
      info.command = parts[1].trim();
      info.expression = null;
    }else if(attrName == 'ref'){
      info.attrName = attrName;
      info.attrValue = attrValue;
      info.command = null;
      info.expression = new NameExpression(attrValue, 'element');
    }else{
      info.attrName = attrName;
      info.attrValue = attrValue;
      info.command = null;
      info.expression = this.parseContent(resources, attrName, attrValue);
    }

    return info;
  }

	createAttributeInstruction(resources, element, info, existingInstruction){
    var instruction;

    if(info.expression){
      if(info.attrName === 'ref'){
        return info.expression;
      }

      instruction = existingInstruction || {attrName:info.attrName, attributes:{}};
      instruction.attributes[info.attrName] = info.expression;
    } else if(info.command){
      instruction = this.syntaxInterpreter.interpret(
        resources,
        element,
        info,
        existingInstruction
      );
    }

		return instruction;
	}

	parseText(resources, value){
    return this.parseContent(resources, 'textContent', value);
  }

  parseContent(resources, attrName, attrValue){
    var parts = attrValue.split(this.interpolationRegex), i, ii;
    if (parts.length <= 1) { //no expression found
      return null;
    }

    for(i = 0, ii = parts.length; i < ii; ++i){
      if (i % 2 === 0) {
        //do nothing
      } else {
        parts[i] = this.parser.parse(parts[i]);
      }
    }

    return new InterpolationBindingExpression(
      this.observerLocator,
      this.attributeMap[attrName] || attrName,
      parts, 
      ONE_WAY,
      resources.valueConverterLookupFunction,
      attrName
    );
  }
}

export class InterpolationBindingExpression {
  constructor(observerLocator, targetProperty, parts,
    mode, valueConverterLookupFunction, attribute){
    this.observerLocator = observerLocator;
    this.targetProperty = targetProperty;
    this.parts = parts;
    this.mode = mode;
    this.valueConverterLookupFunction = valueConverterLookupFunction;
    this.attribute = attribute;
    this.discrete = false;
  }

  createBinding(target){
    return new InterpolationBinding(
      this.observerLocator,
      this.parts,
      target,
      this.targetProperty,
      this.mode,
      this.valueConverterLookupFunction
      );
  }
}

class InterpolationBinding {
  constructor(observerLocator, parts, target, targetProperty, mode, valueConverterLookupFunction){
    this.observerLocator = observerLocator;
    this.parts = parts;
    this.targetProperty = observerLocator.getObserver(target, targetProperty);
    this.mode = mode;
    this.valueConverterLookupFunction = valueConverterLookupFunction;
    this.toDispose = [];
  }

  getObserver(obj, propertyName){
    return this.observerLocator.getObserver(obj, propertyName);
  }

  bind(source){
    this.source = source;

    if(this.mode == ONE_WAY){
      this.unbind();
      this.connect();
      this.setValue();
    }else{
      this.setValue();
    }
  }

  setValue(){
    var value = this.interpolate();
    this.targetProperty.setValue(value);
  }

  connect(){
    var info,
        parts = this.parts,
        source = this.source,
        toDispose = this.toDispose = [],
        i, ii;

    for(i = 0, ii = parts.length; i < ii; ++i){
      if (i % 2 === 0) {
        //do nothing
      } else {
        info = parts[i].connect(this, source);
        if(info.observer){
          toDispose.push(info.observer.subscribe(newValue =>{
            this.setValue();
          }));
        }
      }
    }
  }

  interpolate(){
    var value = '',
        parts = this.parts,
        source = this.source,
        valueConverterLookupFunction = this.valueConverterLookupFunction,
        i, ii, temp;

    for(i = 0, ii = parts.length; i < ii; ++i){
      if (i % 2 === 0) {
        value += parts[i];
      } else {
        temp = parts[i].evaluate(source, valueConverterLookupFunction);
        value += (typeof temp !== 'undefined' && temp !== null ? temp.toString() : '');
      }
    }

    return value;
  }

  unbind(){
    var i, ii, toDispose = this.toDispose;

    if(toDispose){
      for(i = 0, ii = toDispose.length; i < ii; ++i){
        toDispose[i]();
      }
    }

    this.toDispose = null;
  }
}