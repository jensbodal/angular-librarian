'use strict';

const childProcess = require('child_process');

/* istanbul ignore next */
exports.execute = (command, args) => {
    const result = childProcess.spawnSync(command, args || [], { stdio: 'pipe' });

    return result && result.stdout && result.stdout.toString().trim();
};
