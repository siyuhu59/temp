import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OriginContent from "./OriginContent";
import TranslateContent from "./TranslateContent";
import KanjiContent from "./KanjiContent";

export default function PostBody({ news, kanjis }) {
  return (
    <Tabs defaultValue="origin" className="mt-10">
      <TabsList>
        <TabsTrigger value="origin">원본</TabsTrigger>
        <TabsTrigger value="translate">번역본</TabsTrigger>
        <TabsTrigger value="kanji" className="!text-16">
          단어공부
        </TabsTrigger>
      </TabsList>
      <TabsContent value="origin">
        <OriginContent content={news.content} />
      </TabsContent>
      <TabsContent value="translate">
        <TranslateContent content={news.translated_content} />
      </TabsContent>
      <TabsContent value="kanji">
        <KanjiContent content={kanjis} />
      </TabsContent>
    </Tabs>
  );
}
