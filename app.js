import { 
    registerTabsEvent, 
    removeTabsEvent, 
    reOpenTabsEvent 
} from "./controllers/index.js";

import { StorageController, TabController} from "./controllers/index.js";
import { 
    ChromeLocalStorageService, 
    ChromeTabService,
    FirefoxLocalStorageService,
    FirefoxTabService
} from "./services/index.js";

const storageAccess = new StorageController( new ChromeLocalStorageService() );
const tabAccess = new TabController( new ChromeTabService() ); 

const tabsRegisterButton = document.getElementById('save_tabs_btn');
tabsRegisterButton.addEventListener('click', () => registerTabsEvent(storageAccess, tabAccess) );

const tabsRestoreButton = document.getElementById('restore_tabs_btn');
tabsRestoreButton.addEventListener('click', () => reOpenTabsEvent(storageAccess, tabAccess));

const tabsRemoveButton = document.getElementById('remove_tabs_btn');
tabsRemoveButton.addEventListener('click', () => removeTabsEvent(storageAccess));
