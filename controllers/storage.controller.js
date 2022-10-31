
export class StorageController {
    constructor ( storageService ) {
        this.service = storageService;
    }

    setTabs( tabs = [] ) {
        this.service.setTabs( tabs );
    } 

    async getTabs() {
        return await this.service.getTabs();
    }
}
