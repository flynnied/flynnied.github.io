/**
 * Get a random floating point number between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {float} a random floating point number
 */
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Get a random integer between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInt(1, 23));

console.log('hello')

function getRandomNumber() {
    
   //document.write(getRandomInt(1, 23)); 
    jQuery(document).ready(function () {
        
        jQuery("#rand-num").text(getRandomInt(1, 23));
        
    });
    
    
}
