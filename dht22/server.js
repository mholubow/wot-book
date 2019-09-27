const sensor = require("node-dht-sensor").promises;
 
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
}
 
exec();