---
sidebar_position: 3
title: Dependency Injection
---

You can use normal constructor dependency injection.

```cs
public class MyEndpoint
{
    public MyEndpoint(IService service, IOtherService myOtherService)
    {
    }
}
```

Voyager also supports property injection. Any property that is `required` will be injected. You can also add the `[FromServices]` attribute to any property to have it be injected.

```cs
public class MyEndpoint
{
    public required IService MyService { get; set; }

    [FromServices]
    public IOtherService MyOtherService { get; set; }
}
```

Finally you can also add parameters to your handler method to have them injected. The only requirement is that the first parameter is your request object.

```cs
public class MyEndpoint
{
    public MyResponse Get(MyRequeset request, IService myService, IOtherService myOtherService)
    {

    }
}
```
