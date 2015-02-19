import {Behavior} from 'aurelia-templating';
import {TWO_WAY} from 'aurelia-framework';

export class AiTabsAttachedBehavior {
  static metadata () {
    return Behavior
      .withOptions().and( x => {
        x.withProperty('activeTabRef', 'tabRefChanged', 'active-tab-ref', false, TWO_WAY)
         .withProperty('_showTab', 'showTabChanged', 'show-tab')
         .withProperty('_hideTab', 'hideTabChanged', 'hide-tab')
      })
      .syncChildren('tabLinks', 'tabLinksChanged', '[ai-tab-link]')
      .noView()
    ;
  }

  static inject() {
    return [Element]
  }

  constructor (element) {
    this.element = element
    this.linkHandler = this._linkHandler.bind(this)
  }

  get tabs () {
    return Array.prototype.slice.call(this.element.querySelectorAll('[ai-tab]'))
  }

  get activeTabLink () {
    return this.tabLinks.find(x => x.getAttribute('href') === this.activeTabRef)
  }

  get activeTabContent () {
    return this.tabs.find(x => x.getAttribute('ai-tab') === this.activeTabRef)
  }

  setActiveTab (newTabRef, force = false) {
    if (force !== true && newTabRef == this.activeTabRef) return;
    this.activeTabRef = newTabRef

    this.tabs.forEach( tab => this.hideTab(tab) )

    if (newTabRef) {
      let newTab = this.element.querySelector(`[ai-tab="${newTabRef}"]`)

      if (newTab) {
        this.showTab(newTab)
        return newTab
      } else {
        throw new Error(`ai-tab element for ${newTabRef} not found`)
      }
    } else {
      this.activeTabRef = null
    }
  }

  bind () {
    this.element.classList.add('ai-tabs')
    this.bindLinks()
  }

  unbind () {
    this.unbindLinks()
  }

  attached () {
    this.setActiveTab(this.activeTabRef, true)
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
    let defaultShowTab = function () {
      tab.style.display = 'block';
    }.bind(this)

    if (typeof this._showTab === 'function') {
      this._showTab(this, defaultShowTab)
    } else {
      defaultShowTab()
    }
  }

  hideTab (tab) {
    let defaultHideTab = function () {
      tab.style.display = 'none';
    }.bind(this)
    
    if (typeof this._hideTab === 'function') {
      this._hideTab(this, defaultHideTab)
    } else {
      defaultHideTab()
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
