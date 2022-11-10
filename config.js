var config = {
    style: 'mapbox://styles/kcooks614/cl9w2jy8g001615qt6xng94el',
    accessToken: 'pk.eyJ1Ijoia2Nvb2tzNjE0IiwiYSI6ImNsOXZ0cXJ1MzBjY2Q0MW82MzFkcWdoY24ifQ.ApmaHfzQFyuRMqfyjdCZUw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'Exploring the susceptibility of NYCHA buildings to another Sandy',
    byline: 'By Kellen Cooks',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'The Impact of Hurricane Sandy',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks]. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-73.97968, 40.69785],
                zoom: 12,
                pitch: 60,
                bearing: 40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'layer-name',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook Houses',
            image: 'file:///Users/kellencooks/Downloads/sandy_anniv_-_redhookhousespk1196377541784_10292021.png',
            description: 'The Red Hook Houses were extremely hard hit by Hurricane Sandy, experiencing 6 feet of flood water, leading to loss of power, loss of fresh water, and lots of mold throughout the development. The Red Hook Houses were promised $560 million in grant money for repairs from FEMA, but there remains skepticism around the repair plans and an ignorance against other issues affecting the housing development.',
            location: {
                center: [-74.004608, 40.675838],
                zoom: 16,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
       
    ]
};
