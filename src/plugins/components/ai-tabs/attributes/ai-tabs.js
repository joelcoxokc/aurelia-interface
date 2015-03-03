import {Behavior} from 'aurelia-templating';
import {TWO_WAY} from 'aurelia-framework';

export class AiTabsAttachedBehavior {
  static metadata () {
    return Behavior
      .withOptions().and( x => {
          x.withProperty('activeTab', 'tabChanged'    , 'active-tab')
          .withProperty('_showTab'  , 'showTabChanged', 'show-tab')
          .withProperty('_hideTab'  , 'hideTabChanged', 'hide-tab')
          .withProperty('waves'      , 'wavesChanged'   , 'waves')
          .withProperty('text'      , 'textChanged'   , 'text')
          .withProperty('bg'        , 'bgChanged'     , 'bg')
      })
      .syncChildren('links', 'linksChanged', '[tab-ref]')
      .noView()
    ;
  }

  static inject() {
    return [Element]
  }

  constructor (element) {
    this.element = element
    this.linkHandler = this._linkHandler.bind(this);
  }

  get panes () {
    return Array.prototype.slice.call(this.element.querySelectorAll('[ai-tab]'));
  }

  get getActiveTab(){
    return this.links && this.links[0].getAttribute('tab-ref');
  }

  get activeLink () {
    return this.links.find(x => x.getAttribute('tab-ref') === this.activeTab) || this.links[0];
  }

  get activePane () {
    return this.panes.find(x => x.getAttribute('ai-tab') === this.activeTab) || this.panes[0];
  }

  attached () {
    console.log('bind');
    this.activeTab = this.activeTab || this.getActiveTab
    this.activeLink &&this.setActiveTab(this.activeLink, true);
  }

  bind () {
    this.element.classList.add('ai-tabs');
    console.log('attached');
    this.bindLinks();
    this.bindPanes();
    this.setBorder();
    var classList = [];
    this.bg && classList.push(this.bg)
    this.text && classList.push(this.text)
    var tabsContainer = this.element.getElementsByClassName('ai-nav-tabs')[0];
    tabsContainer.classList.add.apply(tabsContainer.classList, classList);
  }

  bindLinks () {
    if(!this.links) return
    this.unbindLinks

    this.links.forEach(link => {
      link.addEventListener('click', this.linkHandler, false)
    });
  }

  bindPanes(){
    if(!this.panes) {return}
    this.panes.forEach((pane)=>{
      pane.classList.add('tab-pane', 'fade');
    })

  }

  unbind () {
    this.unbindLinks()
  }

  unbindLinks () {
    if(!this.links) return
    this.links.forEach(link => {
      link.removeEventListener('click', this.linkHandler, false)
    })
  }

  setActiveTab (newActiveLink, force = false) {
    var activeTab = newActiveLink.getAttribute('tab-ref');

    if (force !== true && activeTab == this.activeTab) return;
    this.hideTab();
    this.activeTab = activeTab;


    this.activeLink &&( this.activeLink.parentElement.classList.add('active'))

    return activeTab;
  }

  linksChanged () {
    this.bindLinks();
  }

  _linkHandler ($event) {
    $event.preventDefault()
    this.setActiveTab($event.target)
  }

  showTab () {
    if(this.activeLink){
      this.activeLink.classList.add('active')
      this.activePane.classList.add('active', 'in')
    }
  }

  hideTab () {
    this.activeLink.classList.remove('active')
    this.activePane.classList.remove('active', 'in')
  }

  tabChanged (value) {
    this[value ? 'showTab' : 'hideTab']();
    this.updateTabSliderPosition()
    // console.log('tabRefChanged', arguments)
  }

  showTabChanged () {
    // console.log('showTabChanged', arguments)
  }


  hideTabChanged () {
    // console.log('hideTabChanged', arguments)
  }


  setBorder(){
    this.borderElement = this.borderElement || this.element.getElementsByClassName('ai-tab-slider')[0] || this.createBorder()
    var nav = this.element.getElementsByClassName('ai-nav-tabs')[0]
    nav.appendChild(this.borderElement);

    this.updateTabSliderPosition();
  }
  createBorder(){
    var classList = ['ai-tab-slider'];
    var border = document.createElement('DIV');
    this.border && classList.push(this.border)
    border.classList.add.apply(border.classList, classList);
    return border;
  }

  updateTabSliderPosition () {

      let sliderWidth = 100 / this.links.length

      this.borderElement.style.width = sliderWidth + 10 + '%';
      this.activeLink&& ( this.borderElement.style.left = this.activeLink.offsetLeft + 'px' )

      setTimeout(()=>{
          this.borderElement.style.width = sliderWidth + '%';
      }, 200)

      // next()

  }
}
