const owner = 'goku'
const address = 'isla'

function dogGreeting(owner, address){
    console.log(`Hi, im ${this.dogname} i live with ${owner} on ${address}`)
}

const house = {
    dogname: 'krilin'
}

// call
dogGreeting.call(house, owner, address)

// apply
const arr = [owner, address]

dogGreeting.apply(house, arr)

dogGreeting.bind(house, owner, address)()