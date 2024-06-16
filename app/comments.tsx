"use client";

import * as React from 'react';
// import { useActionState } from "react";
// import { useFormStatus } from "react-dom";
// import { deleteTodo } from "@/app/actions";

// const initialState = {
//   message: "",
// };
//
// function DeleteButton() {
//   const { pending } = useFormStatus();
//
//   return (
//     <button type="submit" aria-disabled={pending}>
//       Delete
//     </button>
//   );
// }

export function Comments({ promise, counter }) {
  // const [state, formAction] = useActionState(deleteTodo, initialState);
  //
  // return (
  //   <form action={formAction}>
  //     <input type="hidden" name="id" value={id} />
  //     <input type="hidden" name="todo" value={todo} />
  //     <DeleteButton />
  //     <p aria-live="polite" className="sr-only" role="status">
  //       {state?.message}
  //     </p>
  //   </form>
  // );

    const comments = React.use(promise);

    console.log('comments', counter, comments);

    return (
        <>
            <p>client component</p>
            {comments.map((comment, i) => (
                <p className="comment" key={i}>
                    {comment}
                </p>
            ))}
        </>
    );
}
