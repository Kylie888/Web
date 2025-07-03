import { useRef, useState } from "react";
import html2canvas from "html2canvas";

export default function Home() {
  const [text, setText] = useState("Gửi anh yêu nè 💖");
  const [image, setImage] = useState("/meme1.jpg"); // Thay meme1.jpg bằng ảnh meme có sẵn
  const memeRef = useRef(null);

  const handleDownload = async () => {
    const canvas = await html2canvas(memeRef.current);
    const link = document.createElement("a");
    link.download = "zayme-meme.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>ZayMe - Tạo meme vui tặng người yêu</h1>
      <div style={{ margin: 20 }}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Nhập lời nhắn yêu thương"
          style={{ width: 300, fontSize: 18 }}
        />
      </div>
      <div
        ref={memeRef}
        style={{
          position: "relative",
          display: "inline-block",
          marginBottom: 20,
        }}
      >
        <img src={image} width={400} alt="meme" />
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            fontSize: 32,
            fontWeight: "bold",
            textShadow: "2px 2px 4px #000",
          }}
        >
          {text}
        </div>
      </div>
      <div>
        <button onClick={handleDownload} style={{ fontSize: 18 }}>
          Tải về & gửi tặng 💌
        </button>
      </div>
      <p style={{ marginTop: 20, color: "#888" }}>
        ZayMe.net • Yêu là phải vui!
      </p>
    </div>
  );
}
