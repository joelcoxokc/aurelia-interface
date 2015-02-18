import {Behavior} from 'aurelia-templating';

export class AiTabsAttachedBehavior {
  static metadata () {
    return Behavior
      .withProperty('activeTabRef', 'tabRefChanged', 'ai-tabs').and( x => x.bindingIsTwoWay() )
      .withProperty('_showTab', 'showTabChanged', 'ai-show-tab')
      .withProperty('_hideTab', 'hideTabChanged', 'ai-hide-tab')
      .syncChildren('tabLinks', 'tabLinksChanged', '[ai-tab-link]')
      .noView()
    ;
  }

  static inject() {
    return [Element];
  }

  constructor (element) {
    this.element = element
    this.linkHandler = this._linkHandler.bind(this)
  }

  get tabs () {
    return Array.prototype.slice.call(this.element.querySelectorAll('[ai-tab]'))
  }

  setActiveTab (newTabRef) {

    if (newTabRef == this.activeTabRef) return;

    this.tabs.forEach( tab => this.hideTab(tab) )

    if (newTabRef) {
      let newTab = this.element.querySelector(`[ai-tab="${newTabRef}"]`)

      if (newTab) {
        this.showTab(newTab)
        this.activeTabRef = newTabRef
        return newTab
      } else {
        throw new Error(`ai-tab element for ${newTabRef} not found`)
      }
    } else {
      this.activeTabRef = null
    }
  }

  bind () {
    this.activeTabRef = 'tab-3'
    this.element.classList.add('ai-tabs')
    this.linksContainer = this.element.querySelector('.ai-nav-tabs')
    this.slider         = $('<div class="ai-tab-slider">')
    this.sliderWidth    = 100 / this.tabLinks.length
    this._setSliderWidth();
    this.bindLinks()

    $(this.linksContainer).append(this.slider)

  }

  unbind () {
    this.unbindLinks()
  }

  tabLinksChanged () {
    this.bindLinks()
  }

  bindLinks () {
    this.unbindLinks

    this.tabLinks.forEach(link => {
      link.addEventListener('click', this.linkHandler, false)
    })
  }

  unbindLinks () {
    this.tabLinks.forEach(link => {
      link.removeEventListener('click', this.linkHandler, false)
    })
  }

  _linkHandler ($event) {
    $event.preventDefault()
    console.log($event.target.offsetLeft)
    this._setSliderPosition($event.target.offsetLeft)
    this.setActiveTab($event.target.getAttribute('href'))
  }

  _setSliderPosition(position){
    this._setSliderWidth()
    this.slider.css('left',position)
  }
  _setSliderWidth(){
    var _this = this;
    this.slider.css('width', _this.sliderWidth+10 + '%')
    setTimeout(function(){
      _this.slider.css('width', _this.sliderWidth + '%')
    }, 200)

  }

  showTab (tab) {
    if (typeof this._showTab === 'function') {
      this._showTab(tab)
    } else {
      tab.style.display = 'block'
    }
  }

  hideTab (tab) {
    if (typeof this._hideTab === 'function') {
      this._hideTab(tab)
    } else {
      tab.style.display = 'none'
    }
  }

  tabRefChanged () {
    console.log('tabRefChanged', arguments)
  }

  showTabChanged () {
    console.log('showTabChanged', arguments)
  }

  hideTabChanged () {
    console.log('hideTabChanged', arguments)
  }
}
