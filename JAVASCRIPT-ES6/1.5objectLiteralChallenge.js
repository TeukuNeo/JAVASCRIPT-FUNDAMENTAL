
//OBEJCT LITERAL CHALLENGE

function addressMaker(address){
    const {city, state} = address
    const newAddress = {
        city,
        state,
        country: 'Indonesia'
    }
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}
addressMaker({city: 'Medan', state: 'sumut'})

