import { generateDeploymentConfig } from "scripts";
import { loadEncryptedConfig} from "scripts";
const config = generateDeploymentConfig("plh_facilitator_cw");

/**
 * The default config should ideally be a superset of any extended configs
 * to allow for easier post-processing
 */

config.google_drive.sheets_folder_ids =  [
  "1Jo1-q7KOE4gC2XRKEMcU9bXnrwB5oCRC",  //Global
  "1n2MF2kDpRxryIr5Rd_O1OssQRkFor97B"   //CW Sheets
];
config.google_drive.assets_folder_ids = [
"1nrj0QSvhVKdUaPFrnCB6CyXSCvpozBDK", //Global
"1pjCAps6KARSLUbceF7DaI-W156QaIqum" //CW Assets
];

config.android = {
  app_id: "international.idems.plh_facilitator_cw",
  app_name: "",
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.ios.app_id = "international.idems.plh-facilitator-cw";
config.ios.app_name = "";

config.git = {
  content_repo: "https://github.com/ParentingForLifelongHealth/plh-facilitator-app-cw-content.git",
  content_tag_latest: "1.2.3",
};

config.firebase = {
  config: loadEncryptedConfig('firebase.json')
}

config.auth = {
  provider: 'firebase',
}

config.web.favicon_asset = "images/logos/favicon.png";
config.api.db_name = "plh_facilitator_cw"

config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "";
config.app_config.APP_HEADER_DEFAULTS.title = "";
config.app_config.APP_HEADER_DEFAULTS.hidden = true;
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from APP";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from APP";
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.APP_THEMES.defaultThemeName = "professional";
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";
config.app_config.APP_THEMES.available = ["plh_facilitator_mx"];
config.app_config.APP_THEMES.defaultThemeName = "plh_facilitator_mx";

config.error_logging = { dsn: "https://2eaa21152a344a62890d6801802fd635@app.glitchtip.com/11777"};

export default config;
