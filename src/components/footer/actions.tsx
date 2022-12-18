import React from 'react';
import { Typography, Button } from 'antd';

const Title = Typography.Title;

export default function () {
  return (
    <>
      <Title level={5}>Actions</Title>
      <Button className="btn-action" size="small">
        Mark All Completed
      </Button>
      <Button className="btn-action" size="small">
        Clear Completed
      </Button>
    </>
  );
}
