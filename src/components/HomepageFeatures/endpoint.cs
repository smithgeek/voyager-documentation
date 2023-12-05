[VoyagerEndpoint("weatherForecast/{city}")]
public class WeatherForecastEndpoint
{
	public WeatherForecast[] Get(WeatherForecastRequest request)
	{
		var forecast = Enumerable.Range(1, request.Days).Select(index =>
		new WeatherForecast
		(
			request.City,
			DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
			Random.Shared.Next(-20, 55),
			summaries[Random.Shared.Next(summaries.Length)]
		)).ToArray();
		return forecast;
	}
}