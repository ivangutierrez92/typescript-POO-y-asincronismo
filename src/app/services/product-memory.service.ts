import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { faker } from '@faker-js/faker';

export class productMemoryService {
  private products: Product[] = [];

  getAll() {
    return this.products;
  }

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      creationAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    };
    this.products.push(newProduct);
    return newProduct;
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }
  update = (id: Product['id'], changes: UpdateProductDto): Product => {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];
    this.products[index] = { ...prevData, ...changes };
    return this.products[index];
  };

  findOne(id: Product['id']) {
    return this.products.find((item) => item.id === id);
  }
}
