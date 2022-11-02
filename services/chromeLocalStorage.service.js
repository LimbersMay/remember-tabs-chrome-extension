
export class ChromeLocalStorageService {
    
    setTabs( tabs ) {
        chrome.storage.sync.set( {"tabs": JSON.stringify(tabs)} );
    }

    getTabsUrls() {
        return new Promise(( resolve, reject ) => {
            chrome.storage.sync.get(["tabs"], function( result ) {

                if ( !result.tabs ) {
                    resolve([]);
                }

                resolve(JSON.parse(result.tabs));
            });
        })
    }
}
