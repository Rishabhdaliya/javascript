class Cakes {
  constructor(flavor, weight, year) {
    this.flavor = flavor;
    this.weight = weight ? weight : 2;
    this.year = year ? year : 1;
  }
  expireDate() {
    const date = new Date();
    return this.year - date.getFullYear();
  }
}

const cake1 = new Cakes('pineapple', 3, 2025);
const cake2 = new Cakes('black forest', 2, 2029);

console.log(cake2.expireDate());
