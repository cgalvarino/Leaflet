import {TileLayer} from './TileLayer';

/*
 * @class TimeTileLayer
 * @inherits TileLayer
 *
 * Currently this is a stub to treat Oceansmap TimeTileLayers as normal TileLayers.  This extension was
 * originally in the OM code base and did things like paint the layer as one tile instead of smaller tiles.
 * And it kept the current timestamp on the map while loading a new user-requested time.
 */

export var TimeTileLayer = TileLayer.extend({
});


// @factory L.timeTilelayer(urlTemplate: String, options?: TimeTileLayer options)
// Instantiates a time tile layer object given a `URL template` and optionally an options object.

export function timeTileLayer(url, options) {
        return new TimeTileLayer(url, options);
}
