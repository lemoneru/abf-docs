# Using Face Tracking

[Bake Mode](/en/guide/bake) is recommended when using face tracking.

Avatar Blink Fix can also repair face-tracking (FT) eye-close BlendShapes affected by expression edits.<br>
It does not change your FT addon's animations or settings.

Note: Fixing FT BlendShapes is a Complete Edition feature. These settings do not appear in the free edition.

## Fixing the avatar

1. Right-click the avatar in the Hierarchy and choose [Avatar Blink Fix] → [自動修正（ベイクモード）] (Auto Fix – Bake Mode)
2. Select the added object and check that FT BlendShapes are set to [Include in fix] in the Inspector
3. Upload and check eye closing in-game

If you already use Normal Mode, press [Switch to Bake mode].<br>
The right-click menu is displayed in Japanese.

## Where to change the setting

Select the Avatar Blink Fix object and find [Face Tracking BlendShapes] in the Inspector.

- **[Include in fix]:** Repairs FT eye-close BlendShapes too
- **[Don't include]:** Leaves FT eye-close BlendShapes unchanged

The [Also fix Face Tracking BlendShapes] checkbox under [Advanced Settings] changes the same setting.

::: details If the setting does not appear
The tool checks for `EyeClosedLeft` or `EyeClosedRight` on the face mesh, or FT BlendShapes registered in the preset.<br>
The setting is hidden if no matching shapes are found.
:::

## FT fixes in Bake Mode

Bake Mode sets FT BlendShapes to [Include in fix] by default.<br>
The edited shape is baked into the mesh, so setting BlendShapes to 0 from the FT side no longer restores the pre-bake shape.

Avatar Blink Fix therefore repairs FT eye-close BlendShapes as well.

## After redoing expression edits

Stop the preview before editing, then press [Reload Expression].<br>
The FT BlendShapes are also fixed again to match the updated expression.

## When the fix does not work

If symptoms remain with [Include in fix], check your FT addon's settings too.

- [Eyes sink in when smiling after installing an FT addon](/en/faq#ft-addon)
- [Webcam blink tracking breaks the eyes](/en/faq#webcam)

If the problem remains, please [get in touch](/en/faq#contact).
