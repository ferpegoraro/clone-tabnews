test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  const postgresVersion = responseBody.dependencies.database.postgres_version;
  const maxConnections = responseBody.dependencies.database.max_connections;
  const usedConnections = responseBody.dependencies.database.used_connections;

  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  expect(postgresVersion).toEqual("16.9");
  expect(typeof maxConnections).toBe("number");
  expect(maxConnections).toBeGreaterThan(0);
  expect(usedConnections).toEqual(1);
});
