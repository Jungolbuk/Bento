
var today = new Date();
var Hr = today.getHours();

// Here you can change your name
var name = 'Jaden';

// Here you can change your greetings
var gree1 = 'Go to Sleep! ';
var gree2 = 'Why are you awake? ';
var gree3 = 'Free time! Go do something, ';
var gree4 = 'Grind time, ';
var gree5 = 'Good evening ';
var gree6 = 'Good evening ';

// Add comma in-between greeting and name
var comma= ', ';

// Define the hours of the greetings
if (Hr >= 23 && Hr < 5) {
    document.getElementById('greetings').innerText = name + comma + gree1;
} else if (Hr >= 6 && Hr < 12) {
    document.getElementById('greetings').innerText = name + comma + gree2;
} else if (Hr >= 12 && Hr < 17) {
    document.getElementById('greetings').innerText = gree3 + name;
} else if (Hr >= 17 && Hr < 23) {
    document.getElementById('greetings').innerText = gree4 + name;
}
