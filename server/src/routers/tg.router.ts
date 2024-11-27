import express, { Express } from 'express'
import tgController from '../controllers/tg.controller'
// const Router = express
const router:Express = express()


router.post('/createInvoiceLink', tgController.createInvoiceLink)

// export default router
// module.exports = router 
export = router 