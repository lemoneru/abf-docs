# Coming from 2.x (Migrating to 3.0)

3.0 uses an unlock key system.<br>
Without an unlock key, it runs as the free Trial Edition.

If you already use 2.x, download the unlock key from the [Avatar Blink Fix page on BOOTH](https://lemoneru.booth.pm/items/7074770) and import it to activate the Complete Edition.<br>
Once imported, it works across all projects on the same PC.

2.x owners pay nothing extra.<br>
After importing 3.0, use the unlock key available on the same purchase page.

## When "Migrate to the new Avatar Blink Fix" appears

This dialog appears when you install 3.0 in a project that already has 2.x.

Choose [Migrate] to use the features of 3.0 while keeping your existing data and settings.

::: tip If you choose [Later]
You can migrate later from Tools → Avatar Blink Fix → [Migrate to the new version].
:::

## What changed in 3.0

### ① VPM repository support (install directly in VCC / ALCOM)

No more re-importing a unitypackage for every update.<br>
Add the repository once, and from then on a new version is just an "Update" button away.

![ALCOM package management screen showing the Avatar Blink Fix row and add button](/images/alcom-add-package.png)

→ See [Installation](/en/guide/install).<br>
The classic unitypackage is still bundled too.

### ② A new way to fix

Right-click your avatar in the Hierarchy and choose [Avatar Blink Fix] → [自動修正（推奨）] (Auto Fix – Recommended).<br>
An Avatar Blink Fix object is added inside the avatar, and the BlendShapes are fixed.

![Right-clicking an avatar in the Hierarchy and choosing Avatar Blink Fix, then Auto Fix (Recommended)](/images/context-menu-guide.svg)

To restore the avatar to its state before the fix, delete the added Avatar Blink Fix object.

→ [Full workflow](/en/guide/workflow)

::: warning When redoing your expression edits
Delete the Avatar Blink Fix object or turn the preview OFF in its Inspector before editing your expression.<br>
When you're done, run Auto Fix again if you deleted the object, or press [Reload Expression] if you turned the preview off.

When creating or editing expression animations with FaceEmo or a similar tool, turn the preview ON so you can work while seeing the fixed result.
:::

::: tip You can still use the previous method
You can still open the window from Tools → Avatar Blink Fix and fix your avatar as before.
:::

#### Switching a 2.x-fixed avatar to the non-destructive method (NDMF)

Right-click the avatar and choose [Avatar Blink Fix] → [自動修正（推奨）] (Auto Fix – Recommended).<br>
If "Detected a 2.x Fix" appears, choose [Restore & Migrate].

The tool automatically undoes the 2.x fix, adds an Avatar Blink Fix object, and fixes your expression using the non-destructive method (NDMF).

### ③ A new fix method: Bake Mode

Bake Mode may reduce breakage caused by conflicts with expression animations.<br>
Try it when using your avatar's default expression animations unchanged, or when your avatar uses specialized animations such as those for face tracking.

It bakes your edited expression into the mesh as the shape shown when the BlendShape values are 0, then applies the fix.<br>
See the [Bake Mode page](/en/guide/bake) for details.

Use normal Auto Fix for a workflow closer to the previous version.<br>
If your avatar's eyes look wrong when animations play in-game, try switching to Bake Mode.

## Going back to 2.x

::: warning Don't install 2.x while 3.0 is still present
Duplicate classes and assemblies can stop Unity from compiling.<br>
**Remove 3.0 first.**
:::

1. **While 3.0 is still installed**, delete the child objects it added under your avatar, then save the scene/prefab<br>
   (default names: "Avatar Blink Fix (NDMF)", "Avatar Blink Fix (NDMF・トライアル)", "Avatar Blink Fix (Bake)".<br>
   Removing them first avoids leftover Missing Scripts)
2. **Close Unity**
3. In VCC / ALCOM's Manage Project, remove Avatar Blink Fix 3.0 — **do this first**
4. Open the project in Unity and import the **final 2.x unitypackage** from the [Avatar Blink Fix page on BOOTH](https://lemoneru.booth.pm/items/7074770)
5. Leave `Data`, `Animation`, `json` and the unlock key in place

`Data` and `Animation` hold your 2.x fix records.<br>
A 3.0 unlock key that's already imported doesn't affect 2.x in any way.
