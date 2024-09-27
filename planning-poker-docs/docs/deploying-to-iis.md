---
id: deploying-to-iis
title: Deploying to IIS
---

# Deploying to IIS

## Prerequisites

- **IIS** installed on Windows Server.
- **.NET 6 Hosting Bundle** installed.

## Steps

1. **Publish the Application**

   ```bash
   dotnet publish --configuration Release --output "publish"
   ```

2. **Create an IIS Website**

   - Open **IIS Manager**.
   - Add a new website pointing to the `publish` folder.

3. **Configure Application Pool**

   - Set **.NET CLR Version** to **No Managed Code**.
   - Use the **ApplicationPoolIdentity**.

4. **Set Folder Permissions**

   - Grant the application pool identity read and execute permissions on the application folder.

5. **Configure `web.config`**

   Ensure `web.config` is correctly configured with `processPath` pointing to your executable.

6. **Restart IIS**

   - Restart IIS to apply changes.

7. **Test Deployment**

   - Access the application through the configured URL.
