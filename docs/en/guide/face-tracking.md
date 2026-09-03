# Using Face Tracking

Avatar Blink Fix can also repair face-tracking (FT) eye-close BlendShapes affected by expression edits.<br>
It does not change your FT addon's animations or settings.

Note: Fixing FT BlendShapes is a Complete Edition feature. These settings do not appear in the free edition.

## Choosing the fix

| Your setup | Suggested setting |
|---|---|
| You do not adjust expression animations yourself | Bake Mode with FT BlendShapes included |
| Your FT addon corrects the expression through zero-value animation curves | Normal Mode with FT BlendShapes excluded |
| Normal Auto Fix already works well | Keep your current settings |

If eye closing looks wrong in-game, switch between [Include in fix] and [Don't include] and compare the result.<br>
The best setting depends on the avatar and FT addon.

## Where to change the setting

Select the Avatar Blink Fix object and find [Face Tracking BlendShapes] in the Inspector.

- **[Include in fix]:** Repairs FT eye-close BlendShapes too
- **[Don't include]:** Leaves FT eye-close BlendShapes unchanged

The [Also fix Face Tracking BlendShapes] checkbox under [Advanced Settings] changes the same setting.

::: details If the setting does not appear
The tool checks for `EyeClosedLeft` or `EyeClosedRight` on the face mesh, or FT BlendShapes registered in the preset.<br>
The setting is hidden if no matching shapes are found.
:::

## Normal Mode and Bake Mode

<div class="usage-branch">

### Normal Mode

The default is [Don't include].<br>
If the FT addon uses animations to reset the edited BlendShapes to 0 as its correction, that mechanism can keep working.

If the tool reports that it detected an FT-side animation, start by checking the result with [Don't include].

</div>

<div class="usage-branch">

### Bake Mode

The default is [Include in fix].<br>
The edited shape is baked into the mesh, so setting BlendShapes to 0 from the FT side no longer restores the pre-bake shape.

Avatar Blink Fix therefore repairs FT eye-close BlendShapes as well.<br>
See [Bake Mode](/en/guide/bake) for how to switch.

</div>

## After redoing expression edits

Stop the preview before editing, then press [Reload Expression].<br>
The FT BlendShapes are also fixed again to match the updated expression.

## When the fix does not work

If symptoms remain with [Include in fix], check your FT addon's settings too.

- [Eyes sink in when smiling after installing an FT addon](/en/faq#ft-addon)
- [Webcam blink tracking breaks the eyes](/en/faq#webcam)

If the problem remains, please [get in touch](/en/faq#contact).
