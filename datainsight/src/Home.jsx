import React, { useState } from 'react'
import WidgetsDropdown from './component/WidgetsDropdown/WidgetsDropdown'
import MainChart from './component/MainChart/MainChart'
import { CButton } from '@coreui/react'

function Home() {
  const [filter, setFilter] = useState('day') 

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter)
  }

  return (
    <>
      <div className='control-chart'>
        <div className='filter'>
          <h3>Biểu đồ thống kê</h3>
          <div id='group-button'>
            <CButton
              className='button-filter'
              color={filter === 'day' ? 'dark' : 'light'}
              onClick={() => handleFilterChange('day')}
            >
              Ngày
            </CButton>
            <CButton
              className='button-filter'
              color={filter === 'month' ? 'dark' : 'light'}
              onClick={() => handleFilterChange('month')}
            >
              Tháng 
            </CButton>
            <CButton
              className='button-filter'
              color={filter === 'year' ? 'dark' : 'light'}
              onClick={() => handleFilterChange('year')}
            >
              Năm
            </CButton>
          </div>
        </div>

        <div>
          <WidgetsDropdown filter={filter}></WidgetsDropdown>
        </div>

        <div className='main-chart'>
          <MainChart filter={filter}></MainChart>
        </div>
      </div>
    </>
  )
}

export default Home
