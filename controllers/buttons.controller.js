import { createMessageElement } from "../helpers/createMessageElement.js";
import { handleMessage } from "../helpers/handleMessage.js";

export const registerTabsEvent = async( storageAccess, tabAccess ) => {

    const tabs = await tabAccess.getTabsUrls();
    storageAccess.setTabs(tabs);

    // Mostramos el mensaje en pantalla
    handleMessage( createMessageElement('Tabs saved', 'saved_tabs_msg'));
};

export const reOpenTabsEvent = async( storageAccess, tabAccess ) => {

    const registeredTabs = await storageAccess.getTabsUrls();
    const currentOpenTabs = await tabAccess.getTabsUrls();

    if ( registeredTabs.length === 0) {
        handleMessage( createMessageElement('No tabs saved', 'restored_tabs_msg'));
        return;
    }

    const tabsToOpen = registeredTabs.filter( tab => !currentOpenTabs.includes(tab) );    
    tabAccess.openTabs( tabsToOpen );

    handleMessage( createMessageElement('Tabs opened', 'restored_tabs_msg'));
}

export const removeTabsEvent = async( tabAccess ) => {
    tabAccess.setTabs([]);

    handleMessage( createMessageElement('Tabs removed', 'remove_tabs_msg'));
};
