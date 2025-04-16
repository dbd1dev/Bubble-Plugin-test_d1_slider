function(instance, properties, context) {


  const slider = document.querySelector('#rangee_' + instance.data.suffixid);
  const valueElement = document.querySelector('#value_' + instance.data.suffixid);
  const signElement = document.querySelector('#signn_' + instance.data.suffixid);
  const range = document.querySelector('#slider-distance_' + instance.data.suffixid + ' [range]');
    
    const minRangeValue = instance.data.min;
    const maxRangeValue = instance.data.max;
    
    
slider.value = properties.value;


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