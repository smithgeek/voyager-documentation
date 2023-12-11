---
sidebar_position: 5
title: Benchmarks
---

| Method               |     Mean |    Error |   StdDev | Ratio | RatioSD |   Gen0 | Allocated | Alloc Ratio |
| -------------------- | -------: | -------: | -------: | ----: | ------: | -----: | --------: | ----------: |
| Voyager              | 42.37 us | 0.233 us | 0.465 us |  1.00 |    0.00 | 3.6000 |  14.48 KB |        1.00 |
| MinimalApi           | 44.59 us | 0.261 us | 0.527 us |  1.05 |    0.02 | 3.6000 |  14.85 KB |        1.03 |
| FastEndpointsCodeGen | 45.51 us | 0.450 us | 0.908 us |  1.07 |    0.03 | 3.7000 |  15.02 KB |        1.04 |
| FastEndpoints        | 46.45 us | 0.309 us | 0.611 us |  1.10 |    0.02 | 3.7000 |   15.1 KB |        1.04 |
| AspNetCoreMvc        | 67.45 us | 0.386 us | 0.761 us |  1.59 |    0.02 | 5.2000 |  21.52 KB |        1.49 |
