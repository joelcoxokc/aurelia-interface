import {Behavior} from 'aurelia-templating';

export class AiTabsAttachedBehavior {
  static metadata () {
    return Behavior
      .withProperty('_showTab', 'showTabChanged', 'ai-show-tab')
      .withProperty('_hideTab', 'hideTabChanged', 'ai-hide-tab')
      .withProperty('activeTabRef', 'tabRefChanged', 'ai-tabs').and( x => x.bindingIsTwoWay() )
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
    this.bindLinks()
    
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
    this.setActiveTab($event.target.getAttribute('href'))
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

  showTabChanged () {
    console.log('showTabChanged', arguments)
  }
  hideTabChanged () {
    console.log('hideTabChanged', arguments)
  }
}
