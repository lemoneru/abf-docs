# The Full Workflow

This page answers "so what order do I actually do things in?" —
the whole flow from expression editing to checking your avatar in-game.

> **① Edit expressions → ② Right-click, Auto Fix → ③ Check the preview → ④ Upload → ⑤ Check in-game**

Each step links to a page with the details.

::: tip Haven't installed yet?
First add the tool via [Add to VCC / ALCOM](/en/add). **A fresh install runs as the free edition.**
:::

::: tip The right-click menu is shown in Japanese
Due to a Unity limitation, the right-click menu items always appear in Japanese, regardless of the Language setting:

- 自動修正（推奨） = **Auto Fix (Recommended)**
- 自動修正（ベイクモード） = **Auto Fix (Bake Mode)**
- 手動修正 = **Manual Fix**

Everything else in the tool follows the Language setting.
:::

## ① Finish your expression edits first

Avatar Blink Fix records the BlendShape values at the moment you run the fix, and builds the correction from them.
So the most natural flow is to **finish your expression edits, then fix**.

Fixing mid-edit is fine too, but if you edit more afterwards you'll need the steps under "Redoing your expression edits later" below.

## ② Right-click the avatar → Auto Fix (Recommended)

Right-click your avatar in the Hierarchy and choose "**Avatar Blink Fix**" → "**自動修正（推奨）**" (Auto Fix – Recommended).

![The Avatar Blink Fix submenu in the right-click menu](/images/context-menu.png)

When you see "The blink fix has been set up", you're done setting up.
An object called "Avatar Blink Fix (NDMF)" is added under the avatar; all the settings live on it.

→ Details: [Auto Fix (Recommended)](/en/guide/auto-fix)

::: warning When "Auto Fix (Recommended)" is grayed out
That means no Auto Fix preset matches this avatar, so the menu item can't be clicked.
Pick the BlendShapes to fix yourself and you get the same result.
→ [Manual Fix (for avatars without a preset)](/en/guide/manual-fix)
:::

## ③ Check the fixed face in the preview

Running Auto Fix turns the preview on automatically, so the avatar in your scene shows the fixed face right away.
You can confirm on the spot that it looks the way you want.

If the Inspector button shows the red "**Stop preview**", the preview is ON.

![Inspector after the fix, showing detection counts and the Reload Expression / Stop preview buttons](/images/easy-normal.png)

→ Details: [Auto Fix: Check the fixed face right away](/en/guide/auto-fix#check-the-fixed-face-right-away)

## If "conflict with expression animations" appears

If you don't see this message, skip this step.

When an expression animation drives a BlendShape that's being fixed, the Inspector shows a yellow notice and a "**Switch to Bake mode**" button.
The notice alone doesn't mean you must switch. Upload first; if the eyes look wrong in-game when you play expressions, then switch to Bake mode. Your settings carry over.

If overdriven values (above 100 or negative) are detected, switch to Bake mode — normal mode can't reproduce those values.
If an animation is breaking the face itself, Bake mode may reduce that too.

→ Details: [Bake Mode](/en/guide/bake) ／ [Bake vs Normal Mode](/en/guide/bake-vs-normal)

## ④ Upload as usual

No special steps. Upload from the VRChat SDK as you always do, and the avatar goes up with the fix applied.

Even with the preview stopped, the fix is applied at upload time (→ [how it works](/en/guide/auto-fix#check-the-fixed-face-right-away)).

## ⑤ Check in-game

Join VRChat and try blinking and playing expressions. If everything looks right, you're done.

If the eyes move wrong, an expression animation may be conflicting. Try [Bake Mode](/en/guide/bake) as guided above.

## Redoing your expression edits later

1. Press "**Stop preview**" in the Inspector (editing while the preview is on can give unintended results)
2. Redo your expression edits
3. Press "**Reload Expression**" so the tool re-records the edited state

When creating or editing expression animation clips in an expression tool, do the opposite: keep the preview ON.

→ Details: [Auto Fix: Redoing your expression edits later](/en/guide/auto-fix#redoing-your-expression-edits-later)

To stop using the tool, delete the added "Avatar Blink Fix (NDMF)" object. The original mesh was never rewritten.

## Quick reference

| Situation | Where to go |
|---|---|
| "Conflict with expression animations" appeared | Check in-game first. If the eyes look wrong: [Bake Mode](/en/guide/bake) |
| Eyes move wrong in-game when playing expressions | [Bake Mode](/en/guide/bake) |
| An animation is breaking the face | [Bake Mode](/en/guide/bake) (may reduce the breakage) |
| Using overdriven values (above 100 / negative) | [Bake Mode](/en/guide/bake) |
| "Auto Fix (Recommended)" is grayed out | [Manual Fix](/en/guide/manual-fix) |
| No NDMF / want the 2.x-style workflow | [Mesh Swap (Legacy)](/en/guide/meshswap) |
| You use face tracking | [Using Face Tracking](/en/guide/face-tracking) |
| You use a tool that adds BlendShapes | [Using Tools That Add BlendShapes](/en/guide/added-blendshapes) |
| Want to fix MMD / face-tracking BlendShapes too | [Free vs Complete Edition](/en/guide/editions) |
| Anything else that's not working | [FAQ](/en/faq) |
