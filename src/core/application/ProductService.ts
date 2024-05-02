import ProductRepository from "../infrastructure/ProductRepository";

class ProductService {
  private _repository: ProductRepository;

  constructor() {
    this._repository = new ProductRepository();
  }

  public async getProducts() {
    const products = (await this._repository.getProducts()).map((p) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      image: p.image,
    }));

    return products;
  }
}

export default ProductService;
