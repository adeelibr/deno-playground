import client from "../db/client.ts";
// config
import { TABLE } from "../db/config.ts";
// Interface
import Todo from "../interfaces/Todo.ts";

export default {
  doesExistById: async ({ id }: Todo) => {
    const [result] = await client.query(
      `SELECT COUNT(*) count FROM ${TABLE.TODO} WHERE id = ? LIMIT 1`,
      [id],
    );
    return result.count > 0;
  },
  getAll: async () => {
    return await client.query(`SELECT * FROM ${TABLE.TODO}`);
  },
  getById: async ({ id }: Todo) => {
    return await client.query(
      `SELECT * FROM ${TABLE.TODO} WHERE id = ?`,
      [id],
    );
  },
  add: async (
    { todo, isCompleted }: Todo,
  ) => {
    return await client.query(
      `INSERT INTO ${TABLE.TODO}(todo, isCompleted) values(?, ?)`,
      [
        todo,
        isCompleted,
      ],
    );
  },
  updateById: async ({ id, todo, isCompleted }: Todo) => {
    const result = await client.query(
      `UPDATE ${TABLE.TODO} SET todo=?, isCompleted=? WHERE id=?`,
      [
        todo,
        isCompleted,
        id,
      ],
    );
    // return count of rows updated
    return result.affectedRows;
  },
  deleteById: async ({ id }: Todo) => {
    const result = await client.query(
      `DELETE FROM ${TABLE.TODO} WHERE id = ?`,
      [id],
    );
    // return count of rows updated
    return result.affectedRows;
  },
};
