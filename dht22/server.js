const sensor = require("node-dht-sensor").promises;
 

interval = setInterval(function () {
async function exec() {
     
  try {
     
    const res = await sensor.read(22, 17);
    console.log(
      `temp: ${res.temperature.toFixed(1)}°C, ` +
        `humidity: ${res.humidity.toFixed(1)}%`
    );
  } catch (err) {
    console.error("Failed to read sensor data:", err);
  }


process.on('SIGINT', function () { //#F
    clearInterval(interval);
    console.log('Bye, bye!');
    process.exit();
  });


}

exec();

}, 3000);
  


 
