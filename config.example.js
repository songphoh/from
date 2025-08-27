// config.example.js - ไฟล์ตัวอย่างสำหรับการตั้งค่า
// คัดลอกไฟล์นี้เป็น config.js และใส่ค่าจริง

const CONFIG = {
    GOOGLE: {
        PROJECT_ID: "your-project-id",
        PRIVATE_KEY_ID: "your-private-key-id",
        PRIVATE_KEY: `-----BEGIN PRIVATE KEY-----
YOUR_PRIVATE_KEY_HERE
-----END PRIVATE KEY-----`,
        CLIENT_EMAIL: "your-service-account@your-project.iam.gserviceaccount.com",
        CLIENT_ID: "your-client-id",
        SHEET_ID: "your-google-sheet-id"
    },
    
    // ตั้งค่าการแสดงผล
    APP: {
        TITLE: "ระบบบันทึกการกระทำผิดของนักเรียน",
        VERSION: "1.0.0",
        ENVIRONMENT: "production" // development, production
    },
    
    // ข้อมูลผู้ใช้ Demo (สำหรับการทดสอบ)
    DEMO_USERS: {
        'admin': { 
            password: 'admin123', 
            role: 'ผู้ดูแลระบบ', 
            username: 'admin', 
            fullName: 'ผู้ดูแลระบบ' 
        },
        'teacher': { 
            password: 'teacher123', 
            role: 'ครู', 
            username: 'teacher', 
            fullName: 'ครูผู้สอน' 
        }
    }
};

// ส่งออกค่าตั้งค่า
window.APP_CONFIG = CONFIG;
