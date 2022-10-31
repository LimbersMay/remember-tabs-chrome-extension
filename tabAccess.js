
export class TabAccess {
    constructor ( service ) {
        this.service = service;
    }

    set CurrentTabs( tabs = [] ) {
        this.service.setTabs( tabs );
    } 

    get CurrentTabs() {
        return this.service.getTabs();
    }

}
