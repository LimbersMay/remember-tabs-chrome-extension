
export class FirefoxLocalStorageService {
    
    setTabs( tabs ) {
        browser.storage.sync.set( {"tabs": JSON.stringify(tabs)} );
    }

    getTabsUrls() {
        return new Promise(( resolve, reject ) => {

            browser.storage.sync.get("tabs")
                .then( result => {
                    resolve(JSON.parse(result.tabs));
                })
        })
    }
}