---
sidebar_position: 2
title: Validation
---

#

## Fluent Validation

Validation is performed using Fluent Validation. Add a static function to your request object that takes a parameter of type `AbstractValidator<RequestType>` any other parameters will be injected from the <u>[dependency container](dependency-injection)</u>.

```cs
public class WeatherForecastRequest
{
    [FromRoute]
    public required string City { get; set; }

    [FromQuery]
    public int Days { get; set; } = 5;

    public static void AddValidationRules(AbstractValidator<WeatherForecastRequest> validator)
    {
        validator.RuleFor(r => r.Days).InclusiveBetween(1, 5);
    }
}
```

Voyager will automatically add `NotNull` rules for properties that are not nullable in the request object.

## Scoped services

If you need to use scoped services during your validation you can inject the `IHttpContextAccessor` and resolve services from that.

```cs
public class WeatherForecastRequest
{
    [FromRoute]
    public required string City { get; set; }

    [FromQuery]
    public int Days { get; set; } = 5;

    public static void AddValidations(AbstractValidator<WeatherForecastRequest> validator, IHttpContextAccessor context)
    {
        validator.RuleFor(r => r.Days).Must(req => {
            var myService = context.HttpContext.RequestServices.GetRequiredService<IMyService>();
            // perform validation
        });
    }
}
```

## Errors

By default Voyager will return a 400 `BadRequest` if a validation rule fails. It uses the `Results.ValidationProblem` response object and includes all of the validation errors.

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
