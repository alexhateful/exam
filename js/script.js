window.onload = function () {
    let arr = [
        'https://fonts.googleapis.com/css?family=Aleo:400|Josefin+Sans:300,700',
        './css/bootstrap-grid.min.css',
        './css/normalize.css',
        './css/head.css'
    ];
    this.createLinks(arr);
    let arr2 = [
        'https://fonts.googleapis.com/css?family=Aleo:400i|Josefin+Sans:300i,400,400i,700i',
        'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css',
        './css/style.css'
    ];
    this.createLinks(arr2);
    let arr3 = [
        './js/modernizr-custom.js',
        'https://code.jquery.com/jquery-3.4.1.min.js'
    ];
    this.createScripts(arr3);
    setTimeout(() => {
        let arr4 = [
            './js/jquery.lazy.min.js',
            './js/jquery.lazy.plugins.min.js'
        ];
        this.createScripts(arr4);
    }, 3000);
    setTimeout(() => {
        $(function() {
            $('.lazy').Lazy();
        });
    }, 5000);
}
function createLinks(_arr) {
    for (let i = 0; i < _arr.length; i++) {
        let link = document.createElement('link');
        link.href = _arr[i];
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
}
function createScripts(_arr) {
    for (let i = 0; i < _arr.length; i++) {
        let script = document.createElement('script');
        script.src = _arr[i];
        script.async = 'async';
        script.defer = 'defer';
        document.body.appendChild(script);
    }
}