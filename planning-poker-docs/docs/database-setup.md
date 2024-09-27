---
id: database-setup
title: Database Setup
---

# Database Setup

The Planning Poker application uses SQL Server for data storage.

## Editing Connection Strings

### Locate Configuration Files

- **Production**: `appsettings.json`
- **Development**: `appsettings.Development.json`

### Update the Connection String

Open the appropriate configuration file and locate the `ConnectionStrings` section.

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=PlanningPoker;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
}
```

Replace YOUR_SERVER_NAME with your SQL Server instance name.

## Updating the Database

Apply existing migrations to set up the database schema.

```bash
dotnet ef database update
```
