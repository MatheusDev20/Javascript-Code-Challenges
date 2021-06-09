const calcArea = (triangle) => {
  let area = 0.5 *( triangle.base * triangle.height)


  return area
}

function triangleFactory(base, height, side) {
  console.log(this)
  const triangle = {
    base,
    height: height,
    side
  }
  return triangle
}
function TriangleFactoryWithNew(base,height,side) {
  console.log(this)
  this.base = base
  this.height = height;
  this.side = side
}

const t1 = new TriangleFactoryWithNew(3,5,7)
const t1Area = calcArea(t1)
console.log(t1Area)