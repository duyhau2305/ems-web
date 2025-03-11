import React, { useState } from "react";
import { Carousel, Button } from "antd";
import qcs1 from '../../assets/qcs1.png';
import qcs2 from '../../assets/qcs2.png';
import qcs0 from '../../assets/qcs0.png';
import qcs3 from '../../assets/qcs3.png';
import qcs4 from '../../assets/qcs4.png';
import qcs5 from '../../assets/qcs5.png';
import qcs6 from '../../assets/qcs6.png';
import qcs7 from '../../assets/qcs7.jpg';
import solar1 from '../../assets/solar1.png';
import solar2 from '../../assets/solar2.png';
import solar3 from '../../assets/solar3.png';
import solar4 from '../../assets/solar4.png';
import solar5 from '../../assets/solar5.png';
import ashHome from '../../assets/ashHome.png';
import ashAddAttribute from '../../assets/ashAddAttribute.png';
import ashAddProduct from '../../assets/ashAddProduct.png';
import ashAnalysis from '../../assets/ashAnalysis.png';
import ashDetail from '../../assets/ashDetail.png';
import ashManageOrder from '../../assets/ashManageOrder.png';
import ashOrder from '../../assets/ashOrder.png';
import ashPay from '../../assets/ashPay.png';
import ashPayment from '../../assets/ashPayment.png';
import ashShop from '../../assets/ashShop.png';
import compare from '../../assets/compare.png';

interface Project {
    id: number;
    tittle: string;
    tech: string[];
    description: string[];
    image: string[];
    show: string;
    type: number;
    git: string;
    figma: string;
    link: string;
}

const projects: Project[] = [
    {
        id: 1,
        tittle: 'Quản lí nhà máy',
        tech: ['ReactJS', 'NodeJS', 'Docker', 'MongoDB'],
        description: ['Quản lí thiết bị', 'Quản lí thiết bị', 'Ca làm việc của nhân viên', 'Điều khiển thiết bị', 'Quản lí trạng thái máy', 'Thông báo tới nhân viên', 'Các thống kê về máy'],
        image: [qcs0, qcs7, qcs2, qcs3, qcs4, qcs5, qcs6, qcs1],
        show: '1. Phát triển toàn giao diện phần mềm , 2. Phát triển Database , 3. Phát triển Api kèm các service xử lí dữ liệu , 4. Xây dựng các service xử lí dữ liệu , 5. Deploy và xây dựng quản lí network với docker',
        type: 0,
        git: '',
        figma: '',
        link: ''
    },
    {
        id: 2,
        tittle: 'Quản lí Năng lượng',
        tech: ['Angular', '.Net', 'Docker', 'Ubuntu'],
        description: ['Quản lí năng lượng thiết bị', 'Quản lí hiệu năng máy', 'Thống kê công suất máy', 'Biểu đồ thống kê máy'],
        image: [solar5, solar2, solar3, solar4, solar1],
        show: '1. Phát triển toàn bộ giao diện phần mềm , 2. Phát triển Database , 3. Phát triển Api kèm các service xử lí dữ liệu , 4. Xây dựng các service xử lí dữ liệu , 5. Deploy và xây dựng quản lí network với docker',
        type: 0,
        git: '',
        figma: '',
        link: ''
    },
    {
        id: 3,
        tittle: 'Trang web bán đồ thể thao',
        tech: ['.Net', 'MySQL', 'ReactJS'],
        description: ['Trang chủ', 'Trang sản phẩm', 'Trang chi tiết sản phẩm', 'Trang so sánh', 'Trang đơn hàng', 'Trang thanh toán', 'Trang giao dịch', 'Trang quản lí sản phẩm', 'Trang quản lí thuộc tính', 'Trang quản lí đơn hàng', 'Trang thống kê'],
        image: [ashHome, ashShop, ashDetail, compare, ashOrder, ashPayment, ashPay, ashAddProduct, ashAddAttribute, ashManageOrder, ashAnalysis],
        show: '1. Phát triển giao diện người dùng , 2. Phát triển Giao diện quản lí , 3. Phát triển Api kèm các service xử lí sản phẩm và đơn hàng, 5. Phân quyền các tác vụ giữa admin với manager , 6. Quản lí các thuộc tính của sản phẩm , 7. Deploy và xây dựng quản lí network , 8. Xây dựng giao diện Figma',
        type: 0,
        git: '',
        figma: 'https://www.figma.com/design/5khD1l2zwTHDO1ZSksI13a/ASH?t=Ngp5mJphnU7czQrG-0',
        link: 'http://ash-store.cloud/'
    },
    {
        id: 4,
        tittle: 'App đấu giá trực tuyến',
        tech: ['Angular', 'Ionice', '.Net'],
        description: [],
        image: [],
        show: '1. Phát triển giao diện người dùng ,2.Phát triển database, 3. Phát triển Api , 4. Đấu giá trực tuyến ,5. Xác thực và bảo mật với Google Authen ticator , Facebook và Apple , 6. Deploy Server và thực hiện đưa app lên App store và CH Play',
        type: 3,
        git: '',
        figma: '',
        link: 'Tải App trên App store hoặc Chplay'
    },
];

