const body = document.querySelector('body');

body.onload = () => {

    new Vue({
        el: '#vue-container',
        data: {
            test: 'this is a test element'
        }
    });

};