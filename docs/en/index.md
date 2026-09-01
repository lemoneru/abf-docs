---
aside: false

hero:
  name: Avatar Blink Fix
  tagline: Repairs eye BlendShapes broken by facial expression editing
  image:
    src: /images/abf-thumbnail.jpg
    alt: Avatar Blink Fix
  actions:
    - theme: brand
      text: Add to VCC / ALCOM
      link: /en/add
    - theme: alt
      text: How to Use
      link: /en/guide/workflow
    - theme: alt
      text: Get it on BOOTH
      link: https://lemoneru.booth.pm/items/7074770

---

<HomeTop />

## What is Avatar Blink Fix?

When you edit your avatar's facial expressions, **the blink and eye-closing BlendShapes can break**.
You finally get the face you want — and then in-game, the eyelids clip through the eyes or never fully close.
Avatar Blink Fix repairs the eye BlendShapes that cause this.

<div class="figure-sm">

![Easily fix BlendShapes broken by expression editing](/images/before-after.jpg)

</div>

All you do is right-click your avatar in the Hierarchy and choose Auto Fix.
Auto Fix presets are bundled for more than 100 avatars, so you don't even need to pick which BlendShapes to fix.
The Complete Edition can also fix MMD BlendShapes and face-tracking eye-close BlendShapes.

**Your original avatar is never rewritten.** The fix is applied only at upload time.
Delete the added object and everything is back to normal.

::: tip What gets fixed is the BlendShape
This tool repairs the eye BlendShapes themselves. How things look in-game also depends on how your expression animations are set up.

If an animation conflicts with the fix, [Bake mode](/en/guide/bake) may reduce the breakage.
:::

## Free to use

The free edition lets you try fixing your usual blink. Preview and restore are included.

The Complete Edition can fix **other eye-closing expressions as well**, including winks, smiling eyes, MMD, and face tracking. If an expression animation conflicts with the fix, Bake Mode may reduce the breakage.

→ [Free vs Complete Edition](/en/guide/editions) (which one do you need?)
→ [Installation](/en/guide/install)

## VPM repository support (new in 3.0)

Unless you have a specific reason not to, install via VCC / ALCOM. No more re-importing a unitypackage for every update, and the Auto Fix presets are updated together with the tool.

**→ [Add to VCC / ALCOM](/en/add)**

![ALCOM package management screen showing the Avatar Blink Fix row and add button](/images/alcom-add-package.png)

::: tip Coming from 2.x?
**Upgrading to 3.0 is free of charge.** Avatars you already fixed with 2.x keep working as they are.

For what to do when the "Migrate to the new Avatar Blink Fix" dialog appears, and a summary of what changed:
→ [Coming from 2.x (migrating to 3.0)](/en/guide/from-2x)
:::

## How to use

Right-click your avatar in the Hierarchy and choose "Avatar Blink Fix" → "**自動修正（推奨）**" (Auto Fix – Recommended). That's the whole job.

![Right-clicking an avatar in the Hierarchy and choosing Avatar Blink Fix, then Auto Fix (Recommended)](/images/context-menu-guide.svg)

Preview turns on automatically, so you can check the fixed face on the spot.
Then upload as usual — the fix is applied automatically.
→ Details: [Auto Fix (Recommended)](/en/guide/auto-fix)

For the full flow from expression editing to checking in-game → [The Full Workflow](/en/guide/workflow)

If something doesn't work, or you want finer control:

- [Bake Mode](/en/guide/bake) … when expression animations conflict with the fix. May reduce animation-caused breakage (→ [Bake vs Normal Mode](/en/guide/bake-vs-normal))
- [Manual Fix](/en/guide/manual-fix) … for avatars without an Auto Fix preset
- [Mesh Swap (Legacy)](/en/guide/meshswap) … the classic 2.x-style workflow

## When something goes wrong

- Start with the [FAQ](/en/faq) — sorted by how often each question comes up
- Still stuck? Message us on [BOOTH](https://lemoneru.booth.pm/items/7074770). Pasting the output of **[Support Information]** from the tool tells us your situation right away and speeds things up
