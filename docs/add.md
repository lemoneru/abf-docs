---
title: VCC / ALCOM に追加
---

# VCC / ALCOM に追加

ボタンひとつで、VPMリポジトリを VCC / ALCOM に追加できます。
追加は**最初の1回だけ**。次からは「更新」を押すだけで最新版になります。

<AgreeInstall />

::: details ボタンで開かないときは
VCC / ALCOM の設定 →「Packages」→「Add Repository」に、次のURLを貼り付けてください。

```
https://lemoneru.github.io/vpm-repos/index.json
```

ご購入者は、商品に同梱されている「**VCCに追加**」ショートカットからでも同じことができます。
:::

## 追加したあと

1. リポジトリ「LEMONERU」を追加するか聞かれるので、**承認する**
2. プロジェクトのパッケージ管理で「**Avatar Blink Fix**」を探して、**＋ボタンで追加**する
   （検索欄に「blink」と入れると早いです）

   ![ALCOMのパッケージ管理画面。Avatar Blink Fix の行と追加ボタン](/images/alcom-add-package.png)

3. Unity でプロジェクトを開けば、もう使える状態です

そのまま[使い方](/guide/auto-fix)へどうぞ。**入れただけの状態が無料版**なので、購入前にお試しいただけます。

## 補足

- 非破壊機能（[自動修正](/guide/auto-fix)・[ベイクモード](/guide/bake)）には **NDMF** が必要です。入っていない場合は、同じパッケージ一覧から「NDMF」も追加してください
- VCC / ALCOM を使わない場合は [unitypackage での導入](/guide/install#unitypackage-で導入する)もできます
- くわしい手順や、有料版へのアップグレードは → [導入方法](/guide/install)
