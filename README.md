# Hair Stylist Salon Yuji Kajiwara ホームページ（GitHub掲載用コピー）

現在の公式サイト https://www.yujikajiwara.jp/ をそのまま取り込み、次を加えたものです。

- スマホ対応（レスポンシブCSS：shared/css/responsive.css、全ページにviewport追加）
- トップページに「19周年のごあいさつ」を追加（shared/css/updates.css）
- 定休日の表記を実際のカレンダー通りに修正
  - 毎週月曜日・火曜日（第3火曜日は営業、第3日曜日は休業）
  - 全ページのサイドバーと、メニューページの定休日欄を修正
- 文字コードを Shift_JIS から UTF-8 に変換

料金は現在のままです。料金改正がある場合は、メニューページの金額を書き換えてください。

## GitHub Pagesで公開する手順
1. GitHubでリポジトリを作成（Public）
2. このフォルダの中身をすべてアップロード
3. Settings → Pages → Branch を main / (root) に設定
4. 数分後に https://（ユーザー名）.github.io/（リポジトリ名）/ で公開されます
