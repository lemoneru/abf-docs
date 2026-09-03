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

Editing an avatar's facial expressions can break its eye BlendShapes. In-game, the eyes may look crushed or may not close fully.
Avatar Blink Fix repairs the eye BlendShapes that cause these problems.

<div class="figure-sm">

![Easily fix BlendShapes broken by expression editing](/images/before-after.jpg)

</div>

To fix an avatar, right-click it in the Hierarchy and choose "Avatar Blink Fix" → "**自動修正（推奨）**" (Auto Fix – Recommended).
Auto Fix presets support more than 100 avatars, so most supported avatars can be fixed right away.
For an avatar without a preset, select the items you want to fix.

The Complete Edition can also fix winks, MMD BlendShapes, and face-tracking BlendShapes.

::: tip This tool repairs BlendShapes
This tool does not edit animations. Depending on the avatar's animation setup, the result may not work exactly as expected.

If an animation conflicts with the fix, [Bake Mode](/en/guide/bake), added in 3.0, may reduce the breakage.

If the fix does not work or you are unsure what to do, see the [FAQ](/en/faq).
:::

## Try it for free

The free edition can repair the BlendShape used for a regular blink. You can use the fixed avatar in-game as-is.

The Complete Edition can repair all the eye-closing BlendShapes you need, including regular blinks, winks, MMD BlendShapes, and face-tracking BlendShapes.
If an Auto Fix preset is available, Auto Fix repairs all the necessary BlendShapes at once.

→ [Free vs Complete Edition](/en/guide/editions) (which one do you need?)
→ [Installation](/en/guide/install)

## VPM repository support (new in 3.0)

Unless you have a specific reason not to, install through VCC / ALCOM. You can install the latest Avatar Blink Fix and Auto Fix presets together.

**→ [Add to VCC / ALCOM](/en/add)**

![ALCOM package management screen showing the Avatar Blink Fix row and add button](/images/alcom-add-package.png)

::: tip Coming from 2.x?
**Upgrading to 3.0 is free of charge.** Avatars you already fixed with 2.x keep working as they are.

For what to do when the "Migrate to the new Avatar Blink Fix" dialog appears, and a summary of what changed:
→ [Coming from 2.x (migrating to 3.0)](/en/guide/from-2x)
:::

## How to use

Right-click your avatar in the Hierarchy and choose "Avatar Blink Fix" → "**自動修正（推奨）**" (Auto Fix – Recommended). An Avatar Blink Fix object is added under the avatar, and the fix is complete.

Once the object is added, the BlendShapes appear in their fixed state. To stop using the fix, delete that object. The avatar then returns to its original state.

→ [Step-by-step workflow](/en/guide/workflow)

If something doesn't work, or you want finer control:

- [Bake Mode](/en/guide/bake) … when expression animations conflict with the fix. May reduce animation-caused breakage
- [Manual Fix](/en/guide/manual-fix) … for avatars without an Auto Fix preset
- [Mesh Swap (Legacy)](/en/guide/meshswap) … the classic 2.x-style workflow

## When something goes wrong

- Start with the [FAQ](/en/faq) — sorted by how often each question comes up
- Still stuck? Message us on [BOOTH](https://lemoneru.booth.pm/items/7074770). Pasting the output of **[Support Information]** from the tool tells us your situation right away and speeds things up
