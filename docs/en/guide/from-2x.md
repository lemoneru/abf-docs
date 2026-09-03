# Coming from 2.x (Migrating to 3.0)

::: danger 3.0 switched to an "unlock key" system
In 3.0, you download an unlock key from the [Avatar Blink Fix page on BOOTH](https://lemoneru.booth.pm/items/7074770) and import it once — that makes it the Complete Edition.

2.x owners pay nothing extra. Download the 3.0 unlock key from the same purchase page.
:::

## When "Migrate to the new Avatar Blink Fix" appears

This dialog appears when you install 3.0 in a project that already has 2.x.

Choose [Migrate] to use the features of 3.0 while keeping your existing data and settings.

::: tip If you choose [Later]
You can migrate later from Tools → Avatar Blink Fix → [Migrate to the new version].
:::

## Switching a 2.x-fixed avatar to the non-destructive method (NDMF)

Right-click the avatar and choose [Avatar Blink Fix] → [自動修正（推奨）] (Auto Fix – Recommended).

If "Detected a 2.x Fix" appears, choose [Restore & Migrate]. The tool restores the avatar from its 2.x fix, then adds the non-destructive fix object.

## What changed in 3.0

### ① VPM repository support (install directly in VCC / ALCOM)

No more re-importing a unitypackage for every update.
Add the repository once, and from then on a new version is just an "Update" button away.

![ALCOM package management screen showing the Avatar Blink Fix row and add button](/images/alcom-add-package.png)

→ See [Installation](/en/guide/install). The classic unitypackage is still bundled too.

### ② A new way to fix

Right-click your avatar in the Hierarchy and choose [Avatar Blink Fix] → [自動修正（推奨）] (Auto Fix – Recommended).<br>
An Avatar Blink Fix object is added inside the avatar, and the BlendShapes are fixed.

![Right-clicking an avatar in the Hierarchy and choosing Avatar Blink Fix, then Auto Fix (Recommended)](/images/context-menu-guide.svg)

To undo the fix, delete the added object. This restores the avatar to its state before the fix.

→ [Full workflow](/en/guide/workflow)

::: warning When redoing your expression edits
Press "**Stop preview**" before editing, then press "**Reload Expression**" when you're done.
When creating or editing expression animation clips in an expression tool, do the opposite: keep the preview ON.
→ Details: [Auto Fix: Redoing your expression edits later](/en/guide/auto-fix#redoing-your-expression-edits-later)
:::

::: tip The classic window is still there
The 2.x-style window lives on as "[Mesh Swap (Legacy)](/en/guide/meshswap)". You can keep working the old way, but we recommend the right-click Auto Fix first.
:::

### ③ New: Bake Mode

In 2.x, an expression animation baked into the avatar could pin an eye BlendShape at 0 — things looked fixed in Unity but broke in-game. This was seen on avatars such as Kipfel, Marycia and Azuki.

Bake mode bakes your edited expression into the mesh before fixing. It may reduce breakage caused by expression animations.

→ When and how to use it: [Bake Mode](/en/guide/bake). When Auto Fix detects a conflict, it shows guidance with a switch button — no need to memorize any of this.

## Going back to 2.x

::: warning Don't install 2.x while 3.0 is still present
Duplicate classes and assemblies can stop Unity from compiling. **Remove 3.0 first.**
:::

1. **While 3.0 is still installed**, delete the child objects it added under your avatar, then save the scene/prefab
   (default names: "Avatar Blink Fix (NDMF)", "Avatar Blink Fix (NDMF・トライアル)", "Avatar Blink Fix (Bake)". Removing them first avoids leftover Missing Scripts)
2. **Close Unity**
3. In VCC / ALCOM's Manage Project, remove Avatar Blink Fix 3.0 — **do this first**
4. Open the project in Unity and import the **final 2.x unitypackage** from the [Avatar Blink Fix page on BOOTH](https://lemoneru.booth.pm/items/7074770)
5. Leave `Data`, `Animation`, `json` and the unlock key in place

`Data` and `Animation` hold your 2.x fix records. A 3.0 unlock key that's already imported doesn't affect 2.x in any way.
