
"use strict";

let Digital = require('./Digital.js');
let RobotModeDataMsg = require('./RobotModeDataMsg.js');
let ToolDataMsg = require('./ToolDataMsg.js');
let MasterboardDataMsg = require('./MasterboardDataMsg.js');
let RobotStateRTMsg = require('./RobotStateRTMsg.js');
let Analog = require('./Analog.js');
let IOStates = require('./IOStates.js');

module.exports = {
  Digital: Digital,
  RobotModeDataMsg: RobotModeDataMsg,
  ToolDataMsg: ToolDataMsg,
  MasterboardDataMsg: MasterboardDataMsg,
  RobotStateRTMsg: RobotStateRTMsg,
  Analog: Analog,
  IOStates: IOStates,
};
