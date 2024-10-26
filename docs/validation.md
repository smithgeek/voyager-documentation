---
sidebar_position: 2
title: Validation
---

#

## Fluent Validation

Validation is performed using [Fluent Validation](https://docs.fluentvalidation.net/en/latest/). Add a static function to your request object that takes a parameter of type `AbstractValidator<RequestType>` any other parameters will be injected from the [dependency container](dependency-injection).

```cs
public record WeatherForecastRequest([FromRoute]string City, [FromQuery]int Days = 5)
{
    public static void AddValidationRules(AbstractValidator<WeatherForecastRequest> validator)
    {
        validator.RuleFor(r => r.Days).InclusiveBetween(1, 5);
    }
}
```

Voyager will automatically add `NotNull` rules for properties that are not nullable in the request object.

## Scoped services

If you need to use scoped services during your validation you can inject the `HttpContext` and resolve services from that.

```cs
public record WeatherForecastRequest([FromRoute]string City, [FromQuery]int Days = 5)
{
    public static void AddValidations(AbstractValidator<WeatherForecastRequest> validator, HttpContext context)
    {
        validator.RuleFor(r => r.Days).Must(req => {
            var myService = context.RequestServices.GetRequiredService<IMyService>();
            // perform validation
        });
    }
}
```

## Errors

By default Voyager will return a 400 `BadRequest` if a validation rule fails. It uses the [Results.ValidationProblem](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.results.validationproblem?view=aspnetcore-7.0) method and includes all of the validation errors.

If you want to handle the errors yourself or perform some other custom error handling, just add a `ValidationResult` parameter to your endpoint method.

```cs
[VoyagerEndpoint("weatherForecast/{city}")]
public class WeatherForecastEndpoint
{
    public WeatherForecastResponse Get(WeatherForecastRequest request, ValidationResult validationResults)
    {
        if(validationResults.IsValid)
        {
        }
    }
}
```
