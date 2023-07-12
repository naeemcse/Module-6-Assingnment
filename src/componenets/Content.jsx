import './App.css'
const Content = () => {
  
    function getValue() {
        var textBox = document.getElementById("myTextBox");
        var button = document.getElementById("myButton");
      
        const para = document.createElement("p");
        para.innerText = textBox.value;
      
        // Insert the paragraph after the button
        button.parentNode.insertBefore(para, button.nextSibling);
      }
      
  function adjustSize() {
    // Get the text box element by its ID
    var textBox = document.getElementById("myTextBox");
    
    // Reset the height to auto
    textBox.style.height = "auto";
    
    // Set the scroll height as the height of the text box
    textBox.style.height = textBox.scrollHeight + "px";
  }
  
  
  return (
    <div>
     <div id='container'>
     <textarea id="myTextBox" onInput={adjustSize}></textarea> 
     <br />
     <br /><br />
      <button onClick={getValue} id='myButton'> Submit  </button>


      </div> 
    </div>
  );
};

export default Content;
