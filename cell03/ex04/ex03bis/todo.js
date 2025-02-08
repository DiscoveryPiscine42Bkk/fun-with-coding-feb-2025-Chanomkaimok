$(document).ready(loadTodos); // รอให้ DOM โหลดเสร็จแล้วค่อยเรียกฟังก์ชัน loadTodos

function newTodo() {
    let task = prompt("Enter a new TO DO:"); // เปิดกล่อง prompt ให้ผู้ใช้ป้อนข้อความ
    if (task && task.trim() !== "") { // ตรวจสอบว่าผู้ใช้ป้อนค่าหรือไม่
        addTodo(task.trim()); // เพิ่ม TO DO ลงในรายการ
        saveTodos(); // บันทึก TO DO ลงคุกกี้
    }
}

function addTodo(text) {
    let ftList = $("#ft_list"); // เลือก element ที่มี id เป็น ft_list

    let todoDiv = $("<div></div>").addClass("todo").text(text); // สร้าง div ใหม่ ใส่คลาส "todo" และกำหนดข้อความ
    todoDiv.click(function () { // เพิ่ม event คลิกให้กับ div
        removeTodo($(this)); // เรียกฟังก์ชัน removeTodo เมื่อคลิก
    });

    ftList.prepend(todoDiv); // แทรก div ที่สร้างไว้ที่จุดเริ่มต้นของ #ft_list
}

function removeTodo(todo) {
    if (confirm("Do you really want to delete this TO DO?")) { // ยืนยันก่อนลบ
        todo.remove(); // ลบ element ออกจาก DOM
        saveTodos(); // บันทึก TO DO ที่เหลือใหม่
    }
}

function saveTodos() {
    let todos = [];
    $(".todo").each(function () { // วนลูปผ่านทุก element ที่มีคลาส .todo
        todos.push($(this).text()); // ดึงข้อความจาก element แล้วเก็บไว้ใน array
    });

    document.cookie = "todos=" + JSON.stringify(todos) + "; path=/"; // บันทึก array เป็น JSON string ลงคุกกี้
}

function loadTodos() {
    let cookies = document.cookie.split("; "); // แยกคุกกี้แต่ละตัวออกจากกัน
    let todoCookie = cookies.find(row => row.startsWith("todos=")); // ค้นหาคุกกี้ที่ชื่อ todos
    
    if (todoCookie) { // ถ้าพบคุกกี้
        let todoList = JSON.parse(todoCookie.split("=")[1]); // แปลงค่าจาก JSON string กลับเป็น array
        todoList.forEach(todo => addTodo(todo)); // เพิ่ม TO DO ที่โหลดมาเข้าไปในรายการ
    }
}