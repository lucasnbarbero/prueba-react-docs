import { IProduct } from "../domain/models/IProduct";
import ProductRepository from "../infrastructure/ProductRepository";

class ProductService {
  private _repository: ProductRepository;

  constructor() {
    this._repository = new ProductRepository();
  }

  public async getProducts(): Promise<IProduct[]> {
    return await this._repository.getProducts();
  }
}

export default ProductService;
