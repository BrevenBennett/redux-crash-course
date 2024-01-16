import Counter2 from "./Counter2";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";
import { useGetAllPostsQuery, useGetPostByIdQuery } from "../redux/postsSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useGetPostByIdQuery(5);

  return (
    <div>
        {JSON.stringify(data)}
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by amount
      </button>
      <Counter2 />
    </div>
  );
}
