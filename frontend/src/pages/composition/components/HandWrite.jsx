import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import ReactSignatureCanvas from "react-signature-canvas";

export default function HandWrite() {
  const [isSigned, setIsSigned] = useState(false);
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);
  const signatureRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClear = () => {
    signatureRef.current.clear();
    setIsSigned(false);
  };

  const handleSave = () => {
    if (signatureRef.current.isEmpty()) {
      alert("작문을 완료해주세요.");
      return;
    }

    // 서명을 PNG 형식의 데이터 URL로 변환
    const signatureImage = signatureRef.current
      .getTrimmedCanvas()
      .toDataURL("image/png");

    // 이미지 다운로드
    const link = document.createElement("a");
    link.download = `signature-${new Date().toISOString()}.png`;
    link.href = signatureImage;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div ref={containerRef} className="relative w-full">
        {!isSigned && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            펜/손으로 작성해주세요
          </div>
        )}
        <ReactSignatureCanvas
          ref={signatureRef}
          canvasProps={{
            className:
              "signature-canvas border border-gray-200 bg-gray-50 rounded-lg",
            width: width,
            height: 450,
          }}
          clearOnResize={false}
          onBegin={() => setIsSigned(true)}
        />
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <Button
          onClick={handleClear}
          className="px-4 py-2 text-14 md:text-16 text-customGray bg-gray-100 rounded-lg hover:bg-gray-100 hover:opacity-50 shadow"
        >
          다시 작성
        </Button>
        <Button
          onClick={handleSave}
          className="px-4 py-2 text-14 md:text-16 text-white bg-mainBlue shadow hover:bg-main hover:opacity-50"
        >
          제출하기
        </Button>
      </div>
    </div>
  );
}
