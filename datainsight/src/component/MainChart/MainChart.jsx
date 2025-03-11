import React from 'react'

import { CChartLine } from '@coreui/react-chartjs'
import { CCol, CRow, CCard } from '@coreui/react'
import { getStyle } from '@coreui/utils'

const MainChart = () => {
  const progressExample = [
    { title: 'Lượt truy cập', value: '29.703 Người dùng', percent: 40, color: 'success' },
    { title: 'Người dùng mới', value: '24.093 Người dùng', percent: 20, color: 'info' },
    { title: 'Lượt xem trang', value: '78.706 Lượt', percent: 60, color: 'warning' },
    { title: 'Người dùng mới', value: '22.123 Người dùng', percent: 80, color: 'danger' },
    { title: 'Tỷ lệ thoát', value: 'Tỷ lệ trung bình', percent: 40.15, color: 'primary' },
  ]

  const random = () => Math.round(Math.random() * 100)

  return (
    <>
      <CCard>
        <CChartLine
          style={{ height: '300px', marginTop: '40px' }}
          data={{
            labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7'],
            datasets: [
              {
                label: 'Dữ liệu đầu tiên',
                borderColor: '#0074D9',
                pointHoverBackgroundColor: '#0074D9',
                borderWidth: 2,
                data: [
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                ],
                fill: true,
              },
              {
                label: 'Dữ liệu thứ hai',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                borderColor: '#7CFC00',
                pointHoverBackgroundColor: 'red',
                borderWidth: 2,
                data: [220, 65, 220, 220, 200, 65, 65],
              },
              {
                label: 'Dữ liệu thứ ba',
                backgroundColor: 'rgba(255, 165, 0, 0.5)',
                borderColor: '#FFA07A',
                pointHoverBackgroundColor: '#FFA07A',
                borderWidth: 1,
                borderDash: [8, 5],
                data: [65, 65, 100, 100, 100, 65, 65],
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  drawOnChartArea: false,
                },
                ticks: {},
              },
              y: {
                beginAtZero: true,
                max: 250,
                ticks: {
                  maxTicksLimit: 5,
                  stepSize: Math.ceil(250 / 5),
                },
              },
            },
            elements: {
              line: {
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
              },
            },
          }}
        />

        <CRow className="box-progress" style={{ marginTop: '20px' }}>
          {progressExample.map((item, index) => (
            <CCol key={index} className="progress">
              <div style={{ color: item.color }} className="text-body-secondary">{item.title}</div>
              <div className="fw-semibold text-truncate" style={{ color: item.color }}>
                {item.value} ({item.percent}%)
              </div>
              <div
                style={{
                  width: '100%',
                  height: '5px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '5px',
                  marginTop: '5px',
                }}
              >
                <div
                  style={{
                    width: `${item.percent}%`,
                    height: '100%',
                    backgroundColor: getStyle(item.color),
                    borderRadius: '5px',
                  }}
                />
              </div>
            </CCol>
          ))}
        </CRow>
      </CCard>
    </>
  )
}

export default MainChart
