---
sidebar_position: 4
title: Configuration
---

Voyager generates code that uses [Minimal APIs](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis?view=aspnetcore-8.0). That means that you can add any configuration that minimal APIs support if needed. All you have to do is add a static Configure function to your endpoint.

```cs
[VoyagerEndpoint("weatherForecast/{city}")]
public class WeatherForecastEndpoint
{
    public static void Configure(RouteHandlerBuilder builder)
    {
        builder.CacheOutput();
    }
}
```
