import { Category } from '../models/category.model';
import axios from 'axios';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';

export class BaseHttpService<t> {
  //data: t[] = [];

  constructor(protected url: string) {}

  async getAll() {
    const { data } = await axios.get<t[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

(async () => {
  const productService = new BaseHttpService<Product>(
    'https://api.escuelajs.co/api/v1/products'
  );
  const rta = await productService.getAll();
  console.log('products', rta.length);
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'new title',
  });

  const categoryService = new BaseHttpService<Category>(
    'https://api.escuelajs.co/api/v1/categories'
  );
  const rta2 = await categoryService.getAll();
  console.log(rta2);
})();
