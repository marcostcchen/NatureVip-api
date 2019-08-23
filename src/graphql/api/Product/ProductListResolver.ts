import { Resolver, Query } from 'type-graphql';
import { ProductDbDataSource } from '../../../db/product.db.datasource';
import { Product } from './Product.type';

@Resolver()
export class ProductListResolver{

    constructor(private readonly productDbRepository: ProductDbDataSource) {}

    @Query(returns => [Product])
    productList() {
        console.log(this.productDbRepository)
        return this.productDbRepository.getAllProducts();
    }
}

