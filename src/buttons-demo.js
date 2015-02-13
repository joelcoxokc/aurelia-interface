export class ButtonsDemo {
  constructor (http) {
    this.heading = 'Buttons Demo';
  }

  checkboxChanged (newVal) {
    alert(newVal ? 'Checked' : 'Unchecked')
  }
}
