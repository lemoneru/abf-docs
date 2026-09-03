---
aside: false

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
      link: /guide/workflow
    - theme: alt
      text: BOOTH で入手
      link: https://lemoneru.booth.pm/items/7074770

---

<HomeTop />

## Avatar Blink Fix とは？

表情改変をすると、目のBlendShapeが破綻し、ゲーム内で目が潰れたり、閉じきらなくなることがあります。
Avatar Blink Fixは、その原因となるBlendShapeを修正するツールです。

<div class="figure-sm">

![表情改変すると破綻するBlendShapeを簡単修正](/images/before-after.jpg)

</div>

修正は、ヒエラルキーで対象のアバターを右クリックして、［Avatar Blink Fix］→［自動修正（推奨）］を選ぶだけです。

100体以上のアバターに対応するAuto Fixプリセットがあるので、すぐに修正できます。
プリセットがないアバターは、必要項目にチェックを入れれば修正できます。

まばたきだけでなく、ウィンク、MMD用、フェイストラッキング用のBlendShapeも修正できます（コンプリート版）。

::: tip 修正するのはBlendShapeです
このツールは、アニメーションを修正するツールではありません。アバターのアニメーション設定によっては、思ったとおりに動作しないことがあります。

アニメーションと競合する場合は、3.0で追加された[ベイクモード](/guide/bake)で破綻を軽減できる可能性があります。

うまく修正できないときや使い方が分からないときは、[よくある質問（FAQ）](/faq)をご覧ください。
:::

## 無料でお試しいただけます

無料版でも、普段のまばたきに使うBlendShape（`vrc.blink` など）を修正できます。

コンプリート版では、まばたきに加えて、ウィンク、MMD用BlendShape、フェイストラッキング用BlendShapeなど、目を閉じるために必要なBlendShapeをすべて修正できます。
対応するAuto Fixプリセットがあれば、自動修正だけで必要なBlendShapeをまとめて修正できます。

→ [無料版と有料版の違い](/guide/editions)（どちらを使えばいい？ どれをインポートすればいい？）
→ [導入方法](/guide/install)

## VPMリポジトリに対応しました（3.0から）

最新版のAvatar Blink FixとAuto Fixプリセットを、VCC / ALCOMからまとめて簡単に導入できます。

**→ [VCC / ALCOM に追加する](/add)**

![ALCOMのパッケージ管理画面。Avatar Blink Fix の行と追加ボタン](/images/alcom-add-package.png)

::: tip 2.x をお使いの方へ
以前からコンプリート版をご購入いただいている方は、追加料金なしで3.0をお使いいただけます。

→ [2.xからの移行についてはこちら](/guide/from-2x)
:::

## 使い方

ヒエラルキーのアバターを右クリックして、［Avatar Blink Fix］→［自動修正（推奨）］を選びます。アバター内にAvatar Blink Fixのオブジェクトが追加され、修正は完了です。

オブジェクトが追加されると、BlendShapeが修正された状態になります。修正をやめるときは、そのオブジェクトを削除してください。削除すると修正前の状態に戻ります。

→ [具体的な動作の流れ](/guide/workflow)

うまくいかないときや、細かく設定したいときは、こちらもどうぞ。

- [ベイクモード](/guide/bake) … 表情アニメーションと競合しているとき。アニメーションによる破綻を軽減できる可能性があります
- [手動修正](/guide/manual-fix) … Auto Fixプリセットが無いアバターのとき
- [メッシュ入れ替え式](/guide/meshswap) … 2.x と同じ操作で使いたいとき

## 困ったときは

- まずは [よくある質問（FAQ）](/faq) へ。よく来る質問から順に並べてあります
- 解決しないときは [BOOTH](https://lemoneru.booth.pm/items/7074770) のメッセージからどうぞ。ツール内の **[サポート情報の出力]** の内容を貼ってもらえると、すぐに状況が分かるので解決が早いです
