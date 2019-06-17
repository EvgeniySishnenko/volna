function map () {

    ymaps.ready(init);

    function init() {
        // Создание карты.    
        let myMap = new ymaps.Map("map", {
            center: [55.78633856896589,37.60752899999993],
            zoom: 17,
            controls: []
        }),
         // Создаем геообъект с типом геометрии "Точка".
    
     myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [55.78633856896589,37.60752899999993]
        },
        // Свойства.
        // properties: {
        //     // Контент метки.
        //     iconContent: 'Москва, Образцова д.7, офис 301',
        //     hintContent: '+7 (495) 737-08-45'
        // }
    }, {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: 'islands#blackStretchyIcon',
        // Метку можно перемещать.
        // draggable: true
    }),
    myPieChart = new ymaps.Placemark([
        55.847, 37.6
    ], 
     {
        // Зададим произвольный макет метки.
        iconLayout: 'default#pieChart',
        // Радиус диаграммы в пикселях.
        iconPieChartRadius: 30,
        // Радиус центральной части макета.
        iconPieChartCoreRadius: 10,
        // Стиль заливки центральной части.
        iconPieChartCoreFillStyle: '#EE042C',
        // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
        iconPieChartStrokeStyle: '#EE042C',
        // Ширина линий-разделителей секторов и внешней обводки диаграммы.
        iconPieChartStrokeWidth: 3,
        // Максимальная ширина подписи метки.
        iconPieChartCaptionMaxWidth: 200
    });

    myMap.geoObjects
    .add(myGeoObject)
    .add(myPieChart)
    .add(new ymaps.Placemark([55.78633856896589,37.60752899999993], {
        balloonContent: '<strong>Москва, Образцова д.7, офис 301</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#EE042C'
    }));
    myMap.behaviors.disable('scrollZoom');
        
    }
    
}
module.exports = map;