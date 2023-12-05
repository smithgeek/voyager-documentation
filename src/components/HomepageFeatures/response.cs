public class WeatherForecast
{
	public required string City { get; init; }

	public required DateOnly Date { get; init; }

	public string? Summary { get; init; }

	public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
