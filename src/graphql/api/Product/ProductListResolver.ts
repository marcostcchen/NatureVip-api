import { Resolver, Query } from 'type-graphql';
import { Product } from './Product.type';
import { getRepository } from 'typeorm';
import { Products } from '../../../entities/Products';

@Resolver()
export class ProductListResolver{

    private productDbRepository = getRepository(Products)

    @Query(returns => [Product])
    async productList() {
        return await this.productDbRepository.find();
    }
}

