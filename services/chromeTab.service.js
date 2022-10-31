
export class ChromeTabService {

    openTabs( urls = [] ) {

        urls.forEach( url => {
            chrome.tabs.create({
                url,
                active: false
            })
        });

    }

}
