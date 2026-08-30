# Manual Fix (for avatars without a preset)

The tool works on avatars without an Auto Fix preset too.
In Manual Fix, you pick two things yourself: the BlendShapes your edits used to reshape the eyes, and the blink BlendShapes you want repaired.

::: tip Try "Auto Fix (Recommended)" first
If your avatar has a preset, [Auto Fix](/en/guide/auto-fix) selects everything for you.
This page is for when the "Auto Fix (Recommended)" menu item is grayed out — no matching preset.
:::

## The overall flow

> **Finish expression edits → add "Manual Fix" → fill in the two lists → preview → upload**

## ① Finish your expression edits first

Manual Fix also works from the BlendShape values at the moment of setup.
Finish your expression edits before you start.

## ② Right-click the avatar → Manual Fix

1. Right-click your avatar in the Hierarchy
2. Choose "**Avatar Blink Fix**" → "**手動修正**" (Manual Fix; the menu is shown in Japanese)

![The Avatar Blink Fix submenu in the right-click menu](/images/context-menu.png)

A component is added, with the Inspector's "**Advanced Settings**" already open.

::: details When "Auto Fix (Recommended)" can't be clicked
That means there's no preset for this avatar (or it doesn't match). It's supposed to be unclickable — go on with "Manual Fix".

"Manual Fix" is available on preset-supported avatars too, in case you want to pick things yourself.
:::

## ③ Make sure "Edit manually" is checked

Entering via "Manual Fix" starts with the preview OFF and "**Edit manually**" ON, so the lists are ready to edit.

If the checkbox is somehow off, turn it on. While it's off, the lists are grayed out.

While the checkbox is on, the fix preview is paused. When you're done selecting, uncheck it and press the preview button in ⑥.

## ④ Select the "BlendShapes Deforming Eyes"

This is where you register the BlendShapes your expression edits used to change the eye shape.
The fix uses them to cancel out your edits — **this list is the foundation of the whole fix.**

::: warning With no preset, this list starts empty
Only preset-supported avatars get it filled automatically, so in Manual Fix you check the entries yourself.

While it's empty, a hint appears under the list asking you to check the BlendShapes that deform the eyes.
:::

### What to select

Among the BlendShapes whose values you changed (anything not at 0), pick the ones that affect the eye shape.
The values are visible on each row's slider.

| ○ Select | ✕ Don't select |
|---|---|
| Changed the eyes' **size or openness** | Anything **still at 0** (untouched by your edits) |
| Changed the eye shape (**upturned / droopy eyes** etc.) | **Mouth, brows, face outline** — anything unrelated to the eyes |
| Moved the **eyelid or eyelash position** | Whatever you'll pick as a fix target in ⑤ (**can't be in both lists**) |

If unsure, check only the eye-area shapes you remember touching during your edits.

## ⑤ Select the "BlendShapes to Fix"

Pick the BlendShapes you want repaired (rebuilt).

Common blink names (`vrc.blink` and the like) get checked automatically even without a preset. If that covers you, there's nothing to add.

### What to select

Start with the one BlendShape your avatar uses for regular blinking. Winks and smiling eyes can be added later while watching the preview.

Half-closed eyes, narrowed eyes, eyelash adjusters, eye-size shapes — don't select those in bulk. Add only what you need, one at a time, checking the eye movement in the preview after each addition; the name alone doesn't tell you enough.

### The name colors are your guide

Above the list you'll see "Cyan=Recommended / Gray=Unavailable".

- **Cyan** … recommended candidates. Start here
- **Gray** … can't be selected. Shapes you checked in ④, and shapes your expression edits are using, end up here (→ [FAQ](/en/faq#used-in-expression))

## ⑥ Check the preview

Turn "**Edit manually**" back OFF and press "**Preview the fix**".
When the avatar in your scene shows the fixed face, check how the blink and winks close.

::: tip If the button says "Load the expression and preview"
Your ④ list ("BlendShapes Deforming Eyes") is still empty. It's fine to press it as-is —
the tool reloads from the avatar first, then goes on to the preview.

If pressing it reports that no eye deformation was found, you haven't changed any face BlendShape values yet (→ [FAQ](/en/faq#no-modification)).
:::

Not the shape you wanted? Go back to ④⑤ and adjust.

## ⑦ Upload and confirm

Upload as usual and the avatar goes up with the fix applied.
Even with the preview stopped, the upload still gets fixed.

After uploading, **check that the eye BlendShapes are repaired.**

::: tip If the eyes move wrong in-game
An expression animation may be conflicting. Try [Bake Mode](/en/guide/bake).
→ [Bake vs Normal Mode](/en/guide/bake-vs-normal)
:::

To stop using the tool, delete the added "Avatar Blink Fix (NDMF)" object. The original mesh was never rewritten.

## Starting over

Press "**Reload Expression**" to return to the automatic selection for this avatar. Handy when you want to redo your manual checks.

## When it doesn't work

- Nothing shows up in the lists → [FAQ: "no eye deformation found"](/en/faq#no-modification)
- The wrong mesh is picked as the face → [FAQ: face mesh not auto-detected](/en/faq#face-not-found)
- The BlendShape I want to fix can't be checked → [FAQ: BlendShapes used by your expression edits](/en/faq#used-in-expression)
- Expressions break the eyes in-game → [Bake Mode](/en/guide/bake)

## You can make your own presets

Fixing the same avatar repeatedly? Make a preset once and Auto Fix works from then on.

The free tool "BlendShapeChecker" can export an Auto Fix preset for your avatar.
Put the exported JSON directly inside `Assets/LEMONERU/Avatar Blink Fix/json` and it's picked up as-is (the folder is created automatically if missing).

→ [BlendShapeChecker (free, BOOTH)](https://lemoneru.booth.pm/items/8361673)

You're welcome to share the presets you make with others.
