const DottedMap = require('dotted-map').default || require('dotted-map');
const map = new DottedMap({ height: 100, grid: 'diagonal' });
console.log('Map created successfully');
console.log('SVG length:', map.getSVG({ radius: 0.22, color: 'red' }).length);
