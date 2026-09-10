let trainInterval = null;

const competitionData = {
    comp1: {
        badge: "AWARD #1",
        title: "Thailand open Ros and smart robot competition 2025",
        award: "รางวัล: รองชนะเลิศอันดับ 1 (การแข่งขันหุ่นยนต์ใช้ภายในบ้าน)",
        detail: "หน้าที่ที่ได้รับ: การเทรน AI ให้หุ่นตรวจจับถุงจากผู้ใช้งาน และการสั่งการของแขนหุ่นเพื่อยื่นรับสิ่งของจากผู้ใช้งานผ่านบอร์ด Arduino",
        images: ["Rosopen.png", "rosaw.jpg", "LINE_ALBUM_@Home Education 3-7.jpg"]
    },
    comp2: {
        badge: "AWARD #2",
        title: "การประกวดนวัตกรรมและเทคโนโลยี Smart School",
        award: "รางวัล: รองชนะเลิศอันดับ 2",
        detail: "โครงงาน: เซนเซอร์ตรวจวัดอุณหภูมิเพื่อเปิดปิดเครื่องใช้ไฟฟ้าภายในห้องเรียน ช่วยประหยัดพลังงานและเพิ่มประสิทธิภาพภายในโรงเรียน",
        images: ["การประกวดนวัตกรรมและเทคโนโลยี smart school_page.jpg"]
    },
    comp3: {
        badge: "PARTICIPATION",
        title: "Student Techpreneur Competition 2026",
        award: "การแข่งขันนวัตกรรมเพื่อพัฒนาไอเดีย สู่การเป็น Techpreneur",
        detail: "โครงงาน: แชทบอท AI ช่วยจัดการเงินของผู้ใช้งานผ่านทางไลน์ และตอบปัญหาเกี่ยวกับเงินให้ผู้ใช้งาน",
        isTechpreneur: true,
        allImages: [
            "S__2596868_0.jpg", "S__2596875_0.jpg", "S__24354851_0.jpg", 
            "S__24354853_0.jpg", "S__24354856_0.jpg", "S__2596874.jpg", 
            "S__12132357.jpg", "S__43270147.jpg", "S__11943954_0.jpg"
        ]
    },
    comp4: {
        badge: "PARTICIPATION",
        title: "Coding for better life 2024",
        award: "การแข่งขันสร้างเทคโนโลยีเพื่อธุรกิจ",
        detail: "หน้าที่ที่ได้รับ: การเทรน AI ให้ตรวจจับโรคทางดวงตา และการเชื่อมข้อมูลจากผู้ใช้งานส่งไปยังไลน์แชทบอทส่วนตัวผ่านโปรแกรม Cira Core",
        images: ["142349.jpg", "142507.jpg"]
    },
    comp5: {
        badge: "PARTICIPATION",
        title: "Robot Programming Challenge 2026",
        award: "การแข่งขันควบคุมแขนหุ่นยนต์",
        detail: "พัฒนาทักษะการเขียนโปรแกรมควบคุมระบบกลไกและการเคลื่อนไหวของแขนหุ่นยนต์เพื่อทำภารกิจ",
        images: ["Robot Programming chelleng2026.jpg", "142509.jpg"]
    },
    comp6: {
        badge: "PARTICIPATION",
        title: "Thailand Cyber Top Talent 2026",
        award: "การแข่งขันทักษะทางด้านความมั่นคงปลอดภัยไซเบอร์ (Cybersecurity)",
        detail: "รูปแบบการแข่งขัน Capture The Flag (CTF) ทดสอบทักษะการเจาะระบบและป้องกันความปลอดภัยทางไซเบอร์",
        images: ["Certificate_CERT-2026-JB2L82.png"]
    },
    comp7: {
        badge: "PARTICIPATION",
        title: "IT Day 2026 Computer Graphic and Homepage",
        award: "การแข่งขันคอมพิวเตอร์กราฟิกและโฮมเพจ",
        detail: "ผลงานการออกแบบและพัฒนาเว็บไซต์นำเสนอโครงงานเทคโนโลยี",
        images: ["142510.jpg"]
    },
    comp8: {
        badge: "AWARD #3",
        title: "การแข่งศิลปหัตถกรรม การเขียนโปรแกรมด้วยภาษาคอมพิวเตอร์ 2568",
        award: "ได้รับรางวัลเหรียญเงิน",
        detail: "การแข่งขันเขียนโปรแกรมคอมพิวเตอร์แก้โจทย์ปัญหาอัลกอริทึม",
        images: ["ศิลปหัตถกรรม การเขียนโปรแกรมด้วยภาษาคอมพืวเตอร์1.jpg"]
    },
    train1: {
        badge: "WORKSHOP",
        title: "Workshop ความปลอดภัยทางไซเบอร์",
        award: "ผ่านการอบรมเชิงปฏิบัติการ",
        detail: "เรียนรู้หลักการป้องกันภัยคุกคามทางไซเบอร์และการรักษาความปลอดภัยของข้อมูลเบื้องต้น",
        images: ["Certificate.png"]
    },
    train2: {
        badge: "WORKSHOP",
        title: "Workshop วิศวกรรมอวกาศใกล้ตัว",
        award: "ผ่านการอบรมเชิงปฏิบัติการ",
        detail: "ศึกษาเทคโนโลยีอวกาศและการประยุกต์ใช้งานดาวเทียมหรือเซนเซอร์สู่งานวิศวกรรมภาคพื้นดิน",
        images: ["Certificate (2).png"]
    },
    train3: {
        badge: "TRAINING",
        title: "Programmable Logic Controller (PLC)",
        award: "ผ่านการอบรมระบบควบคุมอัตโนมัติ",
        detail: "การเขียนโปรแกรมควบคุมระบบควบคุมตรรกะเชิงพรูแกรมมัล (PLC) เพื่อใช้ในกระบวนการอุตสาหกรรม",
        images: ["อบรม Programmable Logic Controller_page.jpg"]
    },
    train4: {
        badge: "TRAINING",
        title: "Internet Mikrotik 2025",
        award: "ผ่านการอบรมระบบเครือข่าย",
        detail: "การตั้งค่าและการจัดการอุปกรณ์เครือข่าย Mikrotik เพื่อบริหารจัดการระบบอินเทอร์เน็ต",
        images: ["internet.jpg", "142511.jpg"]
    }
};

