---
id: running-locally
title: Running the Application Locally
---

# Running the Application Locally

## Prerequisites

- **.NET 6 SDK**
- **SQL Server**

## Steps

1. **Restore Packages**

```bash
dotnet restore
```

2. **Update Database**

```bash
dotnet ef database update
```

3. **Run the Application**

```bash
dotnet run
```

4. **Access the Application**

Navigate to `https://localhost:5001` or `http://localhost:5000` in your web browser.
