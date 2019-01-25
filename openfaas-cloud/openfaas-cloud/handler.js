"use strict"

module.exports = (context, callback) => {
    console.log("Hello");
    callback(undefined, {status: "done"});
}
