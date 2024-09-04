// Modify the test file to reset logs before each test
import { test } from 'node:test';
import assert from 'assert';
import Logger from '../../exercises/solutions/javascript/solution_exercise1.js';

test('Logger Singleton should create only one instance', () => {
    const logger1 = new Logger();
    const logger2 = new Logger();
    assert.strictEqual(logger1, logger2);
    logger1.resetLogs();
});

test('Logger should add logs correctly', () => {
    const logger = new Logger();
    logger.resetLogs();
    logger.log('First log');
    logger.log('Second log');
    assert.deepStrictEqual(logger.logs, ['First log', 'Second log']);
    logger.resetLogs();
});

test('Logger should print the correct log count', () => {
    const logger = new Logger();
    logger.resetLogs();
    logger.log('First log');
    logger.log('Second log');

    const originalConsoleLog = console.log;
    let consoleOutput = [];
    console.log = (output) => consoleOutput.push(output);

    logger.printLogCount();
    assert.strictEqual(consoleOutput[0], '2 Logs');

    console.log = originalConsoleLog;
    logger.resetLogs();
});