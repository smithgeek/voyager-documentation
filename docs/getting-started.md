---
sidebar_position: 1
---

# Getting Started

## Install

You can install voyager from nuget.

```
Install-Package Voyager
```

or

```
dotnet add package Voyager
```

## Setup

```cs title="Program.cs"
using Voyager;

var builder = WebApplication.CreateBuilder(args);
builder.services.AddVoyager();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(config => config.AddVoyager());

var app = builder.Build();
app.MapVoyager();
app.MapSwagger();
app.UseSwaggerUI();
app.Run();
```

If you're adding to an existing project the key changes are

```cs
using Voyager;


builder.services.AddVoyager();


app.MapVoyager();
```

If you're using Swashbuckle you'll want to add Voyager in it's configuration as well as add the endpoints api explorer.

```cs
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(config => config.AddVoyager());
```
