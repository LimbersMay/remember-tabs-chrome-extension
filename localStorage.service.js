
export class LocalStorageService {
    
    setTabs( tabs ) {
        console.log(tabs);
        chrome.storage.sync.set({"tabs": JSON.stringify(tabs)});
    }

    getTabs() {
        chrome.storage.sync.get(["tabs"]);
    }
}
