//creating random rgb value


window.addEventListener('click', () => {
    const random = Math.floor(Math.random() * 256);
    const random2 = Math.floor(Math.random() * 256);
    const random3 = Math.floor(Math.random() * 256);
    const template = (
        <div>
            <p>rgb({random},{random2},{random3})</p>
        </div>
    );

    ReactDOM.render(template,document.getElementById('app'));
});
