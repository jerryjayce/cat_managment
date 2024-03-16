import {ResponseObject} from '../../utils/ResponseObject';
import {CategoryRepository} from "../repositories";


export class CategoryManagerService {

    static async fetch_categories(req): Promise<object> {

        const response = new ResponseObject('Success', 200, {});

        try {

            const categories = await CategoryRepository.fetch_categories();

            response.data = {categories}
            return response;

        } catch (e) {

            console.log("An error occurred while fetching category", e);
            response.message = "An error occurred while fetching category";
            response.http_status = 500;
            return response;

        }

    }

    static async add_category(req): Promise<object> {

        const response = new ResponseObject('Success', 201, {});

        try {

            const category_name = req?.body.category_name.toLowerCase();
            const category_exists = await CategoryRepository.fetch_category_by_name(category_name);


            if (category_exists) {

                response.message = "Category name already exist";
                response.data = category_exists
                response.http_status = 409;
                return response;

            }


            const created_category = await CategoryRepository.add_category({category_name});

            response.data = {
                created_category
            };

            return response;

        } catch (e) {

            console.log("An error occurred while trying to category", e);
            response.message = "An error occurred while trying to add category";
            response.http_status = 500;
            return response;

        }

    }

    static async remove_category(req): Promise<object> {

        const response = new ResponseObject('Success', 200, {});

        try {

            const category_id = req?.body.category_id;
            const category_exists = await CategoryRepository.fetch_category_by_id(category_id);

            console.log(category_id, {category_exists});

            if (!category_exists) {

                response.message = "Category does not exist";
                response.http_status = 422;
                return response;

            }


            //remove category
            await CategoryRepository.remove_category(category_id);

            //remove sub_categories associated
            await CategoryRepository.remove_sub_category(category_id);


            response.message = "Category deleted successfully"
            response.http_status = 200;

            return response;

        } catch (e) {

            console.log("An error occurred while trying to delete category", e);
            response.message = "An error occurred while trying to delete category";
            response.http_status = 500;
            return response;

        }

    }

    static async fetch_category_and_sub(req): Promise<object> {

        const response = new ResponseObject('Success', 200, {});

        try {

            const category_id = req?.params.id;
            const category_exists = await CategoryRepository.fetch_category_by_id(category_id);

            if (!category_exists) {

                response.message = "Category does not exist";
                response.http_status = 404;
                return response;

            }

            let sub_cat = await CategoryRepository.fetch_sub_categories_by_cat_id(category_id);
            let data = {};
            let parent_category: any = {};
            let child_category = [];




            if (sub_cat.length) {

                //get child and parent category
                for (let i = 0; i < sub_cat.length; i++) {

                    if (sub_cat[i].subcategory_id === null) parent_category[sub_cat[i].id] = sub_cat[i];
                    if (sub_cat[i].subcategory_id !== null) child_category.push(sub_cat[i]);

                }

                //assign child category to parent category
                if (child_category.length) {

                    child_category.map(child_cat => {

                        let parent_cat = parent_category[child_cat.subcategory_id];

                        //check if subcategory has already been created in parent category...push or create
                        parent_cat?.sub_category ?
                            parent_category[child_cat.subcategory_id].sub_category.push(child_cat) :
                            parent_category[child_cat.subcategory_id].sub_category = [child_cat];


                    })

                }


                //replace number keys with subcategory name
                Object.keys(parent_category).forEach((key, value) => {
                    console.log(parent_category[key]);
                    data[parent_category[key].subcategory_name] = parent_category[key];
                });
            }


            response.data = data;
            return response;

        } catch (e) {

            console.log("An error occurred while fetching category", e);
            response.message = "An error occurred while fetching category";
            response.http_status = 500;
            return response;

        }

    }

    static async change_subcategory(req): Promise<object> {

        const response = new ResponseObject('Success', 200, {});

        try {

            const {category_id, subcategory_id} = req?.body;
            const category_exists = await CategoryRepository.fetch_category_by_id(category_id);
            const subcategory_exists = await CategoryRepository.fetch_sub_categories_by_id(subcategory_id);


            if (!category_exists) {

                response.message = "Category does not exist";
                response.http_status = 404;
                return response;

            }

            if (!subcategory_exists) {

                response.message = "Subcategory does not exist";
                response.http_status = 404;
                return response;

            }


            await CategoryRepository.update_subcategory(category_id, subcategory_id);
            return response;

        } catch (e) {

            console.log("An error occurred while updating subcategory", e);
            response.message = "An error occurred while updating subcategory";
            response.http_status = 500;
            return response;

        }

    }


}