function openModal(id) {
    const data = competitionData[id];
    if (!data) return;

    const modalBody = document.getElementById('modalBody');

    if (data.isTechpreneur) {
        let imagesHtml = '';
        const loopImages = data.allImages.concat(data.allImages);
        loopImages.forEach(img => {
            imagesHtml += `<div class="techpreneur-img-item"><img src="${img}" alt="${data.title}" onerror="this.src='https://via.placeholder.com/600x400?text=Image+Not+Found'"></div>`;
        });

        modalBody.innerHTML = `
            <div class="techpreneur-container" id="trainContainer">
                ${imagesHtml}
            </div>
            <div class="modal-info-box">
                <span class="badge" style="margin-bottom: 10px;">${data.badge}</span>
                <h2 style="font-size: 1.5rem; border: none; padding: 0; margin-bottom: 10px; color: var(--text-color);">${data.title}</h2>
                <p style="color: var(--primary-color); font-weight: 500; font-size: 1.1rem; margin-bottom: 15px;">${data.award}</p>
                <p style="color: var(--text-dim); line-height: 1.7; font-size: 1.05rem;">${data.detail}</p>
            </div>
        `;

        const container = document.getElementById('trainContainer');
        if (container) {
            if (trainInterval) clearInterval(trainInterval);
            
            trainInterval = setInterval(() => {
                if (!container) return;
                container.scrollLeft += 2; 
                if (container.scrollLeft >= (container.scrollWidth / 2)) {
                    container.scrollLeft = 0;
                }
            }, 15);

            container.addEventListener('mouseenter', () => clearInterval(trainInterval));
            container.addEventListener('mouseleave', () => {
                if (trainInterval) clearInterval(trainInterval);
                trainInterval = setInterval(() => {
                    if (!container) return;
                    container.scrollLeft += 2;
                    if (container.scrollLeft >= (container.scrollWidth / 2)) {
                        container.scrollLeft = 0;
                    }
                }, 15);
            });
        }

    } else {
        let imagesHtml = '';
        data.images.forEach(img => {
            imagesHtml += `<img src="${img}" alt="${data.title}" onerror="this.src='https://via.placeholder.com/600x400?text=Image+Not+Found'">`;
        });

        modalBody.innerHTML = `
            <div class="modal-gallery">
                ${imagesHtml}
            </div>
            <div class="modal-info-box">
                <span class="badge" style="margin-bottom: 10px;">${data.badge}</span>
                <h2 style="font-size: 1.5rem; border: none; padding: 0; margin-bottom: 10px; color: var(--text-color);">${data.title}</h2>
                <p style="color: var(--primary-color); font-weight: 500; font-size: 1.1rem; margin-bottom: 15px;">${data.award}</p>
                <p style="color: var(--text-dim); line-height: 1.7; font-size: 1.05rem;">${data.detail}</p>
            </div>
        `;
    }

    const modal = document.getElementById('compModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (trainInterval) {
        clearInterval(trainInterval);
        trainInterval = null;
    }
    const modal = document.getElementById('compModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function closeModalOnOutside(event) {
    const modal = document.getElementById('compModal');
    if (event.target === modal) {
        closeModal();
    }
}