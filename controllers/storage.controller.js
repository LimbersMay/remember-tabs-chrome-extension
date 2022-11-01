
export class StorageController {
    constructor ( storageService ) {
        this.service = storageService;
    }

    setTabs( tabs = [] ) {
        this.service.setTabs( tabs );
    } 

    getTabsUrls() {
        return this.service.getTabsUrls();
    }
}
