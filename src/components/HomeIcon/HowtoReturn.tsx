function HowtoReturn() {
  return (
    <div className="flex justify-center items-center bg-[#f9f9ff] px-32 py-10">
      <div className="w-full bg-white shadow-lg rounded-lg p-5">
        <div className="flex items-center justify-between mt-8 mb-10">
          <div className="flex-grow border-t-2 h-0.5 border-purple-200"></div>
          <h2 className="text-3xl font-cherry text-center mx-4">วิธีการคืนหนังสือเช่า</h2>
          <div className="flex-grow border-t-2 h-0.5 border-purple-200"></div>
        </div>
        <div className="text-gray-700 text-lg m-10">
          <p className="mb-4">เรียนลูกค้า,</p>
          <p className="mb-4">กรุณาส่งคืนหนังสือด้วยวิธีดังนี้:</p>
          <div className="ml-20">
            <h3 className="font-semibold text-xl mb-2">1. ใช้กล่องและวัสดุห่อหุ้มเดิม</h3>
            <ul className="list-disc list-inside mb-4 ml-5">
              <li>กรุณาใช้กล่องเดิมและวัสดุกันกระแทกที่ทางร้านจัดส่งให้ เช่น มุมกันกระแทก เพื่อป้องกันความเสียหายของหนังสือระหว่างขนส่ง</li>
              <li>ติดสติ๊กเกอร์ที่อยู่ร้าน (ที่ส่งไปพร้อมหนังสือ) ทับบนที่อยู่เดิมของกล่อง</li>
            </ul>

            <h3 className="font-semibold text-xl mb-2">2. การแพ็คหนังสือ</h3>
            <ul className="list-disc list-inside mb-4 ml-5">
              <li>กรุณาแพ็คหนังสือให้เรียบร้อย ระวังอย่าให้ปกหนังสือพับหรือชำรุด</li>
              <li>ห้ามติดเทปกาวลงบนปกหนังสือโดยตรง</li>
              <li>โปรดหลีกเลี่ยงการใส่หนังสือลงกล่องโดยไม่มีวัสดุห่อหุ้ม เพราะอาจเกิดความเสียหายหากหนังสือโดนน้ำ</li>
            </ul>

            <h3 className="font-semibold text-xl mb-2">3. วิธีการจัดส่ง</h3>
            <ul className="list-disc list-inside mb-4 ml-5">
              <li>ส่งคืนได้ทางไปรษณีย์แบบ “พัสดุธรรมดา” หรือผ่านขนส่งเอกชน</li>
            </ul>

            <h3 className="font-semibold text-xl mb-2">4. แจ้งเลขพัสดุ</h3>
            <p className="mb-4 ml-10">หลังจัดส่งคืนแล้ว กรุณาแจ้งเลขพัสดุให้ทางร้านทราบ เพื่อความสะดวกในการติดตาม</p>
          </div>
          <p className="mb-4">ขอความกรุณาดูแลรักษาหนังสือให้ปลอดภัย อย่าให้เปียกน้ำหรือมีรอยเปื้อน เพื่อให้อยู่ในสภาพสมบูรณ์เมื่อถึงร้าน</p>

          <p className="font-semibold">ทั้งนี้ ขอให้สมาชิกส่งหนังสือคืนตามกำหนดที่ระบุไว้ในใบ Invoice เพื่อป้องกันค่าปรับหรือความล่าช้า</p>

          <p className="mt-4">ขอบคุณที่ให้ความร่วมมือค่ะ!</p>
        </div>
      </div>
    </div>
  );
}

export default HowtoReturn;
