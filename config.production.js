// config.production.js - ไฟล์ตัวอย่างสำหรับ Production 
// สำหรับ Static Sites (HTML/JS) ให้ใช้ Environment Variables ผ่าน build process หรือ meta tags

// วิธีการใช้งาน:
// 1. สำหรับ Static Sites: ใช้ meta tags หรือ injected variables
// 2. สำหรับ Node.js/Server: ใช้ process.env (ต้องมี build process)

// ตัวอย่างการใช้ Meta Tags:
// <meta name="env-project_id" content="your-project-id">
// <meta name="env-private_key_id" content="your-private-key-id">
// <meta name="env-private_key" content="your-private-key">
// <meta name="env-client_email" content="your-client-email">
// <meta name="env-client_id" content="your-client-id">
// <meta name="env-sheet_id" content="your-sheet-id">

// หรือใช้ Server-side injection:
// window.ENV = {
//     PROJECT_ID: "{{ PROJECT_ID }}",
//     PRIVATE_KEY_ID: "{{ PRIVATE_KEY_ID }}",
//     PRIVATE_KEY: "{{ PRIVATE_KEY }}",
//     CLIENT_EMAIL: "{{ CLIENT_EMAIL }}",
//     CLIENT_ID: "{{ CLIENT_ID }}",
//     SHEET_ID: "{{ SHEET_ID }}"
// };

// สำหรับ Static Sites บน Render, Netlify, Vercel:
// ใช้ Build-time Environment Variables injection
// หรือ Dynamic configuration loading

const CONFIG = {
    GOOGLE: {
        // ค่าเหล่านี้จะถูกอ่านจาก getEnvVar() ใน index.html
        // ซึ่งจะหาจาก: config.js > URL params > window.ENV > meta tags
        PROJECT_ID: null, // จะถูกโหลดจาก Environment Variables
        PRIVATE_KEY_ID: null,
        PRIVATE_KEY: null,
        CLIENT_EMAIL: null,
        CLIENT_ID: null,
        SHEET_ID: null
    },
    
    // ตั้งค่าการแสดงผล
    APP: {
        TITLE: "ระบบบันทึกการกระทำผิดของนักเรียน",
        VERSION: "1.0.0",
        ENVIRONMENT: "production"
    },
    
    // ข้อมูลผู้ใช้ Demo (ปลอดภัย - ไม่มี sensitive data)
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

// หมายเหตุ: สำหรับ Production บน Static Hosting
// ให้ตั้งค่า Environment Variables ใน Hosting Platform:
// - Render: Dashboard > Environment
// - Netlify: Site Settings > Environment Variables  
// - Vercel: Project Settings > Environment Variables

// ส่งออกค่าตั้งค่า
window.APP_CONFIG = CONFIG;
