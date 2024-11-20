import HandWrite from "./HandWrite";
import ButtonWrite from "./ButtonWrite";

export default function CompositionCard({ type, ...props }) {
  const renderCard = () => {
    const cardProps = { ...props };
    switch (type) {
      case "type1":
        return <Type1Card {...cardProps} />;
      case "type2":
        return <Type2Card {...cardProps} />;
      default:
        return null;
    }
  };
  return <div className="post-card cursor-pointer">{renderCard()}</div>;
}

// 버튼식
function Type1Card({
  korean,
  japanese_kana,
  user_input,
  words_kana,
  setIsModalOpen,
  setFeedback,
}) {
  return (
    <ButtonWrite
      korean={korean}
      japanese={japanese_kana}
      user_input={user_input}
      words_kana={words_kana}
      setIsModalOpen={setIsModalOpen}
      setFeedback={setFeedback}
    />
  );
}

// 손글씨
function Type2Card({ korean, japanese, user_input }) {
  return (
    <div className="bg-contentGray p-4 rounded-lg flex flex-col gap-4">
      <p className="text-14 md:text-16">{korean}</p>
      <HandWrite />
    </div>
  );
}
