let countdownInterval;

function startCountdown() {

    // Get event name
    const eventName =
        document.getElementById("eventName").value;

    // Get event date
    const eventDate =
        document.getElementById("eventDate").value;

    // Check whether user entered both values
    if (eventName === "" || eventDate === "") {

        alert("Please enter event name and date!");

        return;
    }

    // Display event name
    document.getElementById("displayEvent").textContent =
        eventName;

    // Convert event date into milliseconds
    const targetDate =
        new Date(eventDate).getTime();

    // Stop previous countdown
    clearInterval(countdownInterval);

    // Start countdown
    countdownInterval = setInterval(function () {

        // Get current time
        const currentDate =
            new Date().getTime();

        // Calculate remaining time
        const difference =
            targetDate - currentDate;

        // If event has started
        if (difference <= 0) {

            clearInterval(countdownInterval);

            document.getElementById("days").textContent = "00";

            document.getElementById("hours").textContent = "00";

            document.getElementById("minutes").textContent = "00";

            document.getElementById("seconds").textContent = "00";

            document.getElementById("message").textContent =
                "🎉 Event Started! 🎉";

            return;
        }

        // Calculate days
        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        // Calculate hours
        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

        // Calculate minutes
        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        // Calculate seconds
        const seconds = Math.floor(
            (difference / 1000) % 60
        );

        // Display days
        document.getElementById("days").textContent =
            String(days).padStart(2, "0");

        // Display hours
        document.getElementById("hours").textContent =
            String(hours).padStart(2, "0");

        // Display minutes
        document.getElementById("minutes").textContent =
            String(minutes).padStart(2, "0");

        // Display seconds
        document.getElementById("seconds").textContent =
            String(seconds).padStart(2, "0");

        document.getElementById("message").textContent =
            "Time remaining...";

    }, 1000);
}