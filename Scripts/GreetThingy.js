function displayGreeting() 
{
    var name = document.getElementById("nameInput").value;
    var greeting = document.getElementById("greeting");
    greeting.textContent = "My " + name + ", this is Makhado. Welcome to my website. Welcome to the party";
}