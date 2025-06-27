
function weekTemps(){
    this.dataStore = []
    this.add = this.add
    this.average = average
}

function add(temp){
    this.dataStore.push(temp)
}

function average(){
    let total = 0
    for(let i = 0; i < this.dataStore.length; ++i){
        total = total + this.dataStore[i]
    }
    return total / this.dataStore.length
}

let thisWeek = new weekTemps()
thisWeek.add(52)
thisWeek.add(55)
thisWeek.add(61)
thisWeek.add(52)
thisWeek.add(52)
thisWeek.add(52)
thisWeek.add(52)
thisWeek.add(52)