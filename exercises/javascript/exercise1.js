class Logger {
    constructor() {
        // Füge hier die Logik ein
        this.logs = []
    }

    log(message) {
        this.logs.push(message)
    }

    printLogCount() {
        console.log(`${this.logs.length} Logs`)
    }

    resetLogs() {
        this.logs = [];
    }

}

export default Logger