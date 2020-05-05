# API documentation using POSTMAN
## Link
https://www.getpostman.com/collections/8d9e32c2cfdb1879a9f9

## List
**Prefix**: `http://localhost:8080/api/`
### Companies (/Company)
1. Create `POST /`
2. Get by id `GET /:id`
3. Get all `GET /all`
4. Delete all `DELETE /all`
5. Delete by id `DELETE /:id`

### Departments (/Deparment)
1. Create `POST /`
2. Get by id `GET /:id`
3. Get all `GET /all`
4. Delete all `DELETE /all`
5. Delete by id `DELETE /:id`

### Users (/User)
1. Create `POST /`
2. Get by id `GET /:id`
3. Get all `GET /all`
4. Delete all `DELETE /all`
5. Delete by id `DELETE /:id`

# How to start
**Note** Server is started on localhost:8080
## Entity framework installed packages
1. Microsoft.AspNetCore.Mvc.NewtonsoftJson `v3.1.3`
2. Microsoft.CodeAnalysis.Analyzers `v2.9.4`
3. Microsoft.EntityFrameworkCore `v3.1.3`
4. Microsoft.EntityFrameworkCore.Sqlite `v3.1.2`
5. Microsoft.EntityFrameworkCore.SqlServer `v3.1.3`
6. Microsoft.EntityFrameworkCore.Tools `v3.1.2`
7. Microsoft.OpenApi `v1.1.4`
8. Microsoft.VisualStudio.Web.CodeGeneration.Contracts `v3.1.2`
9. Microsoft.VisualStudio.Web.CodeGeneration.Design `v3.1.2`
10. Newtonsoft.Json `v12.0.3`
11. SwashBuckle.AspNetCore.MicrosoftExtensions `v0.5.0`

## Database connection information
**Note**: Create a connection to local database using Docker or Remote server. Configuration may change due to the database information
```
Id=sa;
password=ThisIsTheRoot123;
server=localhost;
Database=CompanyContactManagement
```

## Available scripts
### Migrate database
**Required before starting app**
```
dotnet ef database update
```

Build app
```
dotnet build
```

Start the app using dotnet CLI
```
dotnet run
```


# TODOs
Create modifidation APIs for each resource
1. User `PUT /api/User/:id`
2. Company `PUT /api/Company/:id`
3. Department `PUT /api/Department/:id`