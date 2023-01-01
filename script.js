//your code here
const textBox = document.getElementById('evaluatedText');
const wordCount = document.getElementById('wordCount');

// Add an event listener to the textbox that listens for changes
textBox.addEventListener('keyup', function() {
    
    if(textBox.value === ""){
        wordCount.innerText = 0
    }
    else{
        const text = textBox.value.trim().split(" ")

        if(text.length > 0)
          {
            wordCount.innerText = text.length
          }
    }
 
});
