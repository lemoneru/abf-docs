# Coming from 2.x (Migrating to 3.0)

**The short version first.**

- Avatars you fixed with 2.x **keep working as they are**. Installing 3.0 won't break them
- **You don't need to remove the old Avatar Blink Fix first.** Just install 3.0 as described in [Installation](/en/guide/install)
- If the "Migrate to the new Avatar Blink Fix" dialog appears, **it's safe to press [Migrate]**
- From your next avatar edit onward, just right-click → "**自動修正（推奨）**" (Auto Fix – Recommended)
- **There is no extra charge.** However, 3.0 uses an "unlock key" system (explained right below)

::: danger 3.0 switched to an "unlock key" system
In 3.0, you download an unlock key from the [Avatar Blink Fix page on BOOTH](https://lemoneru.booth.pm/items/7074770) and import it once — that makes it the Complete Edition.

2.x owners pay nothing extra. Download the 3.0 unlock key from the same purchase page.
:::

## When "Migrate to the new Avatar Blink Fix" appears

This dialog appears after installing 3.0 if files from the previous version remain.

### It's safe to press [Migrate]

The old and new versions can't run side by side, so the tool tidies things up so that only the new version is active.

| Moved away | Kept in place |
|---|---|
| **Only the tool's own files** | **`Data`** (fix records) |
| | **`Animation`** (generated animations) |
| | **Presets you added yourself** |
| | **Avatars you already fixed** (they keep working) |

Files are only moved to the trash, so you can restore them anytime. A full list of what was moved is printed to the Unity Console.

::: tip Pressing [Later] breaks nothing
With 2.x still around you'll just see a warning; the project keeps working. You can migrate anytime later from Tools → "Avatar Blink Fix" → "**Migrate to the new version**".
:::

::: details What if I accidentally right-click-fix an avatar already fixed with 2.x?
No problem. 3.0 detects it and shows a "Detected a 2.x Fix" dialog, so it never gets fixed twice and broken.

In that dialog, **press [Keep As Is]**. Nothing changes and the 2.x fix keeps working.
Choose [Restore & Migrate] only if you want to switch to the new non-destructive method — it restores the 2.x fix first, then sets the avatar up again the 3.0 way.
:::

## What changed in 3.0

### ① VPM repository support (install directly in VCC / ALCOM)

No more re-importing a unitypackage for every update.
Add the repository once, and from then on a new version is just an "Update" button away.

![ALCOM package management screen showing the Avatar Blink Fix row and add button](/images/alcom-add-package.png)

→ See [Installation](/en/guide/install). The classic unitypackage is still bundled too.

### ② A new way to fix

Right-click your avatar in the Hierarchy and choose "Avatar Blink Fix" → "**自動修正（推奨）**" (Auto Fix – Recommended). That's the whole job.

![The Avatar Blink Fix submenu in the right-click menu](/images/context-menu.png)

- Unlike 2.x, **the mesh is not rewritten** (non-destructive). The fix is applied automatically at upload time
- Preview turns on automatically, so you can check the fixed face on the spot
- To undo, delete the added object
- Details → [Auto Fix (Recommended)](/en/guide/auto-fix)

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
