/* */ 
var baseAssign = require("../internal/baseAssign"),
    createAssigner = require("../internal/createAssigner");
var assign = createAssigner(baseAssign);
module.exports = assign;
