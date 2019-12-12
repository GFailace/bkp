M.AutoInit();

let reps = []

window.onload = function () {
    fetch('http://localhost:3000')
        .then(function (response) {
            return response.json()
        })

}

