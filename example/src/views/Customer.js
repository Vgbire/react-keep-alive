import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useActivated, useDeactivated } from 'react-route-cache';

export default function Customer() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useActivated(() => {
    console.log('客户页面进来了');
  }, []);

  useDeactivated(() => {
    console.log('客户页面离开了');
  }, []);

  return (
    <Spin spinning={loading}>
      <div>客户页面 - 首次加载有Loading，切换无Loading</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </button>
    </Spin>
  );
}
