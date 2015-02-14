// /*!
//  * Waves v0.6.0
//  * http://fian.my.id/Waves
//  *
//  * Copyright 2014 Alfiana E. Sibuea and other contributors
//  * Released under the MIT license
//  * https://github.com/fians/Waves/blob/master/LICENSE
//  */

// import {Behavior} from 'aurelia-templating'



// /* uses an integer rather than bool so there's no issues with
//  * needing to clear timeouts if another touch event occurred
//  * within the 500ms. Cannot mouseup between touchstart and
//  * touchend, nor in the 500ms after touchend. */

// export class TouchHandler{

//     constructor(){
//         var _this = this
//         this.touches = 0
//     }
//     allowEvent(e) {
//         var allow = true;

//         if (e.type === 'touchstart') {
//             _this.touches += 1; //push
//         } else if (e.type === 'touchend' || e.type === 'touchcancel') {
//             setTimeout(function() {
//                 if (_this.touches > 0) {
//                     _this.touches -= 1; //pop after 500ms
//                 }
//             }, 500);
//         } else if (e.type === 'mousedown' && _this.touches > 0) {
//             allow = false;
//         }

//         return allow;
//     }

//     touchup(e) {

//         _this.allowEvent(e);
//     }
// }




// export class Effect extends TouchHandler{

//     constructor(){
//         var _this = this
//         this.duration = 750
//     }
//     show(e, element) {
//         console.log(this)
//         var _this = this;
//         if (e.button === 2) {
//             return false;
//         }

//         var el = element || this;

//         // Create ripple
//         var ripple = document.createElement('div');
//         ripple.className = 'waves-ripple';
//         el.appendChild(ripple);

//         // Get click coordinate and element witdh
//         var pos         = offset(el);
//         var relativeY   = (e.pageY - pos.top);
//         var relativeX   = (e.pageX - pos.left);
//         var scale       = 'scale('+((el.clientWidth / 100) * 3)+')';

//         // Support for touch devices
//         if ('touches' in e) {
//           relativeY   = (e.touches[0].pageY - pos.top);
//           relativeX   = (e.touches[0].pageX - pos.left);
//         }

//         // Attach data to element
//         ripple.setAttribute('data-hold', Date.now());
//         ripple.setAttribute('data-scale', scale);
//         ripple.setAttribute('data-x', relativeX);
//         ripple.setAttribute('data-y', relativeY);

//         // Set ripple position
//         var rippleStyle = {
//             'top': relativeY+'px',
//             'left': relativeX+'px'
//         };

//         ripple.className = ripple.className + ' waves-notransition';
//         ripple.setAttribute('style', _this.convertStyle(rippleStyle));
//         ripple.className = ripple.className.replace('waves-notransition', '');

//         // Scale the ripple
//         rippleStyle['-webkit-transform'] = scale;
//         rippleStyle['-moz-transform'] = scale;
//         rippleStyle['-ms-transform'] = scale;
//         rippleStyle['-o-transform'] = scale;
//         rippleStyle.transform = scale;
//         rippleStyle.opacity   = '1';

//         rippleStyle['-webkit-transition-duration'] = _this.duration + 'ms';
//         rippleStyle['-moz-transition-duration']    = _this.duration + 'ms';
//         rippleStyle['-o-transition-duration']      = _this.duration + 'ms';
//         rippleStyle['transition-duration']         = _this.duration + 'ms';

//         ripple.setAttribute('style', _this.convertStyle(rippleStyle));
//     }
//     hide(){
//         var _this = this;
//         _this.touchup(e);

//         var el = this;
//         var width = el.clientWidth * 1.4;

//         // Get first ripple
//         var ripple = null;
//         var ripples = el.getElementsByClassName('waves-ripple');
//         if (ripples.length > 0) {
//             ripple = ripples[ripples.length - 1];
//         } else {
//             return false;
//         }

//         var relativeX   = ripple.getAttribute('data-x');
//         var relativeY   = ripple.getAttribute('data-y');
//         var scale       = ripple.getAttribute('data-scale');

//         // Get delay beetween mousedown and mouse leave
//         var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
//         var delay = 350 - diff;

//         if (delay < 0) {
//             delay = 0;
//         }

//         // Fade out ripple after delay
//         setTimeout(function(e) {
//             var style = {
//                 'top': relativeY+'px',
//                 'left': relativeX+'px',
//                 'opacity': '0',

//                 // Duration
//                 '-webkit-transition-duration': _this.duration + 'ms',
//                 '-moz-transition-duration': _this.duration + 'ms',
//                 '-o-transition-duration': _this.duration + 'ms',
//                 'transition-duration': _this.duration + 'ms',
//                 '-webkit-transform': scale,
//                 '-moz-transform': scale,
//                 '-ms-transform': scale,
//                 '-o-transform': scale,
//                 'transform': scale,
//             };

