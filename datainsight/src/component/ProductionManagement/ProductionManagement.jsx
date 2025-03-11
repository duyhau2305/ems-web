import React, { useEffect, useState } from 'react';
import { Table, Progress, Badge, Button, Card, Row, Col, notification } from 'antd';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto'; 

const ProductionManagement = () => {
  const [productionPlan, setProductionPlan] = useState([]);
  const [realTimeData, setRealTimeData] = useState({});
  const [qualityData, setQualityData] = useState([]);
  const [machineryData, setMachineryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const planData = [
      { id: 1, product: 'Kẹo A', quantity: 1000, status: 'Đã Lên Kế Hoạch', machine: 'Máy 1', currentMachine: 'Máy 2' },
      { id: 2, product: 'Kẹo B', quantity: 1500, status: 'Đang Tiến Hành', machine: 'Máy 2', currentMachine: 'Máy 3' },
      { id: 3, product: 'Kẹo C', quantity: 2000, status: 'Đã Hoàn Thành', machine: 'Máy 3', currentMachine: 'Máy 1' }
    ];
    setProductionPlan(planData);

    const realTimeProdData = {
      completed: 500,
      inProgress: 200,
      errors: 10
    };
    setRealTimeData(realTimeProdData);

    const qualityCtrlData = [
      { product: 'Kẹo A', passed: 98, failed: 2 },
      { product: 'Kẹo B', passed: 96, failed: 4 },
      { product: 'Kẹo C', passed: 99, failed: 1 }
    ];
    setQualityData(qualityCtrlData);

    const machineryData = [
      { machine: 'Máy 1', status: 'Hoạt Động' },
      { machine: 'Máy 2', status: 'Đang Bảo Trì' },
      { machine: 'Máy 3', status: 'Hoạt Động' }
    ];
    setMachineryData(machineryData);

    setIsLoading(false);
  }, []);

  const openNotification = () => {
    notification.error({
      message: 'Lỗi Sản Xuất',
      description: 'Đã phát hiện vấn đề trong dây chuyền sản xuất. Vui lòng kiểm tra ngay lập tức!'
    });
  };

  const chartData = {
    labels: ['Đã Hoàn Thành', 'Đang Tiến Hành', 'Lỗi'],
    datasets: [
      {
        label: 'Dữ Liệu Sản Xuất',
        data: [realTimeData.completed, realTimeData.inProgress, realTimeData.errors],
        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336']
      }
    ]
  };

  const qualityChartData = {
    labels: qualityData.map(item => item.product),
    datasets: [
      {
        label: 'Đạt Chuẩn',
        data: qualityData.map(item => item.passed),
        borderColor: '#4caf50',
        fill: false
      },
      {
        label: 'Không Đạt Chuẩn',
        data: qualityData.map(item => item.failed),
        borderColor: '#f44336',
        fill: false
      }
    ]
  };

  const columns = [
    {
      title: 'Sản Phẩm',
      dataIndex: 'product',
      key: 'product'
    },
    {
      title: 'Số Lượng',
      dataIndex: 'quantity',
      key: 'quantity'
    },
    {
      title: 'Tình Trạng',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <Badge status={status === 'Đã Hoàn Thành' ? 'success' : status === 'Đang Tiến Hành' ? 'processing' : 'default'} text={status} />
      )
    },
    {
      title: 'Máy',
      dataIndex: 'machine',
      key: 'machine'
    },
    {
      title: 'Máy Hiện Tại',
      dataIndex: 'currentMachine',
      key: 'currentMachine'
    }
  ];

  return (
    <div>
      <Row gutter={16}>
        {/* Kế hoạch sản xuất */}
        <Col span={8}>
          <Card title="Kế Hoạch Sản Xuất">
            <Table columns={columns} dataSource={productionPlan} loading={isLoading} pagination={false} rowKey="id" />
          </Card>
        </Col>

        {/* Giám sát sản xuất thời gian thực */}
        <Col span={8}>
          <Card title="Giám Sát Sản Xuất Thời Gian Thực">
            <Bar data={chartData} />
            <div style={{ marginTop: '20px' }}>
              <Progress percent={(realTimeData.completed / (realTimeData.completed + realTimeData.inProgress)) * 100} status="active" />
              <Button type="primary" danger onClick={openNotification} style={{ marginTop: '20px' }}>
                Thông Báo Lỗi
              </Button>
            </div>
          </Card>
        </Col>

        {/* Kiểm soát chất lượng */}
        <Col span={8}>
          <Card title="Kiểm Soát Chất Lượng">
            <Line data={qualityChartData} />
          </Card>
        </Col>
      </Row>

      {/* Tình trạng máy móc */}
      <Row gutter={16} style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Card title="Tình Trạng Máy Móc">
            <Table
              columns={[
                { title: 'Máy', dataIndex: 'machine', key: 'machine' },
                { title: 'Tình Trạng', dataIndex: 'status', key: 'status' }
              ]}
              dataSource={machineryData}
              pagination={false}
              rowKey="machine"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductionManagement;
