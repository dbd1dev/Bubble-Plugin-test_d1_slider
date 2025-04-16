function(instance, properties, context) {
  let displayvalue = 1;
  var topmargin = '35px';
  if (properties.disvalue == false) {
    displayvalue = 0;
    topmargin = '10px';
  }

  var s = document.createElement("div");

  if (instance.data.once == true) {
    instance.data.suffixid = Math.floor(Math.random() * 10000000).toString(); // Generate a random suffix

    s.id = "singleInput_" + instance.data.suffixid; // Append the suffix to the ID

    if (properties.initial_content == null || properties.initial_content < properties.min || properties.initial_content > properties.max) {
      var defaultvalue = (0.5 * (properties.max - properties.min)) + properties.min;
    } else {
      var defaultvalue = properties.initial_content;
    }
      
    var styleElement = document.createElement("style");
    styleElement.id = "sliderstyle"; // Assign a unique ID to the style element
    document.head.appendChild(styleElement); // Append it to the head

    s.innerHTML =
      `
<div slider id="slider-distance_` + instance.data.suffixid + `"> <!-- Append the suffix to the ID -->
  <div>
    <div inverse-left style="width:100%;"></div>
    <div range></div>
    <span thumb id="thumb_` + instance.data.suffixid + `" style="left:30%;"></span> <!-- Append the suffix to the ID -->
    <div sign id="signn_` + instance.data.suffixid + `" style="left:30%;">
      <span id="value_` + instance.data.suffixid + `">` + defaultvalue + `</span>
    </div> <!-- Append the suffix to the ID -->
  </div>
  <input id="rangee_` + instance.data.suffixid + `" type="range" tabindex="0" value="` + defaultvalue + `" max="` + properties.max + `" min="` + properties.min + `" step="` + properties.step + `"/>
</div> `

    instance.canvas[0].appendChild(s);
    instance.canvas[0].style.padding = '18px';
    instance.data.once = false;
  }

  s.innerHTML +=
    `
<style>
[slider] {
  position: relative;
  height: 10px;
  border-radius: 10px;
  text-align: left;
  margin: ` + topmargin + ` 0px 10px 5px;
}

[slider] > div {
  position: absolute;
  left: 16px;
  right: 16px;
  height: 10px;
}

[slider] > div > [inverse-left] {
  position: absolute;
  left: 0;
  height: 10px;
  border-radius: 10px;
  outline: 1px solid #ECECEC;
}

[slider] > div > [range] {
  position: absolute;
  left: 0;
  height: 10px;
  border-radius: 14px;
}

[slider] > div > [thumb] {
  position: absolute;
  top: -7px;
  z-index: 2;
  height: 26px;
  width: 36px;
  text-align: left;
  margin-left: -11px;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  background-image: url("https://ba5edced4b568a4405fcd9ad6213c70f.cdn.bubble.io/f1698850601965x537684408569499840/control.png");
  background-repeat: no-repeat;
  border-radius: 14px;
  outline: none;
}

[slider] > input[type=range] {
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 3;
  height: 14px;
  top: -2px;
  width: 100%;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
}

div[slider] > input[type=range]::-ms-track {
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
}

div[slider] > input[type=range]:focus::-webkit-slider-runnable-track {
  background: transparent;
  border: transparent;
}

div[slider] > input[type=range]:focus {
  outline: none;
}

div[slider] > input[type=range]::-ms-thumb {
  pointer-events: all;
  width: 26px;
  height: 26px;
  border-radius: 0px;
  border: 0 none;
  background: red;
}

div[slider] > input[type=range]::-webkit-slider-thumb {
  pointer-events: all;
  width: 28px;
  height: 28px;
  border-radius: 0px;
  border: 0 none;
  background: red;
  -webkit-appearance: none;
}

div[slider] > input[type=range]::-ms-fill-lower {
  background: transparent;
  border: 0 none;
}

div[slider] > input[type=range]::-ms-fill-upper {
  background: transparent;
  border: 0 none;
}

div[slider] > input[type=range]::-ms-tooltip {
  display: none;
}

[slider] > div > [sign] {
  opacity: 0;
  position: absolute;
  margin-left: -7px;
  top: -39px;
  z-index:3;
  color: #fff;
  width: 28px;
  height: 28px;
  border-radius: 28px;
  -webkit-border-radius: 28px;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: center;
}

[slider] > div > [sign] > span {
  font-size: 12px;
  font-weight: 700;
  line-height: 28px;
}
</style>`
  

  // Get the input elements and sign elements for this specific slider
  const slider = document.querySelector('#rangee_' + instance.data.suffixid);
  const valueElement = document.querySelector('#value_' + instance.data.suffixid);
  const signElement = document.querySelector('#signn_' + instance.data.suffixid);
  const range = document.querySelector('#slider-distance_' + instance.data.suffixid + ' [range]');

    
    document.querySelectorAll('#thumb_' + instance.data.suffixid).forEach(function(thumbElement) {
    thumbElement.style.backgroundColor = properties.thumbcolor;
  });    
    

  document.querySelector('#slider-distance_' + instance.data.suffixid).style.margin = topmargin + ' 0px 10px 0px';
  document.querySelector('#slider-distance_' + instance.data.suffixid + ' >  div > [inverse-left]').style.backgroundColor = properties.bgcolor
    
  range.style.backgroundColor = properties.rangecolor;
    
  signElement.style.backgroundColor = properties.rangecolor;
 
// Get a reference to the element with the ID "slider-distance_4246230"
var sliderElement =  document.querySelector('#signn_' + instance.data.suffixid);

// Check if the style element already exists
var styleElement = document.querySelector("#sliderstyle");

// If it doesn't exist, create a new style element


// Define your CSS rules for the ::after pseudo-element
var css = `
#${sliderElement.id}::after {
    /* Your styles for the ::after pseudo-element here */
    content: '';
    position: absolute;
    left: 0;
    border-radius: 16px;
    top: 19px;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-top-width: 16px;
    border-top-style: solid;
    border-top-color: ${properties.rangecolor};
}
`;

// Set the innerHTML of the style element to your CSS rules
styleElement.innerHTML = css;


  // Set the minimum and maximum values for the range for this specific slider
  const minRangeValue = properties.min;
  const maxRangeValue = properties.max;
    
    instance.data.min=properties.min
    instance.data.max=properties.max

          // Function to update the value for this specific slider
          function updateValue() {
            let sliderValue = parseInt(slider.value);

            // Update the value text for this specific slider
            valueElement.textContent = sliderValue;
            instance.publishState('value', sliderValue);

            // Update the range for this specific slider
            
            range.style.width = `${((sliderValue - minRangeValue) / (maxRangeValue - minRangeValue)) * 100}%`;


            // Update the thumb for this specific slider
            const thumb = document.querySelector('#slider-distance_' + instance.data.suffixid + ' [thumb]');
            thumb.style.left = `${((sliderValue - minRangeValue) / (maxRangeValue - minRangeValue)) * 100}%`;

            // Update the sign position for this specific slider
            signElement.style.left = `${((sliderValue - minRangeValue) / (maxRangeValue - minRangeValue)) * 100}%`;
              
          }

  // Update the min and max attributes for the input range element for this specific slider
  slider.setAttribute('min', minRangeValue);
  slider.setAttribute('max', maxRangeValue);

    // Add event listener to the input element for this specific slider
    slider.addEventListener('input', () => {
      updateValue();

    });

  // Initial update of value for this specific slider
  updateValue();

  // Add hover effect to the slider for this specific slider
  const sliderDiv = document.querySelector('#slider-distance_' + instance.data.suffixid);
  sliderDiv.addEventListener('mouseenter', () => {
    signElement.style.opacity = displayvalue;
  });

  sliderDiv.addEventListener('mouseleave', () => {
    signElement.style.opacity = '0';
  });

  document.querySelector('#rangee_' + instance.data.suffixid).step = properties.step;
}
