export class TabsDemo {

  constructor () {
    this.selectedTabRef = 'tab-2'
  }

  showMyTab (tab) {
    tab.classList.add('active in')
  }

  hideMyTab (tab) {
    tab.classList.remove('active in')
  }
}