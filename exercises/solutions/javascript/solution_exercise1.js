class Logger {
    constructor() {
        if (!Logger.instance) {
            this.logs = [];
            Logger.instance = this;
        }
        return Logger.instance;
    }

    log(message) {
        this.logs.push(message);
    }

    printLogCount() {
        console.log(`${this.logs.length} Logs`);
    }

    resetLogs() {
        this.logs = [];
    }
}

export default Logger;