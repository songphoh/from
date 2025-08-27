# ระบบบันทึกการกระทำผิดของนักเรียน

ระบบสำหรับจัดการและติดตามข้อมูลการกระทำผิดของนักเรียน พร้อมฟีเจอร์การค้นหาและรายงาน

## 🚀 ขั้นตอนการติดตั้งและใช้งาน

### 1. เตรียมไฟล์ Config

1. คัดลอก `config.example.js` เป็น `config.js`
```bash
copy config.example.js config.js
```

2. แก้ไขค่าใน `config.js` ตามข้อมูลจริงของคุณ:
```javascript
const CONFIG = {
    GOOGLE: {
        PROJECT_ID: "your-project-id",
        PRIVATE_KEY_ID: "your-private-key-id", 
        PRIVATE_KEY: "-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----",
        CLIENT_EMAIL: "your-service-account@your-project.iam.gserviceaccount.com",
        CLIENT_ID: "your-client-id",
        SHEET_ID: "your-google-sheet-id"
    }
};
```

⚠️ **สำคัญ**: ระบบจะตรวจสอบการตั้งค่าอัตโนมัติ หากไม่พบ `config.js` หรือ Environment Variables จะแสดงข้อความเตือน

### 2. สร้าง Google Service Account

1. ไปที่ [Google Cloud Console](https://console.cloud.google.com/)
2. สร้าง Project ใหม่หรือเลือก Project ที่มีอยู่
3. เปิดใช้งาน Google Sheets API
4. สร้าง Service Account:
   - ไปที่ **IAM & Admin** > **Service Accounts**
   - คลิก **Create Service Account**
   - ใส่ชื่อและคำอธิบาย
   - สร้าง Key ประเภท JSON
   - ดาวน์โหลดไฟล์ JSON

### 3. ตั้งค่า Google Sheets

1. สร้าง Google Sheets ใหม่
2. แชร์ Sheet ให้กับ Service Account Email (ที่ได้จากข้อที่ 2)
3. สร้าง 2 Sheets:

#### Sheet "Login" (สำหรับข้อมูลผู้ใช้)
```
| username | password | role         | full_name      | status |
|----------|----------|--------------|----------------|--------|
| admin    | admin123 | ผู้ดูแลระบบ   | ผู้ดูแลระบบ     | active |
| teacher  | teacher123| ครู          | ครูผู้สอน      | active |
```

#### Sheet "data" (สำหรับข้อมูลการกระทำผิด)
Sheet นี้จะถูกสร้าง header อัตโนมัติเมื่อบันทึกข้อมูลครั้งแรก

### 4. Deploy บน Render

1. Push โค้ดขึ้น GitHub (ไม่รวม `config.js`)
2. สร้าง Static Site ใหม่บน [Render](https://render.com)
3. เชื่อมต่อกับ GitHub Repository
4. ตั้งค่า Environment Variables:
   - `PROJECT_ID`: Google Project ID
   - `PRIVATE_KEY_ID`: Private Key ID
   - `PRIVATE_KEY`: Private Key (รวม newline)
   - `CLIENT_EMAIL`: Service Account Email
   - `CLIENT_ID`: Client ID
   - `SHEET_ID`: Google Sheet ID

5. ใน Render Dashboard, ไปที่ **Environment** และเพิ่ม variables:
```
PROJECT_ID=your-project-id
PRIVATE_KEY_ID=your-private-key-id
PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----
CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
CLIENT_ID=your-client-id
SHEET_ID=your-google-sheet-id
```

### 5. การใช้งาน Environment Variables

ระบบจะอ่านค่าตามลำดับ:
1. ไฟล์ `config.js` (สำหรับ local development)
2. Environment Variables (สำหรับ production บน Render)
3. URL Parameters (สำหรับการทดสอบ)
4. Meta Tags (สำหรับ server-side rendering)

## 📁 โครงสร้างไฟล์

```
form/
├── index.html          # ไฟล์หลักของระบบ
├── config.js           # ไฟล์ config จริง (ไม่ push ขึ้น Git)
├── config.example.js   # ไฟล์ตัวอย่าง config
├── .gitignore         # ไฟล์ที่ไม่ต้อง push ขึ้น Git
└── README.md          # ไฟล์คู่มือนี้
```

## 🔒 ความปลอดภัย

- ไฟล์ `config.js` ถูกเพิ่มใน `.gitignore` เพื่อไม่ให้ถูก push ขึ้น GitHub
- API Keys ถูกเก็บใน Environment Variables บน Render
- ใช้ Service Account แทน OAuth2 เพื่อความปลอดภัย

## 🛠️ การพัฒนาในเครื่อง (Local Development)

1. คัดลอกและแก้ไข `config.js`
2. เปิดไฟล์ `index.html` ใน Browser
3. ระบบจะอ่านค่าจาก `config.js` อัตโนมัติ

## 🚀 การ Deploy บน Render

1. ตรวจสอบว่าไฟล์ `config.js` ถูกเพิ่มใน `.gitignore` แล้ว
2. Push โค้ดขึ้น GitHub
3. สร้าง Static Site บน Render
4. ตั้งค่า Environment Variables ทั้งหมด
5. Deploy จะเสร็จอัตโนมัติ

## 📞 การแก้ไขปัญหา

### ไม่สามารถเชื่อมต่อ Google Sheets
- ตรวจสอบ Service Account มีสิทธิ์เข้าถึง Sheet หรือไม่
- ตรวจสอบ SHEET_ID ถูกต้องหรือไม่
- ตรวจสอบ Private Key format ถูกต้องหรือไม่

### Environment Variables ไม่ทำงาน
- ตรวจสอบชื่อ Variables ใน Render ตรงกับที่กำหนดหรือไม่
- ใช้ `console.log()` ตรวจสอบค่าที่อ่านได้
- ลอง Deploy ใหม่หลังจากเปลี่ยน Environment Variables

## 📱 ข้อมูลติดต่อ

หากมีปัญหาการใช้งาน สามารถติดต่อผู้พัฒนาได้
