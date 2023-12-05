---
sidebar_position: 2
title: Validation
---

#

## Fluent Validation

Validation is performed using Fluent Validation. Add a static function named AddValidationRules to your request object to add validation rules.

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

Voyager will automatically add `NotNull` rules for properties that are `required` in the request object.

## Errors

By default Voyager will return a 400 `BadRequest` if a validation rule fails. It uses the `Results.ValidationProblem` response object and includes all of the validation errors.

If you want to handle the errors yourself or perform some other custom error handling, just add a `ValidationResult` parameter to your endpoint method.

```cs
public class WeatherForecastRequest
{
    [FromQuery]
    public int Days { get; set; } = 5;

    public WeatherForecastResponse Get(WeatherForecastRequest request, ValidationResult validationResults)
    {
        if(validationResults.IsValid)
        {
        }
    }

    public static void AddValidationRules(AbstractValidator<WeatherForecastRequest> validator)
    {
        validator.RuleFor(r => r.Days).InclusiveBetween(1, 5);
    }
}
```
