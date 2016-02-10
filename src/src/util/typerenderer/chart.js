'use strict';

define(['jsgraph'], function (Graph) {

    function renderChart(el, val, rootVal, _options) {
        el.empty();

        const options = Object.assign({}, val, _options);
        const graph = new Graph(el, options);

        const xOptions = Object.assign({}, _options.xAxis);
        const xAxis = graph.getXAxis(null, xOptions);

        const yOptions = Object.assign({}, _options.yAxis);
        const yAxis = graph.getYAxis(null, yOptions);

        if (_options.legend) {
            const legendOptions = Object.assign({}, {

            }, _options.legend);
            const legend = graph.makeLegend(legendOptions);
        }

        const series = val.data;
        if (!series) return;
        for (let i = 0; i < series.length; i++) {
            const serieData = series[i];
            const serie = graph.newSerie(serieData.label || `serie_${i}`, {}, serieData.type || 'line');
            const finalData = new Array(serieData.x.length * 2);
            for (let j = 0; j < serieData.x.length; j++) {
                finalData[j * 2] = serieData.x[j];
                finalData[j * 2 + 1] = serieData.y[j];
            }
            serie.setData(finalData);
            serie.autoAxis();
        }

        graph.resize(Math.max(el.width() - 15, 20), Math.max(el.height() - 15, 20));
        graph.draw();
    }

    return {toscreen: renderChart};

});
