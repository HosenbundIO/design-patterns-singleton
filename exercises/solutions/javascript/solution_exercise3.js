export default class UserSettings {
  static instance
  constructor(settings) {
    if (UserSettings.instance) {
      return UserSettings.instance;
    }

    this.settings = settings;
    UserSettings.instance = this;
  }

  get(key) {
    return this.settings[key];
  }

  set(key, value) {
    this.settings[key] = value;
  }
}
