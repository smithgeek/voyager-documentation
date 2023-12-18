public class WeatherForecast
{
	public required string City { get; init; }

	public required DateOnly Date { get; init; }

	public int TemperatureC { get; init; }

	public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
