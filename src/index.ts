
import mustache from 'mustache';
import { displaySize, getGitDir } from './properties';
import { maps } from './map';
import templates from './template/main';
import fs from 'fs';
import xmlformatter from 'xml-formatter'

const baseDirectory = getGitDir().trim() + '/app/vw/aus/MapConfigBuilder';
if (!fs.existsSync(baseDirectory + '/rendered')) {
  fs.mkdirSync(baseDirectory + '/rendered');
}
if (!fs.existsSync(baseDirectory + '/rendered/1280x640')) {
  fs.mkdirSync(baseDirectory + '/rendered/1280x640');
}
for (let map of maps) {
  const render = mustache.render(
    templates.mainConfig,
    map.config,
    templates
  );
  const formattedXML = xmlformatter(render, { lineSeparator: '\n', indentation: ' ' });
  const fileName = baseDirectory + '/rendered/' + (map.size === displaySize.mib2 ? '1280x640/' : '') + map.name + '.mxf';
  fs.writeFileSync(fileName, formattedXML);
}