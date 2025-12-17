function predictAttendance() {
    const total = parseInt(document.getElementById("totalClasses").value);
    const attended = parseInt(document.getElementById("attendedClasses").value);

    if (isNaN(total) || isNaN(attended) || total <= 0 || attended < 0 || attended > total) {
        alert("Please enter valid attendance details");
        return;
    }

    const currentPercent = ((attended / total) * 100).toFixed(2);

    let message = "";
    let warning = "";

    if (currentPercent >= 75) {
        message = "You are already above 75%. Keep it up! 🎉";
    } else {
        let required = attended;
        let futureTotal = total;

        while ((required / futureTotal) * 100 < 75) {
            required++;
            futureTotal++;
        }

        const classesNeeded = futureTotal - total;
        message = `You need to attend <strong>${classesNeeded}</strong> more classes continuously to reach 75%.`;
        warning = "⚠️ Low attendance! Avoid missing further classes.";
    }

    document.getElementById("current").innerHTML =
        `Current Attendance: <strong>${currentPercent}%</strong>`;

    document.getElementById("prediction").innerHTML = message;
    document.getElementById("warning").innerHTML = warning;
}
