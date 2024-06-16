// import postgres from "postgres";

import * as React from 'react';
import {Comments} from "@/app/comments";

// let sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
//   ssl: "allow",
// });

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let counter = 0;

export default async function Home() {
  // let todos = await sql`SELECT * FROM todos`;
  let todos = [
      {
          id: 1,
          text: 'text 1'
      },
      {
          id: 2,
          text: 'text 2'
      }
  ];

    const testPromise = sleep(2000).then(() => {
        return ['test 1', 'test 2', 'test 3'];
    });

  console.log('Home', ++counter);

  return (
    <main>
      <h1 className="sr-only">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
        <React.Suspense>
            <Comments promise={testPromise} counter={counter} />
        </React.Suspense>
    </main>
  );
}
