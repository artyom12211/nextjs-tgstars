import TgService from '../services/tg.service';

class TgModel {
    async createInvoiceLink() {
        return await TgService.getInstance().createInvoiceLink()
    }
}

export default new TgModel()