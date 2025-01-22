import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useActivated, useDeactivated } from '@Vgbire/react-keep-alive';

export default function Customer() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useActivated(() => {
    console.log('租户页面进来了');
  });

  useDeactivated(() => {
    console.log('租户页面离开了');
  });

  return (
    <Spin spinning={loading}>
      <div>租户页面 - 首次加载有Loading，切换无Loading</div>
    </Spin>
  );
}
