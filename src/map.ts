import * as helpers from './functions/helpers';

import { displaySize, colourStyle } from './properties';
import colours_day from './config/colours_day';
import colours_night from './config/colours_night';
import dtmColours_day from './config/colours/day/dtmColours';
import dtmColours_night from './config/colours/night/dtmColours';
import patterns from './config/patterns'
import { roads as sizeconfiguration } from './config/roadsize'
import tuningOptions from './config/tuningOptions'
import options from './config/options'
import visibilities from './config/visibilities';
import bitmaps from './config/bitmaps';
import { fonts } from './config/fonts';
import drawingorderconfiguration from './config/drawingorder';


const colourConfigs = {
  [colourStyle.day]: {
    colours: colours_day,
    dtmColors: dtmColours_day,
    options: options
  },
  [colourStyle.night]: {
    colours: colours_night,
    dtmColors: dtmColours_night,
    options: (() => {
      const ree = helpers.JSONClone(options);
      for (let option of ree) {
        if (option.name === 'texture_variant') {
          option.value = 1;
        }
      }
      return ree;
    })()
  },
};
const sizeConfigs = {
  [displaySize.kombi]: {
    roadSize: helpers.roadSizeToKombi(helpers.JSONClone(sizeconfiguration), 1 / 1.330078125),
    fonts: fonts[displaySize.kombi]
  },
  [displaySize.mib2]: {
    roadSize: helpers.JSONClone(sizeconfiguration),
    fonts: fonts[displaySize.mib2]
  }
};

const maps = [
  {
    name: 'mapconfig_default_0_DTM',
    size: displaySize.mib2,
    color: colourStyle.day,
    config: {}
  },
  {
    name: 'mapconfig_default_0_DTM',
    size: displaySize.kombi,
    color: colourStyle.day,
    config: {}
  },
  {
    name: 'mapconfig_default_1_DTM',
    size: displaySize.mib2,
    color: colourStyle.night,
    config: {}
  },
  {
    name: 'mapconfig_default_1_DTM',
    size: displaySize.kombi,
    color: colourStyle.night,
    config: {}
  },
  {
    name: 'mapconfig_default_kombi_0',
    size: displaySize.mib2,
    color: colourStyle.day,
    config: {}
  },
  {
    name: 'mapconfig_default_kombi_0',
    size: displaySize.kombi,
    color: colourStyle.day,
    config: {}
  },
  {
    name: 'mapconfig_default_kombi_1',
    size: displaySize.mib2,
    color: colourStyle.night,
    config: {}
  },
  {
    name: 'mapconfig_default_kombi_1',
    size: displaySize.kombi,
    color: colourStyle.night,
    config: {}
  },
  {
    name: 'mapconfig_traffic_kombi_0',
    size: displaySize.mib2,
    color: colourStyle.day,
    config: {}
  },
  {
    name: 'mapconfig_traffic_kombi_0',
    size: displaySize.kombi,
    color: colourStyle.day,
    config: {}
  },
  {
    name: 'mapconfig_traffic_kombi_1',
    size: displaySize.mib2,
    color: colourStyle.night,
    config: {}
  },
  {
    name: 'mapconfig_traffic_kombi_1',
    size: displaySize.kombi,
    color: colourStyle.night,
    config: {}
  }
]

for (let map of maps) {
  map.config = {
    name: map.name,
    patterns,
    colours: colourConfigs[map.color].colours,
    options: colourConfigs[map.color].options,
    sizeconfiguration: sizeConfigs[map.size].roadSize,
    fonts: sizeConfigs[map.size].fonts,
    dtmColours: colourConfigs[map.color].dtmColors,
    visibilities,
    bitmaps,
    tuningOptions,
    drawingorderconfiguration: helpers.drawingOrderGenerate(drawingorderconfiguration),
    toVWColour: helpers.toVWColour
  };
}

export { maps };