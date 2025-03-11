import React from 'react'

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

export default function WidgetsDropdown() {
  return (
    <div className='container-chart'>
      <div className='chart'>
        <div>
          <CCol className='chart-col chart-col-money'>
            <CWidgetStatsA
              value={
                <>
                  26K{' '}
                  <span className="fs-6 fw-normal">
                (-12.4% <CIcon className='icon-down' icon={cilArrowBottom} />)
              </span>
                </>
              }
              title="Người dùng"

              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: '70px' }}
                  data={{
                    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7'],
                    datasets: [
                      {
                        label: 'Dataset 1',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        data: [65, 59, 84, 84, 51, 55, 40],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        border: {
                          display: false,
                        },
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
        </div>
        <div>
          <CCol className='chart-col chart-col-human'>
            <CWidgetStatsA
              color="primary"
              value={
                <>
                  18K{' '}
                  <span className="fs-6 fw-normal">
                (-10.5% <CIcon className='icon-down' icon={cilArrowBottom} />)
              </span>
                </>
              }
              title="Sản phẩm bán"

              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: '70px' }}
                  data={{
                    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7'],
                    datasets: [
                      {
                        label: 'Dataset 2',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        data: [45, 49, 74, 64, 71, 55, 50],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        border: {
                          display: false,
                        },
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
        </div>
        <div>
          <CCol className='chart-col chart-col-product'>
            <CWidgetStatsA
              color="primary"
              value={
                <>
                  10K{' '}
                  <span className="fs-6 fw-normal">
                (-8.2% <CIcon className='icon-down' icon={cilArrowBottom} />)
              </span>
                </>
              }
              title="Người dùng hoạt động"

              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: '70px' }}
                  data={{
                    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7'],
                    datasets: [
                      {
                        label: 'Dataset 3',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        data: [65, 59, 74, 84, 51, 65, 40],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        border: {
                          display: false,
                        },
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
        </div>
        <div>
          <CCol className='chart-col chart-col-nguyenlieu'>
            <CWidgetStatsA
              value={
                <>
                  8K{' '}
                  <span className="fs-6 fw-normal">
                (-5.6% <CIcon className='icon-down' icon={cilArrowBottom} />)
              </span>
                </>
              }
              title="Nguyên liệu tồn kho"

              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: '70px' }}
                  data={{
                    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7'],
                    datasets: [
                      {
                        label: 'Dataset 4',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        data: [35, 49, 54, 74, 61, 55, 50],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        border: {
                          display: false,
                        },
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
        </div>
      </div>
    </div>
  )
}
