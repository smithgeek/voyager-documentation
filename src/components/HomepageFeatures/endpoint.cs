[VoyagerEndpoint("weatherForecast/{City}")]
public class WeatherForecastEndpoint
{
	public IEnumerable<WeatherForecast> Get(WeatherForecastRequest request)
	{
		return Enumerable.Range(1, request.Days).Select(index =>
			new WeatherForecast
			{
				City = request.City,
				Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
				TemperatureC = Random.Shared.Next(-20, 55),
			}
		);
	}
}