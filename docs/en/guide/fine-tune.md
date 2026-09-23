---
title: Fine-tune or Replace BlendShapes
---

# Fine-tune or Replace BlendShapes

::: info Not yet released
This page describes the new fine-tuning window. Its interface and steps differ from the public 3.0.16 release.
:::

Adjust corrected blinks and winks to get the look you want.<br>
You can soften how the eyes close or replace a blink with smiling eyes.

This feature is available in the Complete Edition.<br>
It works with both Auto Fix (Recommended) and Auto Fix (Bake Mode).

## ① Open fine-tuning

1. Select the Avatar Blink Fix object inside your fixed avatar.
2. Open [Advanced Settings] in the Inspector, then press [Fine tune or replace BlendShapes] near the bottom.
3. Find the BlendShape in the list of face thumbnails and press [Edit]. You can also search by name.

The shape corrected by ABF starts at 100%.<br>
Check the blue [Editing] section to see which BlendShape you are changing.

## ② Adjust the shape

Use whichever options you need.

### Weaken the original shape

Adjust [Original shape strength] from 0 to 100%.<br>
For example, lower the value while watching the face if you want to soften an eye-closing shape.

At 0%, the original closing shape is removed, while any shapes you added remain.

### Add another shape

Expand [Add another shape] and choose a BlendShape to add.<br>
Hover over a name to temporarily preview it added at 50%. Moving the pointer away restores the view. Hovering alone does not change your settings.

After selecting a shape, adjust its value and the area it affects: [Both], [Left], or [Right].<br>
For example, add a little of an eye-area shape to change how the eyes look when closed.

### Replace with another shape

Press [Choose] under [Replace with another shape] to show the available fix targets.<br>
Hover over a candidate to preview the replacement, then click the one you want to use.

For example, you can replace a blink with smiling eyes.<br>
Only the shape changes. The name of the BlendShape you are editing stays the same.

Press [Restore corrected shape] to remove the replacement.

## ③ Save your changes

When the shape looks right, press [Save changes].<br>
Your adjustments are saved to the Avatar Blink Fix settings and used in the corrected result. Save your Unity scene afterward as well.

Use [Back to list] to choose another BlendShape.<br>
[Reset all] in the list clears all adjustments and replacements made in this window. Press [Save changes] again if you want to keep the reset settings.

After saving, check blinking and expression animations.<br>
This feature changes BlendShape shapes. It does not change values or movements in animation files.
