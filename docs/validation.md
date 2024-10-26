---
sidebar_position: 2
title: Validation
---

#

Validation is performed using [Fluent Validation](https://docs.fluentvalidation.net/en/latest/) or [Validot](https://github.com/bartoszlenar/Validot). See [benchmarks](/benchmarks) for performance differences.

## Fluent Validation

Add a static function to your request object that takes a parameter of type `AbstractValidator<RequestType>` any other parameters will be injected from the [dependency container](dependency-injection).

For performance reasons the validator is a singleton.

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

### Scoped services

If you need to use scoped services during your validation you can inject the `IHttpContextAccessor` and resolve services from that.

```cs
public record WeatherForecastRequest([FromRoute]string City, [FromQuery]int Days = 5)
{
    public static void AddValidations(AbstractValidator<WeatherForecastRequest> validator, IHttpContextAccessor contextAccessor)
    {
        validator.RuleFor(r => r.Days).Must(req => {
            var myService = context.HttpContext.RequestServices.GetRequiredService<IMyService>();
            // perform validation
        });
    }
}
```

## Validot

To use Validot add a static `CreateValidator` method on your request object that returns an `IValidator`

```cs
public static Validot.IValidator<ValidotRequest> CreateValidator()
{
	Specification<ValidotRequest> spec = _ => _
		.Member(m => m.FirstName, m => m.NotEmpty().WithMessage("name needed"))
		.Member(m => m.LastName, m => m.NotEmpty().WithMessage("last needed"))
		.Member(m => m.Age, m => m.GreaterThan(10).WithMessage("too young"))
		.Member(m => m.PhoneNumbers, m => m.NotEmptyCollection().WithMessage("phone needed"))
		.Member(m => m.UserId, m => m.GreaterThan(5).WithMessage("id must be greater than 5"));
	return Validator.Factory.Create(spec);
}
```

## Errors

By default Voyager will return a 400 `BadRequest` if a validation rule fails. It uses the [Results.ValidationProblem](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.results.validationproblem?view=aspnetcore-7.0) method and includes all of the validation errors.

If you want to handle the errors yourself or perform some other custom error handling, just add a `ValidationResult` (or `IValidationResult` for Validot) parameter to your endpoint method.

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
