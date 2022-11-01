
export class TabController {
    
    constructor( tabService ) {
        this.tabService = tabService;
    }

    openTabs( urls ) {
        this.tabService.openTabs(urls);
    } 

    getTabsUrls() {
        return this.tabService.getTabsUrls();
    }
}
