import React, { useState } from "react";

const AboutMe: React.FC = () => {
  // Nội dung mô tả cho từng ô
  const contents = {
    introduction: `
      Chào Anh/Chị! Tôi là một Fullstack Developer đam mê giải quyết vấn đề và xây dựng các ứng dụng web có tác động tích cực. 
      Chặng đường lập trình của Tôi đã giúp Tôi chuyên sâu vào nhiều công nghệ khác nhau, và Tôi luôn sẵn sàng học hỏi và xây dựng các sản phẩm sáng tạo. 🌟

      Tôi thành thạo các ngôn ngữ lập trình và framework như C#, .Net, Angular, ReactJs, NodeJS.
      Tôi có kinh nghiệm làm việc với các cơ sở dữ liệu như SQL, MySQL, MongoDB.
      Chuyên môn của Tôi cũng bao gồm việc triển khai và quản lý các container với Docker và Tôi rất thích phát triển các ứng dụng web hiện đại với công nghệ như HTML, CSS, JavaScript, NextJS.
 
      Tôi đam mê xây dựng các ứng dụng có thể mở rộng và dễ sử dụng, dù là cho frontend hay backend. Hãy kết nối và cùng nhau tạo ra những điều tuyệt vời! 🚀
      Tôi đã tham gia xây dựng nhiều dự án website bán hàng từ nhỏ đến lớn, bao gồm cả các hệ thống quản lý đơn hàng, giỏ hàng, và thanh toán trực tuyến. 
      Một trong những thành công lớn của Tôi là tối ưu hóa hiệu suất tải trang và cải thiện trải nghiệm người dùng bằng cách sử dụng các công nghệ như ReactJS, NextJS, và NodeJS.

      Ngoài ra, Tôi cũng đã tích hợp các phương thức thanh toán như VNPay, Momo, và GHN vào các hệ thống để đảm bảo tính linh hoạt trong giao dịch. 
      Tất cả những dự án này đều tập trung vào việc cung cấp một giao diện trực quan và dễ sử dụng cho người dùng cuối, đồng thời đảm bảo bảo mật dữ liệu khách hàng.

      Tôi có kinh nghiệm giải quyết các bài toán về phần mềm quản lý, đặc biệt là trong việc trực quan hóa dữ liệu và tối ưu hóa các hệ thống. 
      Trước đây, Tôi đã làm việc trong một môi trường chuyên về phát triển phần mềm quản lý, nơi mà việc tối ưu hóa và quản lý dữ liệu là vô cùng quan trọng.

      Tôi hiểu rõ những thách thức trong việc xử lý dữ liệu khối lượng lớn, đặc biệt là khi cần phải hiển thị trực quan và cung cấp các phân tích cho người dùng cuối. 
      Công việc của Tôi bao gồm việc xây dựng các giải pháp để trực quan hóa dữ liệu một cách hiệu quả, đồng thời tối ưu hóa hiệu suất của các hệ thống phần mềm quản lý, 
      giúp cải thiện trải nghiệm người dùng và nâng cao hiệu quả công việc.
    `,
  };

  // Trạng thái hiển thị nội dung
  const selectedContent = contents.introduction;
  const [isExpanded, setIsExpanded] = useState<boolean>(true); // Trạng thái để theo dõi việc thu gọn và xem thêm

  // Hàm xử lý chuyển đổi giữa thu gọn và xem thêm
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // Cắt ngắn nội dung nếu không được mở rộng
  const truncatedContent = selectedContent.substring(0, 300); // Giới hạn nội dung là 300 ký tự
  const contentToDisplay = isExpanded ? selectedContent : truncatedContent + '...';

  return (
    <div>
      

      {/* Nội dung hiển thị */}
      <div style={contentStyle}>
        {/* Hiển thị nội dung đã cắt ngắn hoặc đầy đủ tùy thuộc vào trạng thái */}
        <div
          style={{ whiteSpace: "pre-wrap", lineHeight: "1.8" }}
          dangerouslySetInnerHTML={{ __html: contentToDisplay }}
        />
        
        {/* Nút Thu gọn/Xem thêm */}
        <button onClick={toggleExpand} style={toggleButtonStyle}>
          {isExpanded ? "Thu gọn" : "Xem thêm"}
        </button>
      </div>
    </div>
  );
};



// CSS cho khung nội dung
const contentStyle: React.CSSProperties = {
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9",
  fontSize: "16px",
  color: "#333",
};

// CSS cho nút "Thu gọn" và "Xem thêm"
const toggleButtonStyle: React.CSSProperties = {
  marginTop: "10px",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  color: "black",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  transition: "background-color 0.3s",
};

export default AboutMe;
