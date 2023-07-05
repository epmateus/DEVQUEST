document
    .querySelector("select[name='estado']")
    .addEventListener('change', function () {
        console.log(event.target.value)
    });