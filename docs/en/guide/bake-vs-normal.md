# Bake vs Normal Mode

Avatar Blink Fix offers Normal Mode, Bake Mode, and Manual Fix.
Use this table to choose where to start.

| How you use the avatar | Start with | Why |
|---|---|---|
| Keep the avatar's original expression animations unchanged | **Bake Mode** | You do not need to remove zero-value entries from the animations |
| Use face tracking without adjusting the expression animations yourself | **Try Bake Mode first** | FT BlendShapes are included in the fix by default |
| Edit expression animations with FaceEmo or another tool | **Normal Mode** | Remove zero-value curves for the corrected BlendShapes from the animations |
| "Auto Fix (Recommended)" is unavailable, or no preset matches | **Manual Fix** | Choose the BlendShapes that deform the eyes yourself |

- **Edits using values above 100 or negative values require Bake Mode.**
- **When using Avatar Mouth Fix, use [Normal Fix in Mesh Swap](/en/guide/meshswap#when-combining-with-avatar-mouth-fix).**
- Normal Mode may fit better when an FT addon manages its correction through zero-value animation curves. See [Using Face Tracking](/en/guide/face-tracking) for details.

## In one sentence each

- **Normal mode** … rebuilds only the eye BlendShapes
- **Bake mode** … bakes your edited expression into the mesh, then rebuilds the eye BlendShapes
- **Manual Fix** … lets you choose which BlendShapes Normal Mode should rebuild

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

Ready for the steps?

- [Auto Fix (Recommended)](/en/guide/auto-fix) … normal mode
- [Bake Mode](/en/guide/bake)
- [Manual Fix](/en/guide/manual-fix)
- [The Full Workflow](/en/guide/workflow) … from expression editing to checking in-game
