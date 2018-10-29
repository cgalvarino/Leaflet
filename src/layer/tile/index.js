export {GridLayer, gridLayer} from './GridLayer';
import {TileLayer, tileLayer} from './TileLayer';
import {TimeTileLayer, timeTileLayer} from './TimeTileLayer';
import {TileLayerWMS, tileLayerWMS} from './TileLayer.WMS';
TileLayer.WMS = TileLayerWMS;
tileLayer.wms = tileLayerWMS;
export {TileLayer, tileLayer};
export {TimeTileLayer, timeTileLayer};
