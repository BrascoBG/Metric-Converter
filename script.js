function metricConverter(){
  let size = document.getElementById('size').value;
  let sizeUpdate = 0;
  let metric = document.getElementById('from').value;
  let toMetric = document.getElementById('to').value;

  if (metric === 'km'){
    sizeUpdate = size / 0.001;
  } 
  else if (metric === 'm'){
    sizeUpdate = size / 1;
  }
  else if (metric === 'cm'){
    sizeUpdate = size / 100;
  }
  else if (metric === 'mm'){
    sizeUpdate = size / 1000;
  }
  else if (metric === 'mi'){
    sizeUpdate = size / 0.000621371192;
  }
  else if (metric === 'in'){
    sizeUpdate = size / 39.3700787;
  }
  else if (metric === 'ft'){
    sizeUpdate = size / 3.2808399;
  }
  else if (metric === 'yd'){
    sizeUpdate = size / 1.0936133;
  }

  if (toMetric === 'cm'){
    sizeUpdate = sizeUpdate * 100;
  }
  else if (toMetric === 'km'){
    sizeUpdate = sizeUpdate * 0.001;
  }
  else if (toMetric === 'mm'){
    sizeUpdate = sizeUpdate * 1000;
  }
  else if (toMetric === 'mi'){
    sizeUpdate *= 0.000621371192;
  }
  else if (toMetric === 'yd'){
    sizeUpdate *= 1.0936133;
  }
  else if (toMetric === 'ft'){
    sizeUpdate *= 3.2808399;
  }
  else if (toMetric === 'in'){
    sizeUpdate *= 39.3700787;
  }

  console.log(size + "" + metric + " are " + sizeUpdate + "" + toMetric)

  document.getElementById('demo').style.display = "block";
  document.getElementById('demo').innerHTML = size + " " + metric + " = " + sizeUpdate + " " + toMetric;
}
