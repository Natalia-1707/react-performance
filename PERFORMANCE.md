# Performance Optimization Report

## Baseline Measurements

### Interaction A: Sort countries
- **Commit duration**: 2.5s
- **Render duration**: 373.5ms
- **Screenshot**: ![screenshot](screenshots/baseline/1.png)

### Interaction B: Search countries

- **Commit duration**: 1.3s
- **Render duration**: 129.2ms
- **Screenshot**: ![screenshot](screenshots/baseline/2.png)

### Interaction C: Change year

- **Commit duration**: 2.2s
- **Render duration**: 392.8ms
- **Screenshot**: ![screenshot](screenshots/baseline/3.png)

### Interaction D: Toggle column

- **Commit duration**: 1.3s
- **Render duration**: 401.8ms
- **Screenshot**: ![screenshot](screenshots/baseline/4.png)



## Optimized Measurements

### Interaction A: Sort countries

- **Commit duration**: 1.9s
- **Render duration**: 26.1ms
- **Screenshot**: ![screenshot](screenshots/optimized/1.png)

### Interaction B: Search countries

- **Commit duration**: 1.2s
- **Render duration**: 28.7ms
- **Screenshot**: ![screenshot](screenshots/optimized/2.png)

### Interaction C: Change year

- **Commit duration**: 1.3s
- **Render duration**: 26ms
- **Screenshot**: ![screenshot](screenshots/optimized/3.png)

### Interaction D: Toggle column

- **Commit duration**: 0.7s
- **Render duration**: 29.9ms
- **Screenshot**: ![screenshot](screenshots/optimized/4.png)

## Summary of Improvements

### Render duration

| Interaction      | Baseline (ms) | Optimized (ms) | Improvement |
| ---------------- | ------------- | -------------- | ----------- |
| Sort countries   | 373.5         | 26.1           | 93%         |
| Search countries | 129.2         | 28.7           | 77.8%       |
| Change year      | 392.8         | 26             | 93.4%       |
| Toggle column    | 401.8         | 29.9           | 92.6%       |
| **Average**      | **324.3**     | **27.7**       | **89.2%**   |


### Commit duration

| Interaction      | Baseline (s)  | Optimized (s)  | Improvement |
| ---------------- | ------------- | -------------- | ----------- |
| Sort countries   | 2.5           | 1.9            | 24%         |
| Search countries | 1.3           | 1.2            | 7.7%        |
| Change year      | 2.2           | 1.3            | 40.9%       |
| Toggle column    | 1.3           | 0.7            | 46.2%       |
| **Average**      | **1.8**       | **1.3**        | **29.7%**   |