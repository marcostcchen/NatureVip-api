import { Resolver, Query } from 'type-graphql';
import { ProductDbDataSource } from '../../../db/product.db.datasource';
import { Product } from './Product.type';
import { getRepository } from 'typeorm';
import { Products } from '../../../entities/Products';

@Resolver()
export class ProductListResolver{

    private productDbRepository = getRepository(Products)

    @Query(returns => [Product])
    async productList() {
        console.log(await this.productDbRepository.find())
        return await this.productDbRepository.find();
    }
}

