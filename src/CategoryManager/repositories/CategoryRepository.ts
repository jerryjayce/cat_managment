import models from '../../../database/sql/models';

const Sequelize = require('sequelize');
const {Op} = require('sequelize');


export class CategoryRepository {


    // static async fetch_categories(data: object, page_number: number = 1, page_size: number = 10): Promise<any> {
    static async fetch_categories(): Promise<any> {
        try {

            return await models.category.findAll(
                {
                    raw: true
                }
            );

        } catch (e) {
            throw new Error(`error fetching categories ${e}`);
        }

    }


    static async fetch_category_by_name(category_name: string): Promise<object> {
        try {

            return await models.category.findOne({
                where: {
                    category_name
                }
            });

        } catch (e) {
            throw new Error(`error fetching category${e}`);
        }

    }

    static async fetch_category_by_id(category_id: string): Promise<object> {
        try {

            return await models.category.findOne({
                where: {
                    id: category_id
                }
            });

        } catch (e) {
            throw new Error(`error fetching category${e}`);
        }

    }

    static async add_category(category_data: object): Promise<object> {
        try {

            return await models.category.create(category_data).then(data => {
                return data;
            });

        } catch (e) {
            throw new Error(`error fetching category${e}`);
        }

    }

    static async remove_category(id: string): Promise<object> {
        try {

            return await models.category.destroy({
                where: {
                    id
                }
            });

        } catch (e) {
            throw new Error(`error deleting category${e}`);
        }

    }

    static async remove_sub_category(category_id: string): Promise<object> {
        try {

            return await models.sub_category.destroy({
                where: {
                    category_id: `${category_id}`
                }
            });

        } catch (e) {
            throw new Error(`error deleting category${e}`);
        }

    }

    static async fetch_sub_categories_by_id(id: number): Promise<any> {
        try {

            return await models.sub_category.findOne({
                raw: true,
                where: {
                    id
                }
            });

        } catch (e) {
            throw new Error(`error fetching category${e}`);
        }

    }

    static async fetch_sub_categories_by_cat_id(category_id: string): Promise<any> {
        try {

            return await models.sub_category.findAll({
                raw: true,
                where: {
                    category_id
                }
            });

        } catch (e) {
            throw new Error(`error fetching category${e}`);
        }

    }

    static async update_subcategory(category_id: number, subcategory_id: number): Promise<object> {
        try {

            return await models.sub_category.update({category_id},{
                where: {
                    id: subcategory_id
                }
            });

        } catch (e) {
            throw new Error(`error updating category${e}`);
        }

    }

}
