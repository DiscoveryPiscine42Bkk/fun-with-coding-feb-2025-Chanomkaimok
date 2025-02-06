# #จำนวนอาร์กิวเมนต์ที่ถูกส่งเข้ามาในสคริปต์
#-eq 0 ตรวจสอบว่ามีอาร์กิวเมนต์มั้ย ถ้าไม่มีจะเข้าสู่คำสั่ง if
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# $@ แทนค่าของอาร์กิวเมนต์ทั้งหมดที่ส่งเข้ามาเก็บในตัวแปร folder

for folder in "$@"; do
    new_folder="ex$folder"       #สร้างnew_folder โดยใช้ค่า"ex"หน้าชื่อแต่ละอาร์กิวเมนต์
    mkdir -p "$new_folder"       #-p ทำให้ mkdir ไม่แสดงerrหากโฟลเดอร์มีอยู่แล้ว
done
