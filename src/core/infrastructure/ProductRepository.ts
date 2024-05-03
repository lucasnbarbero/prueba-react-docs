import HttpService from "../../services/http";
import { IProduct } from "../domain/models/IProduct";

interface IProductRepository {
  getProducts(): Promise<IProduct[]>;
}

class ProductRepository implements IProductRepository {
  private _http: HttpService;

  constructor() {
    this._http = new HttpService("https://fakestoreapi.com/");
  }
  public async getProducts(): Promise<IProduct[]> {
    return (await this._http.get<IProduct[]>("/products")).data;
  }
}

export default ProductRepository;
