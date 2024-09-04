class Logger {
    constructor() {
        if (Logger.instance) {
            throw new Error("Use Logger.getInstance() to get the single instance of this class.");
        }
        this.logs = [];
    }

    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
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