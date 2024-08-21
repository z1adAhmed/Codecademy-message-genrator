let arr = ['Kindness is one thing you can’t give away. It always comes back.', 'Friends are the family we choose', 'My purpose: to lift your spirit and to motivate you.',
   'Try to be a rainbow in someone else’s cloud.' ];
function random_message(messages){
    let random = Math.floor(Math.random() * arr.length); 
    return messages[random];
}
console.log(random_message(arr));