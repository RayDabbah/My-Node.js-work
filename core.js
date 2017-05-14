const path = require('path');
const util = require('util');
const v8 = require('v8');

util.log(path.basename(__filename));
var newFile = path.join(__dirname, 'yankel', 'moshe', 'JOhnny');
util.log(newFile);
util.log(v8.getHeapStatistics());