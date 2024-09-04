import { test } from 'node:test';
import assert from 'assert';
import Logger from '../../exercises/javascript/exercise2.js';

test('Logger should be a singleton', () => {
    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();
    assert.strictEqual(logger1, logger2, 'Logger instances are not the same');
     assert.notStrictEqual(logger1, null, 'Logger instance should not be null');
     assert.strictEqual(typeof logger1, 'object', 'Logger should be an object');
});

test('Logger should log messages', () => {
    const logger = Logger.getInstance();
    logger.resetLogs();
    logger.log('Test message');
    assert.strictEqual(logger.logs.length, 1, 'Log count should be 1');
    assert.strictEqual(logger.logs[0], 'Test message', 'Log message is incorrect');
});

test('Logger should print log count', () => {
    const logger = Logger.getInstance();
    logger.resetLogs();
    logger.log('Test message 1');
    logger.log('Test message 2');
    assert.strictEqual(logger.logs.length, 2, 'Log count should be 2');
});