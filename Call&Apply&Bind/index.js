function Product(name,price) {
    this.name = name
    this.price = price


    if( price < 0) {
        throw RangeError('Cannot Create product ' + this.name + 'With a negative price')
    }
    return this
}
const result = Product('Caneta', 20)
console.log(result);
