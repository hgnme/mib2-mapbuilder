import type {roadsizes} from '../config/roadsize';

function roadSizeToKombi(sizeconfiguration: roadsizes, scalar: number) {
  let kombiSizes: roadsizes = [];
  for(let road of sizeconfiguration) {
    road.sizes.forEach((size, k) => {
    for(let param in size) {
      if(['lanewidth','borderwidth','highlightwidth','width','height','inline','outline'].indexOf(param) !== -1) {
        size[param] = Math.round(size[param] * scalar).toString();
      }
    }
    road.sizes[k] = size;
  });
    kombiSizes.push(road);
  }
  return kombiSizes;
};

export { roadSizeToKombi };