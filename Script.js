let arr = [
    'Kindness is one thing you can not give away. It always comes back.', 
    'Friends are the family we choose', 
    'My purpose: to lift your spirit and to motivate you.',
    'Try to be a rainbow in someone else cloud.'
];

function random_message(messages) {
    let random = Math.floor(Math.random() * messages.length); 
    return messages[random];
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById("button");
    const printArea = document.getElementById("print-area");

    button.addEventListener('click', function(){
        // Get a random message
        const message = random_message(arr);

        // Update the content of the print area
        printArea.innerHTML = `<h1>${message}</h1>`;


    });
});
