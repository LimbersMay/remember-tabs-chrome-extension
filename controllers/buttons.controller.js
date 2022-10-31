export const registerTabsEvent = async( tabAccess ) => {

    const tabsArray = [];
    
    const tabs = await chrome.tabs.query({});

    tabs.forEach( tab => {
        tabsArray.push(tab.url);
    });

    tabAccess.setTabs(tabsArray);
};

export const reOpenTabsEvent = async( storageAccess, tabAccess ) => {
    const tabs = await storageAccess.getTabs();
    tabAccess.openTabs(tabs);
}

export const removeTabsEvent = async( tabAccess ) => {
    tabAccess.setTabs([]);
};
