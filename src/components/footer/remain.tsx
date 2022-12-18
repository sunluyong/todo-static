import React from 'react';
import { Typography } from 'antd';

const Title = Typography.Title;

interface IRemainingTodosProps {
  count: number;
}

export default function RemainingTodos({ count }: IRemainingTodosProps) {
  /**
   * 参数 { count } 使用的 ES6 写法，等同于
   * export default function RemainingTodos(props: IRemainingTodosProps) {
   *   const { count } = props；
   *   // ...
   * }
   */
  const suffix = count === 1 ? '' : 's';

  return (
    <div className="todo-count">
      <Title level={5}>Remaining Todos</Title>
      <strong>{count}</strong> item{suffix} left
    </div>
  );
}
