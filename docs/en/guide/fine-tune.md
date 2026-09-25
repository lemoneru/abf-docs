---
title: Fine-tune or Replace BlendShapes
---

# Fine-tune or Replace BlendShapes

::: info Available in 3.0.17 and later
Update to 3.0.17 or later through VCC / ALCOM to use this window.
:::

Choose a BlendShape and adjust its shape while watching the preview.<br>
Weaken the original shape, add another shape, or replace it to get the result you want.

This feature is available in the Complete Edition.<br>
It works with both Auto Fix (Recommended) and Auto Fix (Bake Mode).

## ① Open fine-tuning

1. Select the Avatar Blink Fix object inside your fixed avatar.
2. Open [Advanced Settings] in the Inspector, then press [Fine tune or replace BlendShapes] near the bottom.
3. Find the BlendShape in the list of face thumbnails and press [Edit]. You can also search by name.

The initial list shows the BlendShapes selected for automatic correction.<br>
Check the blue [Editing] section to see which BlendShape you are changing.

### Choose any BlendShape {#other-blendshapes}

::: info Coming in a future update
The target selection described below is not included in the public 3.0.17 release.
:::

You can choose any BlendShape on the same mesh and adjust its resulting shape.

1. Open [Advanced options] below the search box in the list.
2. Turn on [Show BlendShapes outside the correction targets].
3. Find the shape under [Other BlendShapes] and press [Edit].

You do not need to add it to the automatic correction targets.<br>
The selected BlendShape keeps its name, while its shape becomes the one you create in this window.

## ② Adjust the shape

Use whichever options you need.

### Weaken the original shape

Adjust [Original shape strength] from 0 to 100%.<br>
For example, lower the value while watching the face if you want to soften an eye-closing shape.

At 0%, the original deformation is removed, while any shapes you added remain.

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

To include any BlendShape in the replacement candidates, enable [Show BlendShapes outside the correction targets] in the list (the upcoming feature described above).

## ③ Save your changes

When the shape looks right, press [Save changes].<br>
Your adjustments are saved to the Avatar Blink Fix settings and used in the corrected result. Save your Unity scene afterward as well.

Use [Back to list] to choose another BlendShape.<br>
Turning off [Show BlendShapes outside the correction targets] does not remove saved adjustments.

After saving, check blinking and expression animations.<br>
This feature changes BlendShape shapes. It does not change values or movements in animation files.

## Undo adjustments

To reset one BlendShape, set [Original shape strength] back to 100% and remove any added shapes with [×].<br>
If you also replaced its shape, press [Restore corrected shape], then press [Save changes].

[Reset all] in the list clears all adjustments and replacements made in this window, including hidden entries.<br>
Press [Save changes] to keep the reset settings.

::: details If a multi-frame warning appears
For BlendShapes with multiple shape frames, fine-tuning changes only the first frame. Added and replacement shapes also use their first frame.<br>
Later frames stay unchanged, so the shape at 100% may not change. Check the result at the values you actually use.
:::
