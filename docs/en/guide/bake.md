# Bake Mode

A mode that bakes your edited expression into the mesh first, then fixes.
It holds up even when expression animations are involved, and **overdriven values (above 100 / negative) are reproduced as-is**.

This mode is non-destructive too. The baking happens automatically at upload (build) time; the original mesh is never rewritten.

※ Bake mode is a Complete Edition feature (not available in the free edition).

→ Which one should I use? [Bake vs Normal Mode](/en/guide/bake-vs-normal)

## When to use it

- [Auto Fix](/en/guide/auto-fix) reported "conflict with expression animations" and the eyes look wrong in-game
- Your edits use overdriven values (above 100 or negative)

::: tip Start with Auto Fix (normal mode)
If normal mode works, there's no need for Bake mode. If the conflict notice appears, check the eye movement in-game first.
:::

## Steps

1. Right-click your avatar in the Hierarchy
2. Choose "**Avatar Blink Fix**" → "**自動修正（ベイクモード）**" (Auto Fix – Bake Mode; the menu is shown in Japanese)
3. Now just upload. Baking and fixing are applied automatically

Already set up in normal mode? The Inspector's "**Switch to Bake mode**" button works too — your selections and settings carry over.

![Bake mode Inspector, with a bake count added to the detections and a Bake Range selector](/images/easy-bake.png)

## What gets baked

By default, every BlendShape you edited gets baked. Two kinds are excluded automatically:

- MMD-compatible BlendShapes
- BlendShapes still at the avatar's original default values

Want to change the range? Use "**Bake Range**" in the Inspector.

### Colors tell you what can be unchecked

The bake target list is color-coded by name:

- <span style="color:#22d3ee">■</span> **Cyan = around the eyes** … needed for the fix, leave these on
- <span style="color:#f59e0b">■</span> **Orange = outside the eyes** (mouth etc.) … unchecking them doesn't affect the fix

![Bake target BlendShape list showing cyan eye shapes and orange mouth/brow shapes](/images/bake-legend.png)

Since everything you edited is included at first, having lots of orange is normal.
Leaving them in causes no major problems, but if you want only the essentials, uncheck the orange ones.

The list is under "**Advanced Settings**" → "**BlendShapes to Bake**".

## Preview notes

Bake mode also turns the preview on automatically after setup. Unlike normal mode, though, **BlendShape weights become 0 while previewing** (it reproduces the post-bake state).

The preview button, when OFF, is labeled "**Preview the baked result**" — a different name from normal mode's "Preview the fix", but it does the same thing.

::: warning Stop the preview before editing expressions
Editing values while they read 0 will give you unexpected results.
When you're done editing, press "**Reload Expression**" to re-record the edited state.
:::

## Face tracking (FT) avatars

In Bake mode, FT eye-close BlendShapes are **included in the fix by default** (the opposite of normal mode).

FT avatars usually adjust eye closing by having animations cancel out the edited BlendShapes — and baking breaks that cancellation. So when baking, the fix has to handle it on this side.

Don't want that? Use the "Face Tracking BlendShapes" toggle in the Inspector.

## Undoing everything

Same as [Auto Fix](/en/guide/auto-fix): delete the added "Avatar Blink Fix (NDMF)" object and everything is back to normal.
