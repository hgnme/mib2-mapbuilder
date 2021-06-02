const mainConfig = `
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<xmlmapcontent>
  <mapconfig name="{{name}}">
  <!-- patterns begin -->
  {{#patterns}}
    {{>patternconfiguration}}
  {{/patterns}}
  <!-- patterns end -->
  <!-- colours begin -->
  {{#colours}}
    {{>colorConfiguration}}
  {{/colours}}
  <!-- colours end -->
  <!-- visibility begin -->
  {{#visibilities}}
    {{>visibility}}
  {{/visibilities}}
  <!-- visibility end -->
  <!-- bitmaps begin -->
  {{#bitmaps}}
    {{>bitmap}}
  {{/bitmaps}}
  <!-- bitmaps end -->
  <!-- fonts begin -->
  {{#fonts}}
    {{>font}}
  {{/fonts}}
  <!-- fonts end -->
  <!-- drawingorder begin -->
  {{#drawingorderconfiguration}}
    {{>drawingOrder}}
  {{/drawingorderconfiguration}}
  <!-- drawingorder end -->
  <!-- dtmColors begin -->
  {{>dtmConfiguration}}
  <!-- dtmColors end -->
  <!-- lazy begin -->
  <illumination_configuration>
    <light mode="head" type="directional" azimuth="0" tilt="0" ambient="1" squarebrightness="false" usage="default" />
    <light mode="head" type="directional" azimuth="80" tilt="60" ambient="0.5" squarebrightness="false" usage="carsor" />
  </illumination_configuration>
  <topomap_configuration>
    <topomap_colormap colormapresolution="13400" interpolationtype="2" />
  </topomap_configuration>
  <!-- lazy end -->
  <!-- options begin -->
  {{#options}}
    {{>option}}
  {{/options}}
  <!-- options end -->
  <!-- tuning begin -->
  {{#tuningOptions}}
    {{>tuning}}
  {{/tuningOptions}}
  <!-- tuning end -->
  <carsor scalefactor="50" shadowScale="1" shadowOffsetX="1.25" shadowOffsetY="-1.25" useDynamicShadowPosition="false" />
  <crosshair scalefactor="390" shadowScale="0" shadowOffsetX="3" shadowOffsetY="-3" useDynamicShadowPosition="false" />
  <!-- sizeconfiguration begin -->
  {{#sizeconfiguration}}
    {{>roadSize}}
  {{/sizeconfiguration}}
  <!-- sizeconfiguration end -->
  
  </mapconfig>
</xmlmapcontent>`;

const patternconfiguration = `
<patternconfiguration id="{{id}}">
  <name val="{{name}}" />
  <patternstyle type="{{patternstyle}}" />
  <direction type="{{direction}}" />
  <scale val="{{scale}}" />
  <stroke val="{{stroke}}" />
</patternconfiguration>`;

const colorConfiguration = `
<drawingconfiguration name="{{name}}">
<pen>
  <color dccolor="{{#toVWColour}}{{outline.colour}}{{/toVWColour}}" />
  <style type="{{outline.style}}" />
</pen>
<brush>
  <color dccolor="{{#toVWColour}}{{fill.colour}}{{/toVWColour}}" />
  <style type="{{fill.style}}" />
</brush>{{#pattern}}<pattern id="{{id}}" />{{/pattern}}
</drawingconfiguration>`;

const dtmConfiguration = `
<dtmconfiguration>
  <dtmcolormap colormapresolution="{{dtmColours.colormapresolution}}" interpolationtype="{{dtmColours.interpolationType}}">
    {{#dtmColours.heights}}
      <dtmheightcolor height="{{height}}" color="{{#toVWColour}}{{color}}{{/toVWColour}}" resolution="{{resolution}}" />
    {{/dtmColours.heights}}
  </dtmcolormap>
  <height_scale_params_top value0="{{dtmColours.heightScaleTop.value0}}" value1="{{dtmColours.heightScaleTop.value1}}" value2="{{dtmColours.heightScaleTop.value2}}" value3="{{dtmColours.heightScaleTop.value3}}" />
  <height_scale_params_bottom value0="{{dtmColours.heightScaleBottom.value0}}" value1="{{dtmColours.heightScaleBottom.value1}}" value2="{{dtmColours.heightScaleBottom.value2}}" value3="{{dtmColours.heightScaleBottom.value3}}" />
</dtmconfiguration>
`;
const roadSize = `
<sizeconfiguration name="{{name}}">
  {{#sizes}}
    <size 
      resolution="{{resolution}}" 
      {{#width}}width="{{width}}"{{/width}}
      {{#height}}height="{{height}}"{{/height}}
      {{#lanewidth}}lanewidth="{{lanewidth}}"{{/lanewidth}}
      {{#borderwidth}}borderwidth="{{borderwidth}}"{{/borderwidth}}
      {{#highlightwidth}}highlightwidth="{{highlightwidth}}"{{/highlightwidth}}
      {{#default_number_of_lane}}default_number_of_lane="{{default_number_of_lane}}"{{/default_number_of_lane}}
      {{#use_number_of_lane}}use_number_of_lane="{{use_number_of_lane}}"{{/use_number_of_lane}}
      {{#inline}}inline="{{inline}}"{{/inline}}
      {{#outline}}outline="{{outline}}"{{/outline}}
      {{#delta}}delta="{{delta}}"{{/delta}}
      {{#use_road_width}}use_road_width="{{use_road_width}}"{{/use_road_width}}
    />
  {{/sizes}}
</sizeconfiguration>
`
const option = `<option name="{{name}}" value="{{value}}" />`;
const bitmap = `<bitmap type="{{type}}" {{#size}}size="{{size}}"{{/size}} id="{{id}}" />`;
const visibility = `<visibilityconfiguration name="{{name}}"><min resolution="{{min}}" /><max resolution="{{max}}" /></visibilityconfiguration>`;
const drawingOrder = `<drawingorderconfiguration name="{{name}}"><drawingorder value="{{order}}" /></drawingorderconfiguration>`;
const font = `<font type="{{type}}" id="{{id}}" {{#size}}size="{{size}}"{{/size}} outline_width="{{outline_width}}" />`;
const tuning = `<tuning name="{{name}}" value="{{value}}" type="{{type}}" />`;

export default { mainConfig, patternconfiguration, colorConfiguration, option, visibility, bitmap, font, drawingOrder, tuning, dtmConfiguration, roadSize};