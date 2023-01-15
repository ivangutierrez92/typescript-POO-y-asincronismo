import { ProductHttpService } from './services/product-http.service';

(async () => {
  const productService = new ProductHttpService();
  try {
    console.log('--'.repeat(10));

    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map((item) => item.price));

    const productId = products[0].id;
    await productService.update(productId, {
      price: 10000,
      title: 'nuevo title',
      description: 'new description',
    });
    console.log('--'.repeat(10));
    console.log('find one');
    const product = await productService.findOne(productId);
    console.log(product);
  } catch (error) {
    console.error(error);
  }
})();
