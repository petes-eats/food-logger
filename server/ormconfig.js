module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  entities: ["./src/*.entities{.ts,.js}"],
  synchronize: true,
};
