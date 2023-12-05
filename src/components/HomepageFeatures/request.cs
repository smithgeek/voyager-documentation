public class WeatherForecastRequest
{
	[FromRoute]
	public required string City { get; set; }

	[FromQuery]
	public int Days { get; set; } = 5;
}

