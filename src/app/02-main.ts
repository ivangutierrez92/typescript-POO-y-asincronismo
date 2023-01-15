import { productMemoryService } from './services/product-memory.service';

const productService = new productMemoryService();

productService.create({
  title: 'Producto 1',
  price: 100,
  description: 'blah blah',
  categoryId: 12,
  images: [],
});

const products = productService.getAll();
const productId = products[0].id;
productService.update(productId, {
  title: 'cambiar nombre',
});
const rta = productService.findOne(productId);
console.log(rta);
