const tipCalculator = (quality, total) => {
  if (quality === 'bad'){
    return total * 0.05;
  } else if (quality === 'ok'){
    return total * 0.15;
  } else if (quality === 'good'){
    return total * 0.2;
  } else  if (quality === 'excellent'){
    return total * 0.3;
  } else {
    return total * 0.18;
  }
}
