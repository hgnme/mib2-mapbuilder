import { displaySize } from '../../properties';

const kombiTuning = [
  { name: 'color_red_factor', value: '240', type: 'fixed8' },
  { name: 'color_green_factor', value: '240', type: 'fixed8' },
  { name: 'color_blue_factor', value: '256', type: 'fixed8' },
  { name: 'color_saturation_factor', value: '256', type: 'fixed8' },
];

const mib2Tuning = [
  { name: 'color_red_factor', value: '242', type: 'fixed8' },
  { name: 'color_green_factor', value: '256', type: 'fixed8' },
  { name: 'color_blue_factor', value: '242', type: 'fixed8' },
  { name: 'color_saturation_factor', value: '256', type: 'fixed8' },
]

export default {
  [displaySize.kombi]: kombiTuning,
  [displaySize.mib2]: mib2Tuning
};