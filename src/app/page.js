import LinkSet from "./component/LinkSet";
import LinkTitle from "./component/LinkTitle";
// Linkのインポート
import Link from "next/link";

const linkList = ["ページ1", "ページ2", "ページ4"]

export default function Home() {
  return (
    <>
      <LinkTitle>
        ページリスト
      </LinkTitle>
      <LinkSet linkList={linkList}></LinkSet>
      {/* リンクの実装 */}
      <Link href="Introduction">ページ遷移</Link>
    </>
  );
}
