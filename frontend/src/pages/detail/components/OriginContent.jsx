import NewsContent from "./NewsContent";

export default function OriginContent({ content }) {
  return (
    <div className="p-2 rounded-lg bg-contentGray">
      <NewsContent content={content} />
    </div>
  );
}
