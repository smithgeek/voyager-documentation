---
sidebar_position: 2
title: Endpoints
---

#

## Endpoints

In Voyager endpoints are classes that are decorated with a `[VoyagerEndpoint("/path")]` attribute.

```cs
[VoyagerEndpoint("weatherForecast/{city}")]
public class WeatherForecastEndpoint
{
    public WeatherForecast Get(WeatherForecastRequest request)
    {
        // ...
    }
}
```

Add Get, Post, Put, etc methods to handle those http methods.

The first argument to your function must be your request object. All other function arguments will be [injected](dependency-injection).

### Async

The handler methods can be sync or async, just return a `Task` or `ValueTask` if you want to run asynchronously. You can get a cancellation token if desired.

```cs
[VoyagerEndpoint("weatherForecast/{city}")]
public class WeatherForecastEndpoint
{
    public async Task<WeatherForecast> Get(WeatherForecastRequest request, CancellationToken cancellationToken)
    {
        // ...
    }
}
```

### Typed Result

If your method just returns your response object it will be sent back to the client with a 200 status code. If you want to control response codes you can instead return an `IResult` and use the `TypedResults` helpers. Voyager will still determine all your response types for the OpenApi specification.

```cs
[VoyagerEndpoint("weatherForecast/{city}")]
public class WeatherForecastEndpoint
{
    public IResult Get(WeatherForecastRequest request)
    {
        var city = FindCity(request.City);
        if(city is null)
        {
            return TypedResults.NotFound();
        }

        return TypedResults.Ok(new WeatherForecastResponse());
    }
}
```

## Requests and Responses

Requests and responses are just plain c# objects.

```cs
public class WeatherForecastRequest
{
    [FromRoute]
    public required string City { get; set; }

    [FromQuery]
    public int Days { get; set; } = 5;
}

public record WeatherForecastResponse(string City, DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
```

## Model Binding

Voyager assumes that all properties in the request object come from the request body.

You can use the `[FromForm]`, `[FromRoute]`, `[FromQuery]`, `[FromHeader]`, `[FromCookie]`, and `[FromBody]` attributes to control where to bind values from. You can customize the name from the binding source by passing a string to the attribute.

```cs
class MyRequest
{
    // Comes from the request body
    public int Count { get; set; }

    // Would match the path /endpoint/{city}
    [FromRoute]
    public string City { get; set; }

    // Would match the query string ?d=2
    [FromQuery("d")]
    public ind Days { get; set; }
}
```
