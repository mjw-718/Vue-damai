const artistproject = require('./artistProject.json')
const projectinfo = require('./projectInfo.json')
const artistMore = require('./artistMore.json')
const list = require('./list.json')
module.exports = function(){
    return {
        artistproject,
        projectinfo,
        artistMore,
        list
    }
}