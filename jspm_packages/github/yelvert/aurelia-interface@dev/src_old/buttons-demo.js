export class ButtonsDemo {
  constructor (http) {
    this.heading = 'Buttons Demo';

    this.radioOptions = [
      {name: 'First'},
      {name: 'Second'},
      {name: 'Third'}
    ]
  }

  checkboxChanged (newVal) {
    alert(newVal ? 'Checked' : 'Unchecked')
  }
}
