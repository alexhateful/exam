window.onload = function () {
    let arr = [
        'https://fonts.googleapis.com/css?family=Aleo:400|Josefin+Sans:300,700',
        './css/bootstrap-grid.min.css',
        './css/normalize.css',
        './css/head.css'
    ]
    for (let i = 0; i < arr.length; i++) {
        let link = this.document.createElement('link');
        link.href = arr[i];
        link.rel = 'stylesheet';
        this.document.head.appendChild(link);
    }
}