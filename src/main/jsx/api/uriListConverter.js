// define(function() {
// 	'use strict';
//
// 	// 각 페이지에서 사용 가능한 url 반환
// 	/* Convert a single or array of resources into "URI1\nURI2\nURI3..." */
// 	return {
// 		read: function(str /*, opts */) {
// 			return str.split('\n');
// 		},
// 		write: function(obj /*, opts */) {
// 			// If this is an Array, extract the self URI and then join using a newline
// 			if (obj instanceof Array) {
// 				return obj.map(resource => resource._links.self.href).join('\n');
// 			} else { // otherwise, just return the self URI
// 				return obj._links.self.href;
// 			}
// 		}
// 	};
//
// });
