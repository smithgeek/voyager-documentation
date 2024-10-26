---
title: Benchmarks
---

| Method               |     Mean |    Error |   StdDev |   Median | Ratio | RatioSD |   Gen0 | Allocated | Alloc Ratio |
| -------------------- | -------: | -------: | -------: | -------: | ----: | ------: | -----: | --------: | ----------: |
| Voyager              | 48.49 us | 0.251 us | 0.440 us | 48.40 us |  1.00 |    0.01 | 3.6000 |  14.48 KB |        1.00 |
| VoyagerValidot       | 27.10 us | 2.530 us | 5.112 us | 30.07 us |  0.56 |    0.10 | 2.4000 |   9.79 KB |        0.68 |
| MinimalApi           | 49.45 us | 1.252 us | 2.530 us | 48.13 us |  1.02 |    0.05 | 3.6000 |  14.85 KB |        1.03 |
| AspNetCoreMvc        | 77.49 us | 0.537 us | 1.060 us | 77.24 us |  1.60 |    0.03 | 5.3000 |  21.52 KB |        1.49 |
| FastEndpoints        | 50.87 us | 0.426 us | 0.768 us | 50.62 us |  1.05 |    0.02 | 3.7000 |   15.1 KB |        1.04 |
| FastEndpointsCodeGen | 49.61 us | 0.230 us | 0.409 us | 49.51 us |  1.02 |    0.01 | 3.7000 |  15.02 KB |        1.04 |
