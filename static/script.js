document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const resultDiv = document.getElementById("result");

    yesButton.addEventListener("click", function() {
        resultDiv.style.display = "block";
        document.getElementById("location").innerText = "Планета Земля";
        document.getElementById("love-image").src = "{{ url_for('static', filename='invitation-gif') }}";


        resultDiv.style.opacity = "0";
        let opacity = 0;
        const intervalId = setInterval(function() {
            if (opacity < 1) {
                opacity += 0.1;
                resultDiv.style.opacity = opacity;
            } else {
                clearInterval(intervalId);
            }
        }, 100);

        noButton.style.position = "static";
    });

    noButton.addEventListener("mouseover", function() {
        const newX = Math.random() * (window.innerWidth - noButton.clientWidth);
        const newY = Math.random() * (window.innerHeight - noButton.clientHeight);

        noButton.style.position = "absolute";
        noButton.style.left = newX + "px";
        noButton.style.top = newY + "px";
    });
});