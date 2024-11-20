export default function NewsContent({ content }) {
  const formattedContent = content
    .split(/(?<=[.。])\s*/)
    .filter((sentence) => sentence.trim())
    .map((sentence, index) => (
      <p key={index} className="mb-2 hover:text-mainBlue cursor-pointer">
        {sentence.trim()}
      </p>
    ));

  return (
    <div className="py-4 leading-relaxed space-y-2">{formattedContent}</div>
  );
}
