window.onresize = function() {
    let widthInner = window.innerWidth;
    let heightInner = window.innerHeight;
    let widthOuter = window.outerWidth;
    let heightOuter = window.outerHeight;
    console.log('Внутренняя ширина окна: ' + widthInner + '\n' + 'Внешняя ширина окна: ' + widthOuter + '\n' + 'Внутренняя высота окна: ' + heightInner + '\n' + 'Внешняя высота окна: ' + heightOuter);
}