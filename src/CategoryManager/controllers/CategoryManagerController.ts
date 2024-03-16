import {Request, Response} from "express";
import {CategoryManagerService} from "../services";
import {ResponseHelper} from "../../utils/ResponseHelper";

import { validate } from 'class-validator';
import AddCategoryDto from "../dto/add_category.dto";
import RemoveCategoryDto from "../dto/remove_category.dto";

export default class CategoryManagerController {

    static async fetch_categories(req: Request, res: Response) {
        try {

            const data: any = await CategoryManagerService.fetch_categories(req);
            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {});
        }
    }

    static async add_category(req: Request, res: Response) {
        try {

            const categoryData = new AddCategoryDto(req.body);
            const errors = await validate(categoryData);

            if (errors.length > 0) {
                return ResponseHelper.send_response(res,  422, errors);
            }

            const data: any = await CategoryManagerService.add_category(req);
            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {});
        }
    }

    static async remove_category(req: Request, res: Response) {
        try {

            const categoryData = new RemoveCategoryDto(req.body);
            const errors = await validate(categoryData);

            if (errors.length > 0) {
                return ResponseHelper.send_response(res,  422, errors);
            }

            const data: any = await CategoryManagerService.remove_category(req);
            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {});
        }
    }

    static async fetch_category_and_sub(req: Request, res: Response) {
        try {

            const data: any = await CategoryManagerService.fetch_category_and_sub(req);
            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {});
        }
    }

    static async change_subcategory(req: Request, res: Response) {
        try {

            const data: any = await CategoryManagerService.change_subcategory(req);
            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {});
        }
    }

}
