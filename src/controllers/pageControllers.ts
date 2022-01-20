import {Request, Response} from 'express'

import { petMethods } from '../models/petModel'
import { createMenuObject } from '../helpers/createrMenuObject'

export const home = (req:Request, res:Response) => {
    let list = petMethods.getAll()
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title:"Todos os animais",
            background: "allanimals.jpg"
        },
        list
    })
}

export const dogs = (req:Request, res:Response) {
    let list = petMethods.getFromType('dog')

    res.render('pages/page', {
        menu:createMenuObject('dog'),
        banner: {
            title: "Cachorro",
            background: 'banner_dog.jpg'
        },
        list
    })

}

export const cats = (req:Request, res:Response) => {
    let list = petMethods.getFromType('cat')

    res.render("pages/page", {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    })
}

export const fishes = (req: Request, res: Response) => {
    let list = petMethods.getFromType('fish')

    res.render("pages/page", {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_cat.jpg'
        },
        list
    })



    

}





