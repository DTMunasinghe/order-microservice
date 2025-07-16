# 🛒 Order Microservice

This is a simple microservice for managing orders, built with:

- Node.js + Express  
- PostgreSQL  
- Sequelize ORM  
- Sequelize CLI for migrations  
- Swagger for API documentation
- JWT Authentication via Auth0

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/DTMunasinghe/order-microservice.git
cd order-microservice
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root:

```env
DATABASE_URL=postgres://your_user:your_password@localhost:5432/your_database
PORT=3000

# Auth0 JWT configuration
AUTH_JWKS_URI=https://YOUR_DOMAIN/.well-known/jwks.json
AUTH_AUDIENCE=https://your-api-identifier
AUTH_ISSUER=https://YOUR_DOMAIN/
```

> ⚠️ If your password contains special characters like `#`, `&`, make sure to URL encode them or wrap the whole URL in quotes.

### 4. Sequelize CLI Commands

All Sequelize commands are available as scripts in `package.json`.

#### Create a Migration File

```bash
npm run migration:generate -- create-orders-table
```

#### Run Migrations (Create Tables)

```bash
npm run migrate
```

#### Undo Last Migration

```bash
npm run migrate:undo
```

#### Run Seed Files (if created)

```bash
npm run seed
```

#### Undo All Seed Files

```bash
npm run seed:undo
```

### 5. Development

Start the server with hot reloading:

```bash
npm run dev
```

This uses `nodemon` to reload on changes.

### 6. Authentication (JWT + Auth0)
This microservice uses Auth0 for authentication and expects a valid JWT Bearer Token on protected routes (/api/orders).

1). Sign up at https://auth0.com

2). Create an API and note its Identifier (used as AUTH_AUDIENCE)

3). Configure environment variables as shown above

4). Use the Bearer token in Swagger or with curl like this:
```bash
curl -X GET http://localhost:3000/api/orders \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### 7. Swagger Docs

Once the server is running, visit:

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)
