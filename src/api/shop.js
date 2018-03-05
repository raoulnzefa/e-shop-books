const _products = [
  {"id": 1, "img": "static/1.jpg", "title": "Java - efficient programming", "body": "Lorem ipsum dolor sit amet. Ipsam voluptatem, quia consequuntur magni dolores et accusamus. Voluptatibus maiores alias consequatur aut rerum hic tenetur a sapiente. Omnis voluptas sit, amet, consectetur, adipisci velit, sed ut aut officiis debitis. Officia deserunt mollitia animi, id est eligendi optio cumque. Omnis dolor repellendus iure reprehenderit, qui blanditiis praesentium voluptatum.", "price": 12.09, "inventory": 12},
  {"id": 2, "img": "static/2.jpg", "title": "Python", "price": 6.53, "body": "Lorem ipsum dolor sit amet. Ipsam voluptatem, quia consequuntur magni dolores et accusamus. Voluptatibus maiores alias consequatur aut rerum hic tenetur a sapiente. Omnis voluptas sit, amet, consectetur, adipisci velit, sed ut aut officiis debitis. Officia deserunt mollitia animi, id est eligendi optio cumque. Omnis dolor repellendus iure reprehenderit, qui blanditiis praesentium voluptatum.", "inventory": 10},
  {"id": 3, "img": "static/3.jpg", "title": "JavaScript the strengths", "body": "Lorem ipsum dolor sit amet. Ipsam voluptatem, quia consequuntur magni dolores et accusamus. Voluptatibus maiores alias consequatur aut rerum hic tenetur a sapiente. Omnis voluptas sit, amet, consectetur, adipisci velit, sed ut aut officiis debitis. Officia deserunt mollitia animi, id est eligendi optio cumque. Omnis dolor repellendus iure reprehenderit, qui blanditiis praesentium voluptatum.", "price": 25.50, "inventory": 8},
  {"id": 4, "img": "static/4.jpg", "title": "Basics of C++", "body": "Lorem ipsum dolor sit amet. Ipsam voluptatem, quia consequuntur magni dolores et accusamus. Voluptatibus maiores alias consequatur aut rerum hic tenetur a sapiente. Omnis voluptas sit, amet, consectetur, adipisci velit, sed ut aut officiis debitis. Officia deserunt mollitia animi, id est eligendi optio cumque. Omnis dolor repellendus iure reprehenderit, qui blanditiis praesentium voluptatum.", "price": 4.99, "inventory": 18},
  {"id": 5, "img": "static/5.jpg", "title": "C#", "price": 24.39, "body": "Lorem ipsum dolor sit amet. Ipsam voluptatem, quia consequuntur magni dolores et accusamus. Voluptatibus maiores alias consequatur aut rerum hic tenetur a sapiente. Omnis voluptas sit, amet, consectetur, adipisci velit, sed ut aut officiis debitis. Officia deserunt mollitia animi, id est eligendi optio cumque. Omnis dolor repellendus iure reprehenderit, qui blanditiis praesentium voluptatum.", "inventory": 4},
  {"id": 6, "img": "static/6.jpg", "title": "JavaScript ES6", "body": "Lorem ipsum dolor sit amet. Ipsam voluptatem, quia consequuntur magni dolores et accusamus. Voluptatibus maiores alias consequatur aut rerum hic tenetur a sapiente. Omnis voluptas sit, amet, consectetur, adipisci velit, sed ut aut officiis debitis. Officia deserunt mollitia animi, id est eligendi optio cumque. Omnis dolor repellendus iure reprehenderit, qui blanditiis praesentium voluptatum.", "price": 17.50, "inventory": 12},
]


export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      //simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  },
  filteredList(products) {
    return products.filter(product => product.isAvailable)
  }
}
