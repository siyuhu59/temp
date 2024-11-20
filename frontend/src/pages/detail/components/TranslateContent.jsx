import NewsContent from "./NewsContent";

export default function TranslateContent({ content }) {
  return (
    <div className="p-2 rounded-lg bg-contentGray">
      <NewsContent content={content} />
    </div>
  );
}
