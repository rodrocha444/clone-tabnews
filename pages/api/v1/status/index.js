import database from "infra/database";

export default async function status(req, res) {
  const updatedAt = new Date().toISOString()

  const result = await database.query("SHOW server_version;")
  const dbVersion = result.rows[0].server_version

  res.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: dbVersion
      }
    }
  });
}
