
import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findMany();

  return (
     <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>
      <div className="space-y-4">
        {user.length === 0 ? (
          <p>No users found</p>
        ) : (
          user.map((user) => (
            <div key={user.id} className="border p-4 rounded">
              <div>
                <strong>Username:</strong> {user.username}
              </div>
              <div>
                <strong>Password:</strong> {user.password}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}