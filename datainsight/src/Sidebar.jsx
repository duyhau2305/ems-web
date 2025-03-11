import React from 'react';
import {
    BsPeopleFill, BsBoxSeam, BsFileText, BsListCheck, BsGlobe, BsCashCoin, BsFillGearFill
} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <img src="https://datainsight.vn/_next/static/media/blue-white-logo.be2ac2bf.png" alt="" />
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <NavLink to={'/manageHuman'}>
                        <BsPeopleFill className='icon' /> Quản lý nhân sự
                    </NavLink>
                </li>
                <li className='sidebar-list-item'>
                    <NavLink to={'/manageProduct'}>
                        <BsBoxSeam className='icon' /> Quản lý hàng hóa
                    </NavLink>
                </li>
                <li className='sidebar-list-item'>
                    <NavLink to={'/manageMachines'}>
                        <BsFillGearFill className='icon' /> Quản lý máy móc
                    </NavLink>
                </li>
                <li className='sidebar-list-item'>
                    <NavLink to={'/manageContrast'}>
                        <BsFileText className='icon' /> Quản lý hợp đồng
                    </NavLink>
                </li>
                <li className='sidebar-list-item'>
                    <NavLink to={'/manageSupplier'}>
                        <BsListCheck className='icon' /> Quản lý chuỗi cung ứng
                    </NavLink>
                </li>
                <li className='sidebar-list-item'>
                    <NavLink to={'/manageWebsite'}>
                        <BsGlobe className='icon' /> Quản lý website
                    </NavLink>
                </li>
                <li className='sidebar-list-item'>
                    <NavLink to={'/manageProfit'}>
                        <BsCashCoin className='icon' /> Quản lý doanh thu
                    </NavLink>
                </li>
                <li className='sidebar-list-item'>
                    <NavLink to={'/productionManagement'}>
                        <BsFillGearFill className='icon' /> Quản lý dây chuyền sản xuất
                    </NavLink>
                </li>
                <li className='sidebar-list-item'>
                    <NavLink to={'/abnormalityReport'}>
                        <BsFillGearFill className='icon' /> Quản lý phát sinh lỗi
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
