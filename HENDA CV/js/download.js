document.getElementById("downloadLink").addEventListener("click", function () {
    document.getElementById("myTooltip").innerHTML = "Downloading...";
    // Simulate a delay (you can replace this with actual file download logic)
    setTimeout(function () {
        document.getElementById("myTooltip").innerHTML = "Download CV";
    }, 2000); // 2000 milliseconds (2 seconds) delay for demonstration
});
