import React from 'react';
import { Col, Row } from 'antd';
import Actions from './actions';
import RemainingTodos from './remain';
import Fileter, { FiltersValueType, FILTERS } from './filter';

import './index.less';

interface IFooterProps {
  todosRemaining: number;
  filter: FiltersValueType;
}
export default function Footer(props: IFooterProps) {
  const { todosRemaining, filter } = props;
  return (
    <footer className="todo-footer">
      <Row>
        <Col className="actions" span={8}>
          <Actions />
        </Col>
        <Col span={8}>
          <RemainingTodos count={todosRemaining} />
        </Col>
        <Col span={8}>
          <Fileter filter={filter} />
        </Col>
      </Row>
    </footer>
  );
}

export { FILTERS };
