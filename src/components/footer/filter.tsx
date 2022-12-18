import React from 'react';
import { Typography, Radio } from 'antd';

const Title = Typography.Title;

export const FILTERS = {
  All: 'all',
  Active: 'active',
  Completed: 'completed'
} as const; // TypeScript 类型推断，帮助获得值的字面量类型，而不是 string

// FiltersType 结果为 "all" | "active" | "completed"
// 类似于 ValueTypeOf<Filters>
export type FiltersValueType = typeof FILTERS[keyof typeof FILTERS];

interface IFilterProps {
  filter: FiltersValueType;
}

export default function Fileter({ filter }: IFilterProps) {
  // Object.keys 会把类型转为 string，这里使用 as 断言，保证类型
  const filterTextList = Object.keys(FILTERS) as Array<keyof typeof FILTERS>;
  return (
    <div className="filters status-filters">
      <Title level={5}>Filter by Status</Title>
      <Radio.Group defaultValue={filter} size="small">
        {filterTextList.map((text) => {
          const val = FILTERS[text];
          return (
            <Radio.Button key={val} value={val}>
              {text}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </div>
  );
}
