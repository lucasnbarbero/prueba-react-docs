import HttpService from "../../services/http";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

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
