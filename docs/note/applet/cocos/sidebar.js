const root = '../../../';
const path = '/note/applet/cocos/';
let section=[
	"getting-start"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);
