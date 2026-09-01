# Installation

## Install via VCC / ALCOM (recommended)

::: danger Currently distributed to supporter-edition buyers only
🔑 **Without an unlock key, the tool does not run as the Complete Edition** (an installed copy runs as the **free edition**).
The unlock key is available **from the BOOTH purchase page for supporter-edition buyers**.

⚠️ **2.x owners also need an unlock key for 3.0** (unlock keys are new in 3.0 and are not included in 2.x) → [Coming from 2.x](/en/guide/from-2x)

**The public release date will be announced on this page and on BOOTH once decided.** After that, everyone can use the repository.
:::

::: tip Why VCC / ALCOM?
No more re-importing files for every update. When a new version comes out, just press "Update"!
:::

1. Read the [Terms of Use](/en/terms), tick the checkbox, and press the button (VCC / ALCOM will open)

   <AgreeInstall />

   ::: details If VCC / ALCOM doesn't open automatically
   In VCC / ALCOM, go to Settings → "Packages" → "Add Repository" and paste this URL:

   ```
   https://lemoneru.github.io/vpm-repos/index.json
   ```

   Buyers can also use the "**VCCに追加**" (Add to VCC) shortcut bundled with the product — it does the same thing.
   :::

2. You'll be asked to add the "LEMONERU" repository — approve it
3. In your project's package management, find "**Avatar Blink Fix**" and add it with the ＋ button (typing "blink" in the search box gets you there fast)

   ![ALCOM package management screen showing the Avatar Blink Fix row and add button](/images/alcom-add-package.png)

   ::: warning ＋ button disabled / "nadena.dev.ndmf not found"
   Avatar Blink Fix requires **NDMF**. If the NDMF repository isn't registered, the package can't be installed together with it.

   Using the same steps, also add **`https://vpm.nadena.dev/`**. Then press ＋ again and it will install.
   :::

4. Open the project in Unity and you're ready to go

## Installing via unitypackage

A unitypackage is also bundled for those not using VCC / ALCOM. Import it into your project and it works as-is.
You'll have to re-import it for every update though, so VCC / ALCOM is easier unless you have a specific reason.

## Upgrading to the Complete Edition (for buyers)

If the tool says "Complete edition feature" and you have already purchased it, use the steps below to unlock it.

A fresh install runs as the **free edition** (it fixes one automatically selected blink BlendShape).
Not sure which edition you need? → [Free vs Complete Edition](/en/guide/editions)

Buyers just import the included file (the unlock key) into a project once, and the upgrade is done.

- On the same PC, every other project also becomes the Complete Edition — no per-project setup
- On success, you'll see "Complete Edition Unlocked"

  ![Unlock success dialog](/images/unlock-dialog.png)

- No re-import needed after updates either

::: details Do I need to remove the free edition first?
No. Import the key right on top of the free edition and it becomes the Complete Edition cleanly, with nothing left behind.
:::

::: tip If you set up an avatar while on the free edition
Settings made in the free edition are saved with only one fix target.
After upgrading, press "**Reload Expression**" in the Inspector to set up all BlendShapes as targets.
(The tool shows the same guidance. Forgetting to press it won't break anything.)
:::

## Updating from 2.x

What changed is summarized in [Coming from 2.x](/en/guide/from-2x).

- 2.x owners can use 3.0 free of charge
- Avatars fixed with 2.x keep working. Installing 3.0 won't break them
  (if you try to right-click-fix an already-fixed avatar, the tool detects it and shows guidance)
- **You don't need to remove the previous version first.** Just install 3.0
- If old 2.x files remain, the "**Migrate to the new Avatar Blink Fix**" dialog appears. Press "**Migrate**" and only the new version stays active
  (your settings and fixed avatars keep working; the old files are only moved to the trash, so you can restore them anytime)
- You can also do this later from Tools → "Avatar Blink Fix" → "**Migrate to the new version**"

## Next step

Once installed, head to [Auto Fix (Recommended)](/en/guide/auto-fix).

## System requirements

- Unity 2022.3 (the VRChat-supported version)
- The non-destructive features ([Auto Fix](/en/guide/auto-fix), [Bake Mode](/en/guide/bake)) require **NDMF**
  - Without NDMF, [Mesh Swap (Legacy)](/en/guide/meshswap) still works (when installed via unitypackage; installing via VCC / ALCOM brings NDMF in automatically)
