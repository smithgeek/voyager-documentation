public record WeatherForecast(string City, DateOnly Date, int TemperatureC)
{
	public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
