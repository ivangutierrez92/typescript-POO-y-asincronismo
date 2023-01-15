import { Category } from '../models/category.model';
import axios from 'axios';
import { Product } from '../models/product.model';

export class BaseHttpService<t> {
  //data: t[] = [];

  constructor(private url: string) {}

  async getAll() {
    const { data } = await axios.get<t[]>(this.url);
    return data;
  }
}

(async () => {
  const productService = new BaseHttpService<Product>(
    'https://api.escuelajs.co/api/v1/products'
  );
  const rta = await productService.getAll();
  console.log(rta);

  const categoryService = new BaseHttpService<Category>(
    'https://api.escuelajs.co/api/v1/categories'
  );
  const rta2 = await categoryService.getAll();
  console.log(rta2);
})();
