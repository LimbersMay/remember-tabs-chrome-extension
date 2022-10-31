import { createMessageElement } from "../helpers/createMessageElement.js";
import { handleMessage } from "../helpers/handleMessage.js";

export const registerTabsEvent = async( tabAccess ) => {

    const tabsArray = [];
    
    const tabs = await chrome.tabs.query({});

    tabs.forEach( tab => {
        tabsArray.push(tab.url);
    });

    tabAccess.setTabs(tabsArray);

    // Mostramos el mensaje en pantalla
    handleMessage( createMessageElement('Tabs saved', 'saved_tabs_msg'));
};

export const reOpenTabsEvent = async( storageAccess, tabAccess ) => {
    const tabs = await storageAccess.getTabs();
    tabAccess.openTabs(tabs);

    handleMessage( createMessageElement('Tabs opened', 'restored_tabs_msg'));
}

export const removeTabsEvent = async( tabAccess ) => {
    tabAccess.setTabs([]);

    handleMessage( createMessageElement('Tabs removed', 'remove_tabs_msg'));
};
