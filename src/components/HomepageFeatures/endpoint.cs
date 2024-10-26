[VoyagerEndpoint("weatherForecast/{City}")]
public class WeatherForecastEndpoint
{
	public IEnumerable<WeatherForecast> Get(WeatherForecastRequest request)
	{
		return Enumerable.Range(1, request.Days).Select(index =>
			new WeatherForecast(request.City, DateOnly.FromDateTime(DateTime.Now.AddDays(index)), Random.Shared.Next(-20, 55))
		);
	}
}