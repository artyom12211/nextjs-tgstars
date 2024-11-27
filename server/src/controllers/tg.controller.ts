import tgModel from "../models/tg.model"
import { Request, Response } from "express"

class TgController {
    async createInvoiceLink(req: Request, res: Response) {
        // const payload = req.body
        const createInvoceLinkResult = await tgModel.createInvoiceLink()
        if (createInvoceLinkResult)
            res.json({
                status: 200,
                data: createInvoceLinkResult,
                description: 'created invoice link'
            })

        else res.json({
            status: 500,
            description: `error on created invoice link: ${createInvoceLinkResult}`
        })
            
    }  
} 


export default new TgController()