
document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values from form
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventVenue = document.getElementById('eventVenue').value;
    const eventPrice = document.getElementById('eventPrice').value;

    // Create a row in the table
    const table = document.getElementById('eventsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    newRow.innerHTML = `
        <td>${eventName}</td>
        <td>${eventDate}</td>
        <td>${eventVenue}</td>
        <td>${eventPrice}</td>
        <td><button onclick="addAssistant(this)">Join</button></td>
    `;

    // Clear the form
    document.getElementById('eventForm').reset();
});

function addAssistant(button) {
    const row = button.parentNode.parentNode;
    const eventName = row.cells[0].innerText;
    const userName = prompt("Enter your name to join this event:");

    if (userName) {
        row.cells[4].innerText += userName + ", ";
    }
}
