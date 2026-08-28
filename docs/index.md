---
layout: home

hero:
  name: Avatar Blink Fix
  tagline: 表情改変後の目のBlendShapeを修正するツール
  image:
    src: /images/abf-thumbnail.jpg
    alt: Avatar Blink Fix
  actions:
    - theme: brand
      text: VCC / ALCOM に追加
      link: /add
    - theme: alt
      text: 使い方を見る
      link: /guide/auto-fix
    - theme: alt
      text: BOOTH で入手
      link: https://lemoneru.booth.pm/items/7074770

features:
  - icon: 🖱️
    title: 右クリック1回で修正
    details: アバターを右クリック →「自動修正（推奨）」を押すだけ。あとはアップロードすれば反映されます。
  - icon: 🧩
    title: 元のアバターは書き換えません
    details: メッシュはそのまま。追加されたオブジェクトを消せば、いつでも元通りです。
  - icon: 🎌
    title: MMD・フェイストラッキングにも
    details: MMD用のBlendShapeや、フェイストラッキング用の目閉じBlendShapeも修正できます。
  - icon: ✨
    title: 対応アバターはワンクリック
    details: Auto Fixプリセットで100体以上のアバターに対応。選ぶだけで自動修復できます。
---

## Avatar Blink Fix とは？

表情改変をすると、**まばたきや目を閉じるBlendShapeが破綻する**ことがあります。
いい顔ができたのに、ゲーム内でまばたきすると目が突き抜ける・閉じきらない——
Avatar Blink Fix は、その原因になっている目のBlendShapeそのものを修正するツールです。

<div class="figure-sm">

![表情改変すると破綻するBlendShapeを簡単修正](/images/before-after.jpg)

</div>

MMD用のBlendShapeや、フェイストラッキング用の目閉じBlendShapeも修正できます。

::: tip 直すのは「BlendShape」です
本ツールが直すのは、目のBlendShapeそのものです。
ゲーム内での見え方は表情アニメーションの組み方にも左右されるため、アニメーションと競合している場合は[ベイクモード](/guide/bake)で対応できます。
:::

## 無料でお試しできます

**ツールを入れただけの状態が、そのまま無料版です。**
VRChatで使われるまばたきのBlendShapeを、自動で正しい形へ修正できます。
まずは自分のアバターで試してみてください。

有料版なら、**さらに多くのBlendShape**（MMD用・フェイストラッキング用など）も修正できます。

→ [無料版と有料版の違い](/guide/editions)（どちらを使えばいい？ どれをインポートすればいい？）
→ [導入方法](/guide/install)

## VPMリポジトリに対応しました（3.0から）

**VCC / ALCOM に直接導入できるようになりました。**
アップデートのたびにファイルを入れ直す必要はもうありません。新しいバージョンが出たら「更新」を押すだけです。

**→ [VCC / ALCOM に追加する](/add)**（ボタンひとつで登録できます）

![ALCOMのパッケージ管理画面。Avatar Blink Fix の行と追加ボタン](/images/alcom-add-package.png)

::: tip 3.0のアップデート内容（2.x をお使いの方へ）
VPM対応・**修正方法の変更**・**ベイクモードの追加**・限界突破（100超／マイナス値）対応・フェイストラッキング用BlendShapeの検出など、3.0で新しくなりました。
アップデートの手順と変わったことは → **[3.0 で変わったこと](/guide/from-2x)**
:::

## 使い方

**ヒエラルキーのアバターを右クリック →「Avatar Blink Fix」→「自動修正（推奨）」。これだけです。**

![右クリックメニューの「Avatar Blink Fix」サブメニュー](/images/context-menu.png)

押すとプレビューがONになるので、**その場で修正後の顔を確認できます**。
あとはいつもどおりアップロードすれば、修正された状態でアバターが上がります。
→ くわしくは [自動修正（推奨）](/guide/auto-fix)

**表情改変からゲーム内で確認するまでの通しの流れは → [実際の修正の流れ](/guide/workflow)**

うまくいかないときや、細かく設定したいときは、こちらもどうぞ。

- [手動修正](/guide/manual-fix) … Auto Fixプリセットが無いアバターのとき
- [ベイクモード](/guide/bake) … 表情アニメーションを使っていて、ゲーム内で目の動きがおかしいとき
- [メッシュ入れ替え式](/guide/meshswap) … 2.x と同じ操作で使いたいとき

## 困ったときは

- まずは [よくある質問（FAQ）](/faq) へ。よく来る質問から順に並べてあります
- 解決しないときは [BOOTH](https://lemoneru.booth.pm/items/7074770) のメッセージからどうぞ。ツール内の **[サポート情報の出力]** の内容を貼ってもらえると、すぐに状況が分かるので解決が早いです