const Slider: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(projects[0]);

    return (
        <div style={{ margin: '20px', padding: '20px', backgroundColor: '#f4f7fb', borderRadius: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "20px" }}>
                {/* Danh sách nút chọn dự án */}
                <div>
                    {projects.map((project) => (
                        <Button
                            key={project.id}
                            type={selectedProject?.id === project.id ? "primary" : "default"}
                            onClick={() => setSelectedProject(project)}
                            style={{
                                marginRight: "10px",
                                backgroundColor: selectedProject?.id === project.id ? '#4caf50' : '#b3b6b9',
                                borderRadius: '5px',
                                color: selectedProject?.id === project.id ? '#fff' : '#333',
                                fontWeight: 'bold',
                                padding: '10px 20px',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {project.tittle}
                        </Button>
                    ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {selectedProject?.figma && (
                        <div>
                            <a href={selectedProject?.figma} target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', fontWeight: 'bold', color: '#1890ff' }}>
                                Figma Design
                            </a>
                        </div>
                    )}
                    {selectedProject?.type === 3 && (
                        <div style={{ marginLeft: '10px' }}>
                            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                Tải App trên:
                            </p>
                            <div style={{ marginBottom: '10px' }}>
                                <a
                                    href="https://apps.apple.com/vn/app/th%C3%A0nh-an/id6450130150?l=vi" // Link App Store
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontSize: '16px', color: '#1890ff', marginRight: '20px' }}
                                >
                                    App Store
                                </a>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.ThanhAn.Auction&pli=1" // Link CHPlay
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontSize: '16px', color: '#1890ff' }}
                                >
                                    CH Play
                                </a>
                            </div>
                            <p style={{ fontSize: '16px', color: '#333' }}>
                                Tên App: <span style={{ fontWeight: 'bold' }}>Auction Thành An</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Hiển thị công nghệ của dự án được chọn */}
            {selectedProject && (
                <div style={{ marginBottom: "20px" }}>
                    <h3 style={{ color: '#333' }}>Công nghệ sử dụng:</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {selectedProject.tech.map((tech, index) => (
                            <div
                                key={index}
                                style={{
                                    margin: '10px',
                                    padding: '10px 20px',
                                    borderRadius: '20px',
                                    backgroundColor: '#eef2f7',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>

                </div>
            )}

            {/* Slider của dự án được chọn */}
            {selectedProject && (
                <div>
                    <Carousel
                        autoplay
                        dots
                        dotPosition="left"
                    >
                        {/* Slide đầu tiên hiển thị nội dung show */}
                        <div key="show-slide">
                            <div
                                style={{
                                    height: '800px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    background: '#364d79',
                                    color: '#fff',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                }}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        color: '#fff',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        textAlign: 'left',
                                        width: '100%',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        background: 'rgba(0, 0, 0, 0.6)',
                                        padding: '20px',
                                        borderRadius: '10px',
                                        maxWidth: '80%',
                                        overflow: 'auto',
                                        lineHeight: '1.8',
                                    }}
                                >
                                    <div>
                                        <ul style={{ paddingLeft: '20px' }}>
                                            {selectedProject.show.split(',').map((item, index) => (
                                                <li key={index} style={{ fontSize: '16px', marginBottom: '10px', listStyleType: 'decimal' }}>
                                                    {item.trim()}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Các slide tiếp theo hiển thị hình ảnh */}
                        {selectedProject.image.map((img, index) => (
                            <div key={index}>
                                <div
                                    style={{
                                        height: '800px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        background: '#364d79',
                                        color: '#fff',
                                        borderRadius: '10px',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt={`Slide ${index}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            opacity: 0.8,
                                            borderRadius: '10px',
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            color: '#fff',
                                            fontSize: '24px',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            width: '100%',
                                            bottom: '20px',
                                            left: '0',
                                            right: '0',
                                            background: 'rgba(0, 0, 0, 0.5)',
                                            padding: '10px',
                                        }}
                                    >
                                        {selectedProject.description[index]}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Hiển thị link và Figma */}

                    </Carousel>
                </div>
            )}
        </div>
    );
};

export default Slider;
