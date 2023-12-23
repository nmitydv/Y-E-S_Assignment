document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const resultsDiv = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const fieldfirst = document.getElementById('fieldfirst').value;
        const fieldsecond = document.getElementById('fieldsecond').value;
        const fieldthird = document.getElementById('fieldthird').value;
        const paragraph = document.createElement('p');
        paragraph.textContent = `field 1: ${fieldfirst} , field 2: ${fieldsecond}, field 3: ${fieldthird}`;
        paragraph.style.color = getRandomColor();
        resultsDiv.appendChild(paragraph);
        form.reset();
    });
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
