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
