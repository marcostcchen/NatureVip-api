import { OrmRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import { Product } from '../graphql/api/Product/Product.type';

export class ProductDbDataSource {

    @OrmRepository(Product) private dbOrmRepository: Repository<Product>;
    
    async getAllProducts(): Promise<Product[]> {
        return await this.dbOrmRepository.find();
    }
    
}