# Using Face Tracking

Avatar Blink Fix works on face-tracking (FT) avatars as they are.
**In most cases the default settings are fine.**

Read this page if FT eye closing looks wrong in-game, or if you want to know what the settings mean.

::: tip This page is about the Complete Edition
Fixing FT BlendShapes is a paid feature. In the free edition, the section and toggle described here are not shown at all.
→ [Free vs Complete Edition](/en/guide/editions)
:::

::: warning About the menu names
The right-click menu is displayed in Japanese regardless of your language setting (a Unity limitation).
自動修正（推奨） = Auto Fix (Recommended) ／ 自動修正（ベイクモード） = Auto Fix (Bake Mode)
:::

## The short answer

| Situation | What to do |
|---|---|
| [Auto Fix (Recommended)](/en/guide/auto-fix) and nothing looks wrong | **Leave it** — keep "Don't include" |
| FT eye closing breaks in-game, or eyes sink into the face | Switch to "**Include in fix**" and try again |
| You're using [Bake Mode](/en/guide/bake) | It's **already set to "Include in fix"**. Leave it |

Switching won't break anything. **Try both and keep whichever looks better.**

## Where to switch it

Use the ［**Include in fix**］／［**Don't include**］ buttons under "**Face Tracking BlendShapes**" in the Inspector.

If you have Advanced Settings open, the "**Also fix Face Tracking BlendShapes**" checkbox does the same thing. Either one works.

## What the tool tells you, and what to pick

When FT BlendShapes are found, the tool shows a message for your situation. **Following what it says is fine.**

| Message in the tool | What it means | Recommended |
|---|---|---|
| Face-tracking BlendShapes were detected. If your FT setup already handles them, keep "Don't include". | FT BlendShapes were found | **Don't include** (switch if symptoms appear) |
| An FT-side animation is driving the face-tracking BlendShapes. They are likely already handled, so "Don't include" is recommended. | Your FT addon already takes care of them | **Don't include** |
| In Bake mode, "Include in fix" is recommended. | You set up Bake mode | **Include in fix** (already the default) |

## How the tool decides something is "for FT"

It looks for **`EyeClosedLeft` / `EyeClosedRight`** on the face mesh — the names used by virtually every FT setup.
If those names aren't there, the FT section isn't shown at all.

If an avatar's Auto Fix preset registers FT BlendShapes under different names, those are picked up too.

## Why normal mode and Bake mode default the opposite way

Most FT avatars are built so that **an FT-side animation zeroes out the BlendShapes your expression edit moved**.

- In **normal mode** that zeroing keeps working. Fixing it here too would be doing it twice, so the default is "**Don't include**"
- In **Bake mode** the edited state is baked into the mesh itself. Zeroing a baked shape doesn't bring the face back, so it has to be fixed on this side — hence "**Include in fix**" by default

→ For the full comparison: [Bake Mode vs Normal Mode](/en/guide/bake-vs-normal)

## What this does and doesn't fix

::: warning The fix stops at the avatar's BlendShapes
Avatar Blink Fix rebuilds the **BlendShapes your avatar has**.
It does not change your FT addon's animations or settings.
:::

- ✅ Rebuilds FT eye-close BlendShapes broken by expression editing
- ❌ Does not rewrite the animations inside an FT addon
- ❌ Does not counter webcam blink tracking → [FAQ](/en/faq#webcam)

If symptoms remain even with "Include in fix", check your **FT addon's own settings**.

## After you redo your expression edits

FT BlendShapes need to be re-recorded like everything else. Press "**Reload Expression**".

→ Steps: [Auto Fix: Redoing your expression edits later](/en/guide/auto-fix#redoing-your-expression-edits-later)

## Still not solved?

- [Eyes sink in when smiling after installing an FT addon](/en/faq#ft-addon)
- [Webcam blink tracking breaks the eyes](/en/faq#webcam)
- If none of these help, please [get in touch](/en/faq#contact)
