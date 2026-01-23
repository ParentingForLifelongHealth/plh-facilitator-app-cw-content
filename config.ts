import { generateDeploymentConfig } from "scripts";
import { loadEncryptedConfig} from "scripts";
const config = generateDeploymentConfig("plh_facilitator_cw");

/**
 * The default config should ideally be a superset of any extended configs
 * to allow for easier post-processing
 */
config.google_drive.sheets_folders = [
  { id: "19wSspWYMbRc75een-kS0q0aq24--75u8", name: "library_app_menu" },
  { id: "1Jo1-q7KOE4gC2XRKEMcU9bXnrwB5oCRC", name: "Global" },
  { id: "1XBq4iGIZHEwzwPk3xbHDAm9WCesjR7kR", name: "library PLH onboarding" },
  { id: "1n2MF2kDpRxryIr5Rd_O1OssQRkFor97B", name: "CW Sheets" },
];

config.google_drive.assets_folders = [
  { id: "1nrj0QSvhVKdUaPFrnCB6CyXSCvpozBDK", name: "Global" },
  { id: "1pjCAps6KARSLUbceF7DaI-W156QaIqum", name: "CW Assets" }
];

config.android = {
  app_id: "international.idems.plh_facilitator_cw",
  app_name: "Mayor Konektá",
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.ios.app_id = "international.idems.plh-facilitator-cw";
config.ios.app_name = "Mayor Konektá";

config.git = {
  content_repo: "https://github.com/ParentingForLifelongHealth/plh-facilitator-app-cw-content.git",
  content_tag_latest: "1.2.84",
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

config.app_config.APP_LANGUAGES.default = "cw_pap";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Mayor Konektá";
config.app_config.APP_HEADER_DEFAULTS.title = "Mayor Konektá";
config.app_config.APP_HEADER_DEFAULTS.hidden = true;
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from Mayor Konektá";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from Mayor Konektá";
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";
config.app_config.APP_FOOTER_DEFAULTS.template = "footer";
config.app_config.APP_FOOTER_DEFAULTS.background = "none";
config.app_config.APP_THEMES.available = ["plh_facilitator_cw"];
config.app_config.APP_THEMES.defaultThemeName = "plh_facilitator_cw";

config.error_logging = { dsn: "https://2eaa21152a344a62890d6801802fd635@app.glitchtip.com/11777"};

export default config;
