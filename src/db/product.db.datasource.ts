import { OrmRepository } from 'typeorm-typedi-extensions';
import { Repository, getRepository } from 'typeorm';
import { Product } from '../graphql/api/Product/Product.type';
import { Products } from '../entities/Products';

export class ProductDbDataSource {

    @OrmRepository(Product) private dbOrmRepository = getRepository(Products);
    
    async getAllProducts(): Promise<Product[]> {
        console.log(this.dbOrmRepository);
        return await this.dbOrmRepository.find();
    }
    
}