
import {displaySize} from '../properties';

const kombiFonts = [
  { type: 'city_label', id: 12, outline_width: 3 },
  { type: 'road_label', id: 6350, outline_width: 1 },
  { type: 'road_number', id: 1455, outline_width: 0 },
  { type: 'poi_label', id: 1, outline_width: 0 },
  { type: 'polygon_label', id: 1, outline_width: 0 },
  { type: 'river_label', id: 1, outline_width: 0 },
  { type: 'waterway_label', id: 1, outline_width: 0 },
  { type: 'destination_label', id: 100, outline_width: 1 },
  { type: 'tunnel_label', id: 100, outline_width: 1 },
  { type: 'capital_city_label', id: 100, outline_width: 1 },
  { type: 'province_capital_label', id: 100, outline_width: 1 },
  { type: 'prefectural_city_label', id: 100, outline_width: 1 },
  { type: 'province_label', id: 100, outline_width: 1 },
  { type: 'island_label', id: 100, outline_width: 1 },
  { type: 'sea_label', id: 100, outline_width: 1 },
  { type: 'horizon_marker_label', id: 100, outline_width: 1 },
  { type: 'weather_label', id: 100, outline_width: 1 },
  { type: 'poi_fuelprice_label', id: 100, outline_width: 1 }
];

const mib2Fonts = [
  { type: 'city_label', id: 1200, outline_width: 1 },
  { type: 'road_label', id: 6350, size: 10, outline_width: 1 },
  { type: 'road_label', id: 6300, size: 30, outline_width: 2 },
  { type: 'road_number', id: 1450, outline_width: 0 },
  { type: 'poi_label', id: 100, outline_width: 0 },
  { type: 'polygon_label', id: 100, outline_width: 0 },
  { type: 'river_label', id: 100, outline_width: 0 },
  { type: 'waterway_label', id: 100, outline_width: 0 },
  { type: 'destination_label', id: 10000, outline_width: 1 },
  { type: 'tunnel_label', id: 10000, outline_width: 1 },
  { type: 'capital_city_label', id: 10000, outline_width: 1 },
  { type: 'province_capital_label', id: 10000, outline_width: 1 },
  { type: 'prefectural_city_label', id: 10000, outline_width: 1 },
  { type: 'province_label', id: 10000, outline_width: 1 },
  { type: 'island_label', id: 10000, outline_width: 1 },
  { type: 'sea_label', id: 10000, outline_width: 1 },
  { type: 'horizon_marker_label', id: 10000, outline_width: 1 },
  { type: 'weather_label', id: 10000, outline_width: 1 },
  { type: 'poi_fuelprice_label', id: 10000, outline_width: 1 }
];

export const fonts = {
  [displaySize.kombi]: kombiFonts,
  [displaySize.mib2]: mib2Fonts
};