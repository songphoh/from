// config.js - ไฟล์เก็บ API Keys และการตั้งค่า
// ⚠️ ไฟล์นี้ไม่ควร push ขึ้น GitHub
// กรุณาเพิ่ม config.js ในไฟล์ .gitignore

// ฟังก์ชันอ่าน Environment Variables (สำหรับ Render)
function getEnvFromMeta(key) {
    const metaTag = document.querySelector(`meta[name="env-${key.toLowerCase()}"]`);
    return metaTag ? metaTag.getAttribute('content') : null;
}

function getEnvFromWindow(key) {
    return window.ENV ? window.ENV[key] : null;
}

function getEnvFromUrl(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}

// อ่านค่าจาก Environment Variables หรือใช้ค่าที่กำหนดไว้
function getConfigValue(key, localValue) {
    // ลำดับการอ่านค่า: URL > Window.ENV > Meta Tags > Local Value
    return getEnvFromUrl(key) || 
           getEnvFromWindow(key) || 
           getEnvFromMeta(key) || 
           localValue;
}

const CONFIG = {
    GOOGLE: {
        // แก้ไขค่าเหล่านี้ให้ตรงกับข้อมูลจริงของคุณ
        PROJECT_ID: getConfigValue('PROJECT_ID', "webapp-from"),
        PRIVATE_KEY_ID: getConfigValue('PRIVATE_KEY_ID', "7196ac9c6bc72f4e3f6126b7c09706479fd2e036"),
        PRIVATE_KEY: getConfigValue('PRIVATE_KEY', `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDAX+ITCFREIZB9
Jn6eIyiiZfcFcdPMvYM244zrieP5HUR7xAJjJ5wg3fjlELUWQosXFkqgJIcGlft+
gGueN1+Larb3uiiithMn2NVx0Vm5mjWSnqB2qbVOrsZVWO6LJKS0MkBxR+34iYA+
sCVat5oI+i4zN/ln1SiDZWf2Map53nUDtZMXxNoGPt2wRPyJKE+4jJ9pJcH5hbAG
GoDWJ8CRpZG3AIhkv5kLmibydEwUltNT7kVG2ip4dMwvSm3rq64vUvASoiD065Xn
TH1e5Lh4ua2POl+eb6QLwCr/hMCz6tHh6UX7mlulgqQaYqTG9Jqdg0Mw8xSs5g+g
1X/6Lp7hAgMBAAECggEAFdFKCdqMpAV30O8dYRX1CntXSU4gNTzbtXftMtwP94rI
NOParsrT5tkF3K9zujM7JG0qHYDHB4ovBv54NhjARJw1EAy+2w/x8Dej+CVEGyFQ
KMbGGsR4hD9HeG/TmK2ZOGPn8cZfSNa0rWdmH88UMHx0jOkw51kXdSolC5jqZVO7
x3q5pAryk1bmLyweLSlP9ps5ccFcDz5s4F4c7ZAajOb1oqdkFWOMED5rlg9lPram
ukDh2JAaeYQC7JaLBIaQd1kkm32FLClNqZNrebEo/yVW5lGnFcGQVJahSCgp+I6L
DK/uGHpeT2tUDyqQoYEBuId4R0ZNZLifz3VVVGU2WQKBgQDiW8rUSrOvsiUExpSa
s32SP5rJH1k2x2MzeGts1x5h29Aup4DkckCgBqJRrkt9oJj9NHxecQ5zva8T0EBJ
KGXwLVochhkejW5f1fy7Zre1iobgPIgltXZHePal1VK8v4GLQKSMYqqwMkm/RUU/
s65BuFfglFAxPCOpypvX5tzOSwKBgQDZkNiXByPP2XsJopbTRG3ItBlaNyY9DzF5
9FWkwgmqILbUUiq/opob/02IMLMyldc2DHIyYBKnFTOlStoHiqnMUNvfiT9Nblx5
UKvpp6Z0gu7JtPQIMgQPDKhkEqffmsBEtGhhaRFrU0uCxNwBw3jvhFhLHo55tmbO
6B5xWBgcAwKBgDSFI8yaAJMVfG1dPgGe/9W9GEbuFR8WqDe7CwHX7964x9brWoam
08PNhj/5dt6RMq4dTXYEOVw1eLfaK/BNhUly3GOd4ZorKp7l4ZwBu0JN//lrUhOd
xPHUaTYVBvtwW7hZqVRBWGVFZcMRaX3cTORGx2z+PJUP5R5yOjKgCD99AoGAJ++8
skxvOHIVcblUskc3V8YneTXyYPbvABHnvqyXlZEXvnWuvyqb21PL6Zn26uwyawtx
0ulrwxvTNR4+U3ASpxyYn7nT0uTVOLekNum9VlnKd2AuA2sa76BFMMlz40nGzVXI
a0kcF3VcwQ5dzD0Tb/P9ORzMzm67BHP7Upb3Jf0CgYEApWRkjN3QEbUegOnAjn15
nW4vyYFJGUDenMnFt5PqUEMqJubJW4vK7OkQ80EtZ+WtNO70+S8ScFdMSkY/bIMd
PcCG5KpE9usXph92wp7ei8sAzf5HbtEeJejjM06j54uTf1dPRP1Iqn6USZlpCpJR
F6IWtbaIOp+ZQSurj4cyZho=
-----END PRIVATE KEY-----`),
        CLIENT_EMAIL: getConfigValue('CLIENT_EMAIL', "webapp-from@webapp-from.iam.gserviceaccount.com"),
        CLIENT_ID: getConfigValue('CLIENT_ID', "115728987233093296718"),
        SHEET_ID: getConfigValue('SHEET_ID', "1ONKBgNBfxGFhfiG9l8JSUjNfxiprjNA5PCTYkdy3DWM")
    },
    
    // ตั้งค่าการแสดงผล
    APP: {
        TITLE: "ระบบบันทึกการกระทำผิดของนักเรียน",
        VERSION: "1.0.0",
        ENVIRONMENT: getConfigValue('NODE_ENV', "development") // development, production
    },
    
    // ข้อมูลผู้ใช้ Demo (สำหรับการทดสอบ)
    DEMO_USERS: {
        'admin': { 
            password: getConfigValue('DEMO_ADMIN_PASSWORD', 'admin123'), 
            role: 'ผู้ดูแลระบบ', 
            username: 'admin', 
            fullName: 'ผู้ดูแลระบบ' 
        },
        'teacher': { 
            password: getConfigValue('DEMO_TEACHER_PASSWORD', 'teacher123'), 
            role: 'ครู', 
            username: 'teacher', 
            fullName: 'ครูผู้สอน' 
        }
    }
};

// ส่งออกค่าตั้งค่า
window.APP_CONFIG = CONFIG;

// Debug: แสดงสถานะการโหลด config (เฉพาะ development)
if (CONFIG.APP.ENVIRONMENT === 'development') {
    console.log('🔧 Config loaded:', {
        hasGoogleConfig: !!CONFIG.GOOGLE.PROJECT_ID,
        environment: CONFIG.APP.ENVIRONMENT,
        version: CONFIG.APP.VERSION
    });
}
