export class FirefoxTabService {

    openTabs(urls = []) {
        urls.forEach(url => {
            browser.tabs.create({
                url,
                active: false
            })
        });
    }

    getTabsUrls() {
        return new Promise((resolve, reject) => {
            window.tabs.query({})
                .then( tabs => {
                    const urls = tabs.map(tab => tab.url);
                    resolve(urls);
                })
        });
    }
}