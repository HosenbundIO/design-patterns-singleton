import UserSettings from '../../exercises/javascript/exercise3.js';
import assert from 'assert';
import {test, describe, beforeEach} from "node:test"


describe('UserSettings Singleton', () => {
  beforeEach(() => {
    UserSettings.instance = null;
  });

  test('should create only one instance', () => {
    const settings1 = new UserSettings({ theme: 'dark' });
    const settings2 = new UserSettings({ theme: 'light' });

    assert.strictEqual(settings1, settings2);
    assert.strictEqual(settings1.get('theme'), 'dark');
  });

  test('should set and get settings correctly', () => {
    const settings = new UserSettings({ theme: 'dark' });
    assert.strictEqual(settings.get('theme'), 'dark');

    settings.set('theme', 'light');
    assert.strictEqual(settings.get('theme'), 'light');
  });
});