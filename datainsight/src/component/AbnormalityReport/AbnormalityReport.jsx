import React, { useState } from 'react';
import { Table, Card, Button, Modal, Form, Input, DatePicker, notification } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const { TextArea } = Input;

const AbnormalityReport = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      errorName: 'Lỗi Đứt Dây Curoa',
      machine: 'Máy 1',
      product: 'Kẹo A',
      actionContent: 'Thay dây curoa mới và kiểm tra toàn bộ hệ thống.',
      actionResult: 'Máy hoạt động bình thường trở lại.',
      cause: 'Dây curoa bị mòn.',
      countermeasure: 'Thay thế dây curoa định kỳ.',
      effectivenessContent: 'Máy hoạt động ổn định sau khi thay dây curoa.',
      effectivenessDate: '2024-08-01',
      evaluationCriteria: 'Máy hoạt động liên tục không có sự cố.'
    },
    {
      id: 2,
      errorName: 'Lỗi Quá Nhiệt',
      machine: 'Máy 2',
      product: 'Kẹo B',
      actionContent: 'Vệ sinh hệ thống làm mát và kiểm tra cảm biến nhiệt.',
      actionResult: 'Nhiệt độ máy đã trở lại bình thường.',
      cause: 'Hệ thống làm mát bị bụi bẩn.',
      countermeasure: 'Vệ sinh hệ thống làm mát định kỳ.',
      effectivenessContent: 'Nhiệt độ máy ổn định sau khi vệ sinh.',
      effectivenessDate: '2024-08-02',
      evaluationCriteria: 'Nhiệt độ máy không vượt quá giới hạn cho phép.'
    },
    {
      id: 3,
      errorName: 'Lỗi Ngừng Hoạt Động Đột Ngột',
      machine: 'Máy 3',
      product: 'Kẹo C',
      actionContent: 'Kiểm tra các kết nối điện và thay thế dây cáp hỏng.',
      actionResult: 'Máy hoạt động trở lại bình thường.',
      cause: 'Dây cáp điện bị hỏng.',
      countermeasure: 'Kiểm tra định kỳ và thay thế dây cáp khi cần.',
      effectivenessContent: 'Máy hoạt động ổn định sau khi thay dây cáp.',
      effectivenessDate: '2024-08-03',
      evaluationCriteria: 'Máy không ngừng hoạt động đột ngột trong vòng 1 tháng.'
    },
    {
      id: 4,
      errorName: 'Lỗi Bánh Răng',
      machine: 'Máy 4',
      product: 'Kẹo D',
      actionContent: 'Thay thế bánh răng và kiểm tra hệ thống truyền động.',
      actionResult: 'Hệ thống truyền động hoạt động bình thường.',
      cause: 'Bánh răng bị mòn và bị hỏng.',
      countermeasure: 'Thay thế bánh răng định kỳ và kiểm tra hệ thống truyền động.',
      effectivenessContent: 'Hệ thống truyền động hoạt động ổn định sau khi thay bánh răng.',
      effectivenessDate: '2024-08-04',
      evaluationCriteria: 'Hệ thống truyền động hoạt động ổn định mà không có lỗi.'
    },
    {
      id: 5,
      errorName: 'Lỗi Dừng Đột Ngột',
      machine: 'Máy 5',
      product: 'Kẹo E',
      actionContent: 'Xem xét và điều chỉnh các thông số hoạt động của máy.',
      actionResult: 'Máy đã hoạt động bình thường trở lại.',
      cause: 'Cài đặt không chính xác.',
      countermeasure: 'Kiểm tra và điều chỉnh các thông số trước khi vận hành máy.',
      effectivenessContent: 'Máy hoạt động ổn định sau khi điều chỉnh.',
      effectivenessDate: '2024-08-05',
      evaluationCriteria: 'Máy không dừng đột ngột trong thời gian vận hành.'
    }
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Thêm báo cáo bất thường vào danh sách
  const addReport = (values) => {
    const newReport = {
      id: reports.length + 1,
      errorName: values.errorName,
      machine: values.machine,
      product: values.product,
      actionContent: values.actionContent,
      actionResult: values.actionResult,
      cause: values.cause,
      countermeasure: values.countermeasure,
      effectivenessContent: values.effectivenessContent,
      effectivenessDate: values.effectivenessDate.format('YYYY-MM-DD'),
      evaluationCriteria: values.evaluationCriteria
    };
    setReports([...reports, newReport]);
    setIsModalVisible(false);
    notification.success({
      message: 'Thêm Báo Cáo Thành Công',
      description: 'Báo cáo bất thường đã được thêm thành công.'
    });
    form.resetFields();
  };

  // Xử lý mở Modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Xử lý đóng Modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Tạo file PDF từ bảng báo cáo
  const generatePDF = () => {
    const reportTable = document.getElementById('report-table');

    html2canvas(reportTable).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('bao-cao-bat-thuong.pdf');
    });
  };

  // Cấu hình cột bảng báo cáo
  const columns = [
    {
      title: 'Tên Lỗi',
      dataIndex: 'errorName',
      key: 'errorName'
    },
    {
      title: 'Máy Lỗi',
      dataIndex: 'machine',
      key: 'machine'
    },
    {
      title: 'Sản Phẩm Lỗi',
      dataIndex: 'product',
      key: 'product'
    },
    {
      title: 'Nội Dung Xử Lý',
      dataIndex: 'actionContent',
      key: 'actionContent'
    },
    {
      title: 'Kết Quả Xử Lý',
      dataIndex: 'actionResult',
      key: 'actionResult'
    },
    {
      title: 'Nguyên Nhân Phát Sinh',
      dataIndex: 'cause',
      key: 'cause'
    },
    {
      title: 'Đối Sách',
      dataIndex: 'countermeasure',
      key: 'countermeasure'
    },
    {
      title: 'Nội Dung Xác Nhận Hiệu Quả',
      dataIndex: 'effectivenessContent',
      key: 'effectivenessContent'
    },
    {
      title: 'Thời Điểm Xác Nhận Hiệu Quả',
      dataIndex: 'effectivenessDate',
      key: 'effectivenessDate'
    },
    {
      title: 'Tiêu Chuẩn Đánh Giá',
      dataIndex: 'evaluationCriteria',
      key: 'evaluationCriteria'
    }
  ];

  return (
    <div>
      <Card title="Báo Cáo Bất Thường">
        <Button type="primary" onClick={showModal}>
          Thêm Báo Cáo
        </Button>
        <Button type="default" onClick={generatePDF} style={{ marginLeft: '10px' }}>
          Tải Báo Cáo PDF
        </Button>
        <Table
          columns={columns}
          dataSource={reports}
          pagination={false}
          rowKey="id"
          style={{ marginTop: '20px' }}
          id="report-table"
        />
      </Card>

      <Modal
        title="Thêm Báo Cáo Bất Thường"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={addReport}>
          <Form.Item
            name="errorName"
            label="Tên Lỗi"
            rules={[{ required: true, message: 'Vui lòng nhập tên lỗi!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="machine"
            label="Máy Lỗi"
            rules={[{ required: true, message: 'Vui lòng nhập máy lỗi!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="product"
            label="Sản Phẩm Lỗi"
            rules={[{ required: true, message: 'Vui lòng nhập sản phẩm lỗi!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="actionContent"
            label="Nội Dung Xử Lý"
            rules={[{ required: true, message: 'Vui lòng nhập nội dung xử lý!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="actionResult"
            label="Kết Quả Xử Lý"
            rules={[{ required: true, message: 'Vui lòng nhập kết quả xử lý!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="cause"
            label="Nguyên Nhân Phát Sinh"
            rules={[{ required: true, message: 'Vui lòng nhập nguyên nhân phát sinh!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="countermeasure"
            label="Đối Sách"
            rules={[{ required: true, message: 'Vui lòng nhập đối sách!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="effectivenessContent"
            label="Nội Dung Xác Nhận Hiệu Quả"
            rules={[{ required: true, message: 'Vui lòng nhập nội dung xác nhận hiệu quả!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="effectivenessDate"
            label="Thời Điểm Xác Nhận Hiệu Quả"
            rules={[{ required: true, message: 'Vui lòng chọn thời điểm xác nhận hiệu quả!' }]}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item
            name="evaluationCriteria"
            label="Tiêu Chuẩn Đánh Giá"
            rules={[{ required: true, message: 'Vui lòng nhập tiêu chuẩn đánh giá!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Thêm Báo Cáo
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AbnormalityReport;
