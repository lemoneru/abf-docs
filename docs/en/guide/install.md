# Installation

## Install via VCC / ALCOM (recommended)

1. Open [Add to VCC / ALCOM](/en/add) and register the repository. If you have already registered it, continue to the next step.
2. In your project's package management, find "**Avatar Blink Fix**" and add it with the ＋ button (typing "blink" in the search box gets you there fast)

   ![ALCOM package management screen showing the Avatar Blink Fix row and add button](/images/alcom-add-package.png)

   ::: warning ＋ button disabled / "nadena.dev.ndmf not found"
   Avatar Blink Fix requires **NDMF**. If the NDMF repository isn't registered, the package can't be installed together with it.

   Register the NDMF repository, **`https://vpm.nadena.dev/`**, in VCC / ALCOM as well. Then press ＋ again.
   :::

3. Open the project in Unity. A fresh install runs as the free edition, so you can try it before buying.

## Installing via unitypackage

A unitypackage is also bundled for those not using VCC / ALCOM. Import it into your project and it works as-is.
You'll have to re-import it for every update though, so VCC / ALCOM is easier unless you have a specific reason.

## Upgrading to the Complete Edition (for buyers)

[Upgrade to the Complete Edition (importing the unlock key)](/en/guide/unlock-key)

## Updating from 2.x

Import 3.0 without removing the previous version.
If a migration prompt appears during installation, click "Migrate." You can keep using your existing data and settings.

For a new project, simply import 3.0.

## Next step

Once installed, head to [Auto Fix (Recommended)](/en/guide/auto-fix).

## System requirements

- Unity 2022.3 (the VRChat-supported version)
- The non-destructive features ([Auto Fix](/en/guide/auto-fix), [Auto Fix (Bake Mode)](/en/guide/bake)) require **NDMF**
  - Without NDMF, [Mesh Swap (Legacy)](/en/guide/meshswap) still works (when installed via unitypackage; installing via VCC / ALCOM brings NDMF in automatically)
