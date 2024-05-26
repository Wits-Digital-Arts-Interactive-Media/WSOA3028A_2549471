function displayGreeting() {
    var name = document.getElementById("nameInput").value;
    var greeting = document.getElementById("greeting");
    greeting.textContent = "Hey " + name + ", welcome to the party with Sir Khadi!";
}
