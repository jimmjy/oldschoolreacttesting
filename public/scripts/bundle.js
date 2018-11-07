'use strict';

//creating random rgb value


window.addEventListener('click', function () {
    var random = Math.floor(Math.random() * 256);
    var random2 = Math.floor(Math.random() * 256);
    var random3 = Math.floor(Math.random() * 256);
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'rgb(',
            random,
            ',',
            random2,
            ',',
            random3,
            ')'
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
});
