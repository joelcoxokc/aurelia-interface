let defaults = {
    side: 'left'
}
let barIndex = 0
let bars = {
    0:'left',
    1:'right'
}


export class BarService{

    constructor(){
        this.current = bars[barIndex]
        barIndex++
    }

}
