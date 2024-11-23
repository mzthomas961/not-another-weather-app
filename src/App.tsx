import WeatherCards from "./components/WeatherCards"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"

const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&temperature_unit=fahrenheit'

fetch(url)
  .then(response => response.json())
  .then(data => {
    const hourlyTemperature = data.hourly.temperature_2m;
    hourlyTemperature.forEach((temp, index) => {
      console.log(`Hour ${index}: ${temp}°F`);
    });
  });



export default function App() {
  return (
    <div>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    {
    <div>   
      <ModeToggle/>
      <WeatherCards/>
    </div>
    }
  </ThemeProvider>
    </div>
  )
}