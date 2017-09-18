var fontA = new FontFaceObserver('Frutiger W01', {
    weight: 300,
    style: 'normal'
})

if (!sessionStorage.fontsLoaded) {

    Promise.all([
        fontA.load()
    ]).then(function() {
        document.documentElement.className += ' fonts-stage-1';

        var fontB = new FontFaceObserver('Dewnrger', {
            weight: 700,
            style: 'normal'
        })

        Promise.all([
            fontB.load()
        ]).then(function() {
            document.documentElement.className += ' fonts-stage-2';
            sessionStorage.fontsLoaded = true;
        }).catch(function(e) {
            console.log(e);
        });
    }).catch(function(e) {
        console.log(e);
    });

} else {
    document.documentElement.className += ' fonts-stage-1 fonts-stage-2';
}
