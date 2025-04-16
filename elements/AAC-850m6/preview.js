function(instance, properties) {
  let displayvalue = 1;
  var topmargin = '35px';
  var heightt = '80px';
  if (properties.disvalue == false) {
    displayvalue = 0;
    topmargin = '10px';
    heightt = '40px';
  }

  var s = document.createElement("div");

  s.id = "singleInput";

  if (properties.initial_content == null || properties.initial_content < properties.min || properties.initial_content > properties.max) {
    var defaultvalue = (0.5 * (properties.max - properties.min)) + properties.min;
  } else {
    var defaultvalue = properties.initial_content;
  }

  s.innerHTML =
    `
<div slider id="slider-distance">
  <div>
    <div inverse-left style="width:100%;"></div>
    <div range style="left:30%;"></div>
    <span thumb id="thumb" style="left:30%;"></span>
    <div sign id="signn" style="left:30%;">
      <span id="value">` + defaultvalue + `</span>
    </div>
  </div>
  <input id="rangee" type="range" tabindex="0" value="` + defaultvalue + `" max="` + properties.max + `" min="` + properties.min + `" step="1"/>
</div> `;

  instance.canvas[0].appendChild(s);
  instance.canvas[0].style.minHeight = heightt;
  instance.canvas[0].style.overflow = 'hidden';
  s.style.overflow = 'hidden';

  s.innerHTML +=
    `
<style>
[slider] {
  position: relative;
  height: 14px;
  border-radius: 10px;
  text-align: left;
  margin: ` + topmargin + ` 0px 10px 5px;
}

[slider] > div {
  position: absolute;
  left: 14px;
  right: 16px;
  height: 14px;
}

[slider] > div > [inverse-left] {
  position: absolute;
  left: 0;
  height: 14px;
  border-radius: 10px;
  background-color:` + properties.bgcolor + `;
}

[slider] > div > [range] {
  position: absolute;
  left: 0;
  height: 14px;
  border-radius: 14px;
  background-color: ` + properties.rangecolor + `;
}

[slider] > div > [thumb] {
  position: absolute;
  top: -7px;
  z-index: 2;
  height: 26px;
  width: 35px;
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

div[slider] > input[type=range]::-moz-range-track {
  -moz-appearance: none;
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
  width: 28px;
  height: 28px;
  border-radius: 0px;
  border: 0 none;
  background: red;
}

div[slider] > input[type=range]::-moz-range-thumb {
  pointer-events: all;
  width: 28px;
  height: 28px;
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
  opacity: ` + displayvalue + `;
  position: absolute;
  margin-left: -11px;
  top: -39px;
  z-index:3;
  background-color: ` + properties.rangecolor + `;
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

[slider] > div > [sign]:after {
  position: absolute;
  content: '';
  left: 0;
  border-radius: 16px;
  top: 19px;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top-width: 16px;
  border-top-style: solid;
  border-top-color: ` + properties.rangecolor + `;
}

[slider] > div > [sign] > span {
  font-size: 12px;
  font-weight: 700;
  line-height: 28px;
}
</style>`;


}
