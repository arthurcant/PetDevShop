import { Request, Response } from 'express'

import * as pet from '../models/petModel'
import * as createMenuObject from '../helpers/createrMenuObject'

export const searchBar = (req:Request, res:Response) => {
    const  query: string = req.query.q as string;

    let list = pet.petMethods.getFromName(query);

    res.render("pages/page", {
        menu: createMenuObject.createMenuObject(''),
        list
    })

}


