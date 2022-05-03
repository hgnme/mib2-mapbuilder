type roadsizes = {
  name: string;
  sizes: {
      [index:string]: any;
  }[];
}[];
const roads:roadsizes = [
  {
    name: 'motorway', sizes: [
      { resolution: '0', lanewidth: '5000', borderwidth: '400', highlightwidth: '4086', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '3759', borderwidth: '350', highlightwidth: '3405', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '2827', borderwidth: '300', highlightwidth: '2724', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '512', lanewidth: '2261', borderwidth: '230', highlightwidth: '2383', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '768', lanewidth: '1884', borderwidth: '100', highlightwidth: '2043', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1024', lanewidth: '1639', borderwidth: '100', highlightwidth: '1702', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1280', lanewidth: '1490', borderwidth: '100', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '2048', lanewidth: '1354', borderwidth: '100', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '2560', lanewidth: '1231', borderwidth: '100', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '3840', lanewidth: '1119', borderwidth: '100', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '5120', lanewidth: '1017', borderwidth: '100', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '6400', lanewidth: '925', borderwidth: '100', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '7680', lanewidth: '841', borderwidth: '100', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '10240', lanewidth: '511', borderwidth: '100', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '12800', lanewidth: '511', borderwidth: '100', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '15360', lanewidth: '511', borderwidth: '100', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '20480', lanewidth: '340', borderwidth: '100', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '25600', lanewidth: '340', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '38400', lanewidth: '340', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '51200', lanewidth: '340', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '76800', lanewidth: '340', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '102400', lanewidth: '340', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128000', lanewidth: '340', borderwidth: '0', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '358400', lanewidth: '340', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '2048000', lanewidth: '340', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'dualcarriageway', sizes: [
      { resolution: '0', lanewidth: '5000', borderwidth: '450', highlightwidth: '3575', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '3759', borderwidth: '400', highlightwidth: '2724', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '2827', borderwidth: '350', highlightwidth: '2043', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '512', lanewidth: '2261', borderwidth: '280', highlightwidth: '1532', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '768', lanewidth: '1884', borderwidth: '150', highlightwidth: '1192', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1024', lanewidth: '1639', borderwidth: '0', highlightwidth: '1192', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1280', lanewidth: '1490', borderwidth: '0', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '2048', lanewidth: '1354', borderwidth: '0', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '2560', lanewidth: '1231', borderwidth: '0', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '3840', lanewidth: '1119', borderwidth: '0', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '5120', lanewidth: '1017', borderwidth: '0', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '6400', lanewidth: '925', borderwidth: '0', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '7680', lanewidth: '841', borderwidth: '0', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '10240', lanewidth: '511', borderwidth: '0', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '12800', lanewidth: '511', borderwidth: '0', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '15360', lanewidth: '511', borderwidth: '0', highlightwidth: '936', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '20480', lanewidth: '340', borderwidth: '0', highlightwidth: '936', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '25600', lanewidth: '340', borderwidth: '0', highlightwidth: '851', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '38400', lanewidth: '340', borderwidth: '0', highlightwidth: '851', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '51200', lanewidth: '340', borderwidth: '0', highlightwidth: '851', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '76800', lanewidth: '340', borderwidth: '0', highlightwidth: '766', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '102400', lanewidth: '340', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'expressway', sizes: [
      { resolution: '0', lanewidth: '3027', borderwidth: '450', highlightwidth: '3575', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '3027', borderwidth: '400', highlightwidth: '2724', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '2461', borderwidth: '350', highlightwidth: '2043', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '512', lanewidth: '1431', borderwidth: '280', highlightwidth: '1532', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '768', lanewidth: '1431', borderwidth: '150', highlightwidth: '1192', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1024', lanewidth: '1217', borderwidth: '0', highlightwidth: '1192', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1280', lanewidth: '925', borderwidth: '0', highlightwidth: '1192', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '2048', lanewidth: '841', borderwidth: '0', highlightwidth: '1192', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '2560', lanewidth: '511', borderwidth: '0', highlightwidth: '1192', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '3840', lanewidth: '511', borderwidth: '0', highlightwidth: '1192', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '5120', lanewidth: '511', borderwidth: '0', highlightwidth: '1192', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '6400', lanewidth: '340', borderwidth: '0', highlightwidth: '1192', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '7680', lanewidth: '511', borderwidth: '0', highlightwidth: '936', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '10240', lanewidth: '511', borderwidth: '102', highlightwidth: '766', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '12800', lanewidth: '511', borderwidth: '102', highlightwidth: '766', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '15360', lanewidth: '340', borderwidth: '102', highlightwidth: '766', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '20480', lanewidth: '340', borderwidth: '68', highlightwidth: '596', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'countryroad', sizes: [
      { resolution: '0',    lanewidth: '2827', borderwidth: '450', highlightwidth: '3575', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128',  lanewidth: '2827', borderwidth: '400', highlightwidth: '2724', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256',  lanewidth: '2461', borderwidth: '350', highlightwidth: '2043', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '512',  lanewidth: '1354', borderwidth: '280', highlightwidth: '1532', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '768',  lanewidth: '1119', borderwidth: '150', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1024', lanewidth: '925', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1280', lanewidth: '841', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '2048', lanewidth: '841', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '2560', lanewidth: '841', borderwidth: '0', highlightwidth: '1277', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '3840', lanewidth: '841', borderwidth: '0', highlightwidth: '1192', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '5120', lanewidth: '841', borderwidth: '0', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '6400', lanewidth: '841', borderwidth: '0', highlightwidth: '766', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '7680', lanewidth: '841', borderwidth: '0', highlightwidth: '596', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'urbanroad', sizes: [
      { resolution: '0', lanewidth: '2827', borderwidth: '450', highlightwidth: '3575', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '2827', borderwidth: '400', highlightwidth: '2724', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '1455', borderwidth: '350', highlightwidth: '2043', default_number_of_lane: '1', use_number_of_lane: 'false' }, // ~around 100m
      { resolution: '512', lanewidth: '1155', borderwidth: '280', highlightwidth: '1532', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '768', lanewidth: '542', borderwidth: '150', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1024', lanewidth: '408', borderwidth: '0', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1280', lanewidth: '255', borderwidth: '0', highlightwidth: '511', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '2048', lanewidth: '255', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '2560', lanewidth: '255', borderwidth: '0', highlightwidth: '1277', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'pedestrianzone', sizes: [
      { resolution: '0', lanewidth: '2043', borderwidth: '0', highlightwidth: '2043', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '1362', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '681', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '512', lanewidth: '511', borderwidth: '0', highlightwidth: '511', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '768', lanewidth: '511', borderwidth: '0', highlightwidth: '511', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1024', lanewidth: '511', borderwidth: '0', highlightwidth: '511', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1280', lanewidth: '511', borderwidth: '0', highlightwidth: '511', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'footway', sizes: [
      { resolution: '0', lanewidth: '940', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '706', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '531', borderwidth: '0', highlightwidth: '511', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '512', lanewidth: '400', borderwidth: '0', highlightwidth: '340', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '768', lanewidth: '340', borderwidth: '0', highlightwidth: '340', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1024', lanewidth: '340', borderwidth: '0', highlightwidth: '340', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1280', lanewidth: '340', borderwidth: '0', highlightwidth: '340', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'ferry', sizes: [
      { resolution: '1', lanewidth: '16343', borderwidth: '0', highlightwidth: '16343', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '16', lanewidth: '8172', borderwidth: '0', highlightwidth: '8172', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '32', lanewidth: '5448', borderwidth: '0', highlightwidth: '5448', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '64', lanewidth: '2724', borderwidth: '0', highlightwidth: '2724', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '1362', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '681', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '3840', lanewidth: '340', borderwidth: '0', highlightwidth: '340', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'railway', sizes: [
      { resolution: '1', lanewidth: '5447',  borderwidth: '0', highlightwidth: '8172', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '16', lanewidth: '2723', borderwidth: '0', highlightwidth: '4086', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '32', lanewidth: '1815', borderwidth: '0', highlightwidth: '2724', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '64', lanewidth: '907', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '453', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '226', borderwidth: '0', highlightwidth: '341', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '3840', lanewidth: '113', borderwidth: '0', highlightwidth: '170', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'international_boundary', sizes: [
      { resolution: '1', lanewidth: '16343', borderwidth: '0', highlightwidth: '16343', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '16', lanewidth: '8172', borderwidth: '0', highlightwidth: '8172', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '32', lanewidth: '5448', borderwidth: '0', highlightwidth: '5448', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '64', lanewidth: '2724', borderwidth: '0', highlightwidth: '2724', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '1362', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '681', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '3840', lanewidth: '340', borderwidth: '0', highlightwidth: '340', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'national_boundary', sizes: [
      { resolution: '1', lanewidth: '16343', borderwidth: '0', highlightwidth: '16343', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '16', lanewidth: '8172', borderwidth: '0', highlightwidth: '8172', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '32', lanewidth: '5448', borderwidth: '0', highlightwidth: '5448', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '64', lanewidth: '2724', borderwidth: '0', highlightwidth: '2724', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '1362', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '681', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '3840', lanewidth: '340', borderwidth: '0', highlightwidth: '340', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'waterway', sizes: [
      { resolution: '1', lanewidth: '16343', borderwidth: '0', highlightwidth: '16343', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '16', lanewidth: '8172', borderwidth: '0', highlightwidth: '8172', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '32', lanewidth: '5448', borderwidth: '0', highlightwidth: '5448', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '64', lanewidth: '2724', borderwidth: '0', highlightwidth: '2724', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '1362', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '681', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '3840', lanewidth: '340', borderwidth: '0', highlightwidth: '340', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'major_contour_line', sizes: [
      { resolution: '1', lanewidth: '681', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '681', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'minor_contour_line', sizes: [
      { resolution: '1', lanewidth: '340', borderwidth: '0', highlightwidth: '340', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '340', borderwidth: '0', highlightwidth: '340', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'subway', sizes: [
      { resolution: '1', lanewidth: '16343', borderwidth: '0', highlightwidth: '16343', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '16', lanewidth: '8172', borderwidth: '0', highlightwidth: '8172', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '32', lanewidth: '5448', borderwidth: '0', highlightwidth: '5448', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '64', lanewidth: '2724', borderwidth: '0', highlightwidth: '2724', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '1362', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '681', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '3840', lanewidth: '340', borderwidth: '0', highlightwidth: '340', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'tramway', sizes: [
      { resolution: '1', lanewidth: '10895', borderwidth: '0', highlightwidth: '10895', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '16', lanewidth: '5448', borderwidth: '0', highlightwidth: '5448', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '32', lanewidth: '2724', borderwidth: '0', highlightwidth: '2724', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '64', lanewidth: '1362', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '681', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '340', borderwidth: '0', highlightwidth: '340', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'cartrain', sizes: [
      { resolution: '1', lanewidth: '10895', borderwidth: '0', highlightwidth: '10895', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '16', lanewidth: '5448', borderwidth: '0', highlightwidth: '5448', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '32', lanewidth: '2724', borderwidth: '0', highlightwidth: '2724', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '64', lanewidth: '1362', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '681', borderwidth: '0', highlightwidth: '681', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '340', borderwidth: '0', highlightwidth: '340', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'direction_arrow', sizes: [
      { resolution: '1', lanewidth: '10895', borderwidth: '0', highlightwidth: '10895', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  }, {
    name: 'rdv_outline', sizes: [
      {resolution: '0', width:'1277'}
    ]
  }, {
    name: 'rdv_safe_return_area_outline', sizes: [
      {resolution: '0', width:'1277'}
    ]
  }, {
    name: 'maneuver_marker_0', sizes: [
      {resolution: '1', width:'1702', height: '1702'},
      {resolution: '256', width:'1702', height: '1702'},
      {resolution: '25600', width:'1702', height: '1702'}
    ]
  }, {
    name: 'maneuver_marker_1', sizes: [
      {resolution: '1', width:'1702', height: '1702'},
      {resolution: '256', width:'1702', height: '1702'},
      {resolution: '25600', width:'1702', height: '1702'}
    ]
  }, {
    name: 'maneuver_marker_2', sizes: [
      {resolution: '1', width:'1702', height: '1702'},
      {resolution: '256', width:'1702', height: '1702'},
      {resolution: '25600', width:'1702', height: '1702'}
    ]
  }, {
    name: 'maneuver_marker_3', sizes: [
      {resolution: '1', width:'1702', height: '1702'},
      {resolution: '256', width:'1702', height: '1702'},
      {resolution: '25600', width:'1702', height: '1702'}
    ]
  }, {
    name: 'maneuver_marker_4', sizes: [
      {resolution: '1', width:'1702', height: '1702'},
      {resolution: '256', width:'1702', height: '1702'},
      {resolution: '25600', width:'1702', height: '1702'}
    ]
  }, {
    name: 'maneuver_marker_5', sizes: [
      {resolution: '1', width:'1702', height: '1702'},
      {resolution: '256', width:'1702', height: '1702'},
      {resolution: '25600', width:'1702', height: '1702'}
    ]
  },
  {
    name: 'restricted_road', sizes: [
      { resolution: '0', lanewidth: '2500', borderwidth: '833', highlightwidth: '3575', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '128', lanewidth: '2500', borderwidth: '627', highlightwidth: '2724', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '256', lanewidth: '1413', borderwidth: '471', highlightwidth: '2043', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '512', lanewidth: '1063', borderwidth: '0', highlightwidth: '1532', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '768', lanewidth: '452', borderwidth: '0', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1024', lanewidth: '340', borderwidth: '0', highlightwidth: '1021', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '1280', lanewidth: '255', borderwidth: '0', highlightwidth: '511', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '2048', lanewidth: '255', borderwidth: '0', highlightwidth: '1362', default_number_of_lane: '1', use_number_of_lane: 'false' },
      { resolution: '2560', lanewidth: '255', borderwidth: '0', highlightwidth: '1277', default_number_of_lane: '1', use_number_of_lane: 'false' },
    ]
  },
  {
    name: 'route', sizes: [
      { resolution: '0', inline: '1362',   outline: '851', delta: '0', use_road_width: 'false' },
      { resolution: '256', inline: '1192', outline: '681', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '1192', outline: '681', delta: '0', use_road_width: 'false' },
      { resolution: '128000', inline: '851', outline: '681', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '851', outline: '681', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '851', outline: '681', delta: '0', use_road_width: 'false' },
      { resolution: '2816000', inline: '851', outline: '681', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'waypoint_route', sizes: [
      { resolution: '0', inline: '1362',   outline: '851', delta: '0', use_road_width: 'false' },
      { resolution: '256', inline: '1192', outline: '681', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '1192', outline: '681', delta: '0', use_road_width: 'false' },
      { resolution: '128000', inline: '851', outline: '681', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '851', outline: '681', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '851', outline: '681', delta: '0', use_road_width: 'false' },
      { resolution: '2816000', inline: '851', outline: '681', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset1', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset2', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset3', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset4', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset5', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset6', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset7', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset8', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset9', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset10', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset11', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset12', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset13', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset14', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset15', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  },
  {
    name: 'edge_highlighting_preset16', sizes: [
      { resolution: '256', inline: '500', outline: '400', delta: '0', use_road_width: 'false' },
      { resolution: '2560', inline: '200', outline: '150', delta: '0', use_road_width: 'false' },
      { resolution: '263680', inline: '60', outline: '60', delta: '0', use_road_width: 'false' },
      { resolution: '768000', inline: '0', outline: '0', delta: '0', use_road_width: 'false' },
    ]
  }
];
export type { roadsizes };
export {roads};