import * as helpers from './functions/helpers';

import { displaySize, colourStyle } from './properties';
import * as config from './config/config';


const colourConfigs = {
  [colourStyle.day]: {
    colours: config.coloursDay,
    dtmColors: config.dtmColoursDay,
    options: config.options
  },
  [colourStyle.night]: {
    colours: config.coloursNight,
    dtmColors: config.dtmColoursNight,
    options: (() => {
      const ree = helpers.JSONClone(config.options);
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
    roadSize: helpers.roadSizeToKombi(helpers.JSONClone(config.sizeconfiguration), 1 / 1.330078125),
    fonts: config.fonts[displaySize.kombi]
  },
  [displaySize.mib2]: {
    roadSize: helpers.JSONClone(config.sizeconfiguration),
    fonts: config.fonts[displaySize.mib2]
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
    patterns: config.patterns,
    colours: colourConfigs[map.color].colours,
    options: colourConfigs[map.color].options,
    sizeconfiguration: sizeConfigs[map.size].roadSize,
    fonts: sizeConfigs[map.size].fonts,
    dtmColours: colourConfigs[map.color].dtmColors,
    visibilities: config.visibilities,
    bitmaps: config.bitmaps,
    tuningOptions: config.tuningOptions[map.size],
    drawingorderconfiguration: helpers.drawingOrderGenerate(config.drawingOrder),
    toVWColour: helpers.toVWColour
  };
}

export { maps };