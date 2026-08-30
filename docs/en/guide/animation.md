# Merging Blinks into Expression Animations (Extra Feature)

Takes your existing expression animations and writes out new ones with blinking mixed in.

::: tip Only if you want it
**If you just want your blink fixed, you don't need this feature.** [Auto Fix](/en/guide/auto-fix) does the whole job.

This page is a bonus for people who want their avatar to keep blinking while an expression is active.
The steps are on the long side, so read this only when you actually need it.
:::

※ Complete Edition feature.

## When you'd use this

> Your expression animations are all made.
> Now you want your favorite blink playing in every expression.

Opening each expression animation and hand-adding blink keys is a chore. This feature builds them all at once.

::: warning A common misunderstanding
**This is not a feature that creates a blink animation for you.**
Your existing expression animations and your existing blink animation — those two are the ingredients.
:::

## How it works

Knowing this first will keep the steps from feeling mysterious.

1. A **new BlendShape combining blink and expression** is added to the face mesh
2. A **new animation file** driving that BlendShape is written out
3. Your original expression animations **stay untouched** — nothing is overwritten

In other words, **your avatar's setup is not rewritten automatically.** New material simply gets created.
Only when you put the generated animation where it's used does anything take effect.

## Steps

> ① Finish expression edits → ② Set up the blink fix → ③ Add expression animations → ④ Set the blink animation → ⑤ Generate → ⑥ Swap in the generated animations

::: danger Redoing expression edits after ⑤ means starting over
If you change the face BlendShapes after generating, the generated animations no longer match.
Finish your expression edits in ①.
:::

### ① Finish your expression edits

Build your expressions with the face BlendShapes as usual.
This feature uses the face you make here as its base.

### ② Set up the blink fix

Right-click the avatar → "Avatar Blink Fix" → "**自動修正（推奨）**" (Auto Fix – Recommended).
Get the blink fix in place first (→ [Auto Fix](/en/guide/auto-fix)).

For the rest of the animation setup and checking, keep the "Avatar Blink Fix" object and work **with the preview ON**. Same if you rebuild expression animations in your expression tool.

### ③ Add your expression animations

Open "**Advanced Settings**" in the Inspector, then open "**Animation Support**" at the very bottom.

Drag & drop the expression animations you're currently using onto the "**Expression Animation**" area.
You can drop several at once.

::: tip If they won't drop
If the cursor doesn't change over the drop area, you're holding something that isn't an AnimationClip.
Drag the `.anim` files directly from the Project window.
:::

Below it, "**Combine Target BlendShape**" is where the blink gets mixed in. The displayed default is usually fine.

### ④ Set the blink animation

Put the blink `.anim` you want to use into "**Blink Animation**" under the blink settings.

Then use "**Blink BlendShape**" to choose which BlendShape in that animation counts as the blink.
The candidates are filtered automatically — picking from what appears is fine.

#### If "Same BlendShapes are used" appears

It means the expression side and the blink side are fighting over the same BlendShape.
Only then does the "**Blend Mode**" selector appear.

| | What happens |
|---|---|
| Expression priority | The expression's shape wins. During smiling eyes and the like, that shape is held |
| Blink priority | The blink wins. Blinking plays through every expression |

If unsure, start with "Expression priority" — it keeps the expressions you made looking as designed.
If you want blinking even during expressions, switch to "Blink priority" and compare both; that's the fastest way to decide.

### ⑤ Generate

Press "**Generate Animation BlendShapes/Animations**".

::: tip The "Overwrite on re-generate" checkbox
Leave it off the first time.

Each press creates a new timestamped folder, so if you know you'll regenerate with the same settings, checking it reuses the previous folder instead.
:::

**The output lands here:**

```
Assets/LEMONERU/Avatar Blink Fix/Animation/<avatar name>/<timestamp>/
```

A folder per avatar, then a folder per generation time.
File names are "**original animation name + `_ABF_Blink`**".

When "Animation Generated" appears, open the folder and check the contents.

### ⑥ Swap in the generated animations

🔴 **Skip this and nothing changes.**

In your expression setup tool, **replace each original animation with its generated `_ABF_Blink` version.**
Only after the swap does blinking appear in-game.

::: warning Turn off your expression tool's own "blink" option
If your expression setup tool has a setting that enables blinking, **turn it off.**

The generated animations already contain the blink.
If the tool adds blinking on top, the two stack and the eye movement breaks.
:::

## Checking the result

Upload, then watch the blinking in VRChat while switching expressions.

- Blinking continues through expressions → success
- Nothing changed → the ⑥ swap usually hasn't been done
- Blinking looks unnaturally fast or doubled → your expression tool's blink option is still on
- An expression looks broken → switch the ④ Blend Mode to the other option and regenerate

## When it doesn't work

- The generate button is disabled … neither an expression animation nor a blink animation is set. Adding either one enables it
- Can't find the output … see the path above. The folders are timestamped, so the newest one is this run's
- I rebuilt my expressions … sorry — start over from ③. The generated animations no longer match the new face

Still stuck? Message us on [BOOTH](https://lemoneru.booth.pm/items/7074770).