//             ripple.setAttribute('style', _this.convertStyle(style));

//             setTimeout(function() {
//                 try {
//                     el.removeChild(ripple);
//                 } catch(e) {
//                     return false;
//                 }
//             }, _this.duration);
//         }, delay);
//     }

//     wrapInput(elements){
//         var _this = this;
//         for (var a = 0; a < elements.length; a++) {
//             var el = elements[a];

//             if (el.tagName.toLowerCase() === 'input') {
//                 var parent = el.parentNode;

//                 // If input already have parent just pass through
//                 if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
//                     continue;
//                 }

//                 // Put element class and style to the specified parent
//                 var wrapper = document.createElement('i');
//                 wrapper.className = el.className + ' waves-input-wrapper';

//                 var elementStyle = el.getAttribute('style');

//                 if (!elementStyle) {
//                     elementStyle = '';
//                 }

//                 wrapper.setAttribute('style', elementStyle);

//                 el.className = 'waves-button-input';
//                 el.removeAttribute('style');

//                 // Put element as child
//                 parent.replaceChild(wrapper, el);
//                 wrapper.appendChild(el);
//             }
//         }
//     }
// }


// export class UiWavesCustomElement extends Effect{

//     static metadata(){
//         return Behavior
//             // .attachedBehavior('ui-waves')
//             .withProperty('display-effect')
//             .withProperty('attach')
//             .withProperty('effect')
//     }

//     static inject(){

//         return [Element]

//     }

//     constructor(element){
//         var _this = this;
//         this.element = element;
//         this.waves  = this.waves || {};

//         this.$$ = document.querySelectorAll.bind(document);


//         this.isWindow = function(obj){
//             return obj !== null && obj === obj.window;
//         }


//         this.getWindow = function(elem){
//             return this.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
//         }


//         this.offest = function(elem){
//             var docElem, win,
//             box = {top: 0, left: 0},
//             doc = elem && elem.ownerDocument;

//             docElem = doc.documentElement;

//             if (typeof elem.getBoundingClientRect !== typeof undefined) {
//                 box = elem.getBoundingClientRect();
//             }
//             win = this.getWindow(doc);
//             return {
//                 top: box.top + win.pageYOffset - docElem.clientTop,
//                 left: box.left + win.pageXOffset - docElem.clientLeft
//             };
//         }


//         this.convertStyle = function(){
//             var style = '';

//             for (var a in obj) {
//                 if (obj.hasOwnProperty(a)) {
//                     style += (a + ':' + obj[a] + ';');
//                 }
//             }

//             return style;
//         }

//         this.showEffect = function(e) {
//             var element = this.getWavesEffectElement(e);

//             if (element !== null) {
//                 _this.show(e, element);

//                 if ('ontouchstart' in window) {
//                     element.addEventListener('touchend', _this.hide, false);
//                     element.addEventListener('touchcancel', _this.hide, false);
//                 }

//                 element.addEventListener('mouseup', _this.hide, false);
//                 element.addEventListener('mouseleave', _this.hide, false);
//             }
//         }

//         /**
//          * Delegated click handler for .waves-effect element.
//          * returns null when .waves-effect element not in "click tree"
//          */
//         this.getWavesEffectElement = function(e) {
//             if (_this.allowEvent(e) === false) {
//                 return null;
//             }

//             var element = null;
//             var target = e.target || e.srcElement;

//             while (target.parentElement !== null) {
//                 if (target.className.indexOf('waves-effect') !== -1) {
//                     element = target;
//                     break;
//                 }
//                 target = target.parentElement;
//             }

//             return element;
//         }

//     }

//     /**
//      * Bubble the click and show effect if .waves-effect elem was found
//      */


//     displayEffect(options) {
//         var _this = this;
//         options = options || {};

//         if ('duration' in options) {
//             this.duration = options.duration;
//         }

//         //Wrap input inside <i> tag
//         this.wrapInput(this.$$('.waves-effect'));

//         if ('ontouchstart' in window) {
//             document.body.addEventListener('touchstart', this.showEffect, false);
//         }

//         document.body.addEventListener('mousedown', this.showEffect, false);
//     }

//     /**
//      * Attach Waves to an input element (or any element which doesn't
//      * bubble mouseup/mousedown events).
//      *   Intended to be used with dynamically loaded forms/inputs, or
//      * where the user doesn't want a delegated click handler.
//      */

//     attach(element){
//         var _this = this;
//         //FUTURE: automatically add waves classes and allow users
//         // to specify them with an options param? Eg. light/classic/button
//         if (element.tagName.toLowerCase() === 'input') {
//             this.wrapInput([element]);
//             element = element.parentElement;
//         }

//         if ('ontouchstart' in window) {
//             element.addEventListener('touchstart', showEffect, false);
//         }

//         element.addEventListener('mousedown', showEffect, false);
//     }

// }
