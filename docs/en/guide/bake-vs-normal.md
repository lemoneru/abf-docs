# Bake vs Normal Mode

Avatar Blink Fix has two fixing modes: normal mode and Bake mode.
Let's answer "which one should I use?" first.

::: tip If in doubt
**Start with normal mode** (right-click → "Auto Fix (Recommended)"). If that fixes it, you're done.

If the eyes look wrong in-game when you play expressions, try Bake mode. It may reduce animation-caused breakage.
:::

## In one sentence each

- **Normal mode** … rebuilds only the eye BlendShapes
- **Bake mode** … bakes your edited expression into the mesh, then rebuilds the eye BlendShapes

Baking turns the edited face into the new "base" face, so the foundation doesn't shift when expression animations play later. That's why Bake mode is robust against animations.

## Side by side

| | Normal mode | Bake mode |
|---|---|---|
| How to run it | Right-click → "自動修正（推奨）" (Auto Fix – Recommended) | Right-click → "自動修正（ベイクモード）" (Auto Fix – Bake Mode) |
| Price | **Works in the free edition** | **Complete Edition only** |
| Expression animations | Conflicts can break the eye movement | May reduce the breakage |
| Overdriven values (above 100 / negative) | Can't be reproduced | **Only bake can reproduce them** |
| Face-tracking BlendShapes | Not included by default | Included by default |
| What the preview shows | The fixed face | BlendShapes at 0 |
| Your original avatar | Never rewritten | Never rewritten |
| Undo | Just delete the object | Same |

Both are non-destructive. Baking happens at upload (build) time, so the mesh in your scene stays untouched.

::: details Why is the face-tracking default reversed?
FT avatars usually adjust eye closing by having animations zero out the edited BlendShapes. After baking, that zeroing hits nothing. In normal mode the FT-side mechanism keeps working, so it's excluded by default. Both can be changed in the Inspector.

→ [Using Face Tracking](/en/guide/face-tracking)
:::

## Where Bake mode is weaker

In exchange, there are two things to watch for.

### 1. The bake range is wide

By default, every BlendShape you edited gets baked.
That means parts unrelated to the eyes (mouth and so on) can get baked along with them.

Leaving them in causes no major problems, but if you want only the essentials, remove them via "**Bake Range**" in the Inspector.

Two kinds are never auto-included:

- MMD-compatible BlendShapes
- BlendShapes still at the avatar's original default values

### 2. Expressions read 0 while previewing

Bake mode's preview reproduces the post-bake state.
So while previewing, **BlendShape weights are 0** and the avatar in your scene shows its base face.

::: warning Stop the preview before redoing expression edits
Editing values while they read 0 will give you unexpected results.
The steps are the same as normal mode → [Auto Fix: Redoing your expression edits later](/en/guide/auto-fix#redoing-your-expression-edits-later)
:::

## You can switch anytime

Even after setting up in normal mode, the Inspector's "**Switch to Bake mode**" button moves you over.
Your selections and settings carry over — nothing starts from scratch.

When a "conflict with expression animations" is found, this guidance and button appear automatically.

## Summary

- If normal mode works, that's all you need. It's available in the free edition
- If "conflict" appears and the eyes look wrong in-game, switch to Bake mode
- Overdriven edits require Bake mode
- Bake mode bakes a wide range, and expressions read 0 while previewing

Ready for the steps?

- [Auto Fix (Recommended)](/en/guide/auto-fix) … normal mode
- [Bake Mode](/en/guide/bake)
- [The Full Workflow](/en/guide/workflow) … from expression editing to checking in-game
