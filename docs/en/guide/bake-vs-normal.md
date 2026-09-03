# Choosing a Fix Mode

Right-click your avatar and choose the fix that suits your setup under [Avatar Blink Fix].

## Choose for your setup

<div class="usage-branch">

### Auto Fix (Recommended)

If you edit expression animations yourself and do not use face tracking, use [Auto Fix (Recommended)](/en/guide/auto-fix).<br>
The free edition can fix one BlendShape used for regular blinking.

See [The Full Workflow](/en/guide/workflow) for precautions when reusing existing expression animations.

</div>

<div class="usage-branch">

### Auto Fix (Bake Mode)

[Bake Mode](/en/guide/bake) is recommended when using face tracking.<br>
Use it when keeping the avatar's original expression animations unchanged as well.

It may also reduce breakage if the eyes look wrong in-game with Auto Fix (Recommended).

Note: Bake Mode is a Complete Edition feature. Use it for edits with values above 100 or negative values as well.

</div>

## What changes

| | Auto Fix (Recommended) | Auto Fix (Bake Mode) |
|---|---|---|
| Expression edits | Uses the edited BlendShape values | Bakes the edited shape as the shape at value 0 |
| Expression animations | May conflict, depending on their settings | May reduce breakage caused by conflicts |
| Values above 100 or negative values | Cannot reproduce them | Can reproduce them |
| FT BlendShapes by default | Excluded from the fix | Included in the fix |
| Preview | Shows the fixed expression | Baked BlendShapes read 0 while still showing the edited expression |

Neither mode overwrites the original mesh.<br>
Delete the added Avatar Blink Fix object to restore the avatar.

## Switching modes

Select the object added by Auto Fix (Recommended), then press [Switch to Bake mode] in its Inspector.<br>
Your selections and settings carry over.

Bake Mode may include edits outside the eyes.<br>
Check [Bake Range] after switching.

## Using other tools and edits

- **Face tracking:** Use Bake Mode with FT BlendShapes set to [Include in fix]. See [Using Face Tracking](/en/guide/face-tracking) for the settings.
- **Avatar Mouth Fix:** Use [Normal Fix in Mesh Swap](/en/guide/meshswap#when-combining-with-avatar-mouth-fix). Combining it with non-destructive fixes or Bake Fix is not supported.

If [自動修正（推奨）] (Auto Fix – Recommended) is unavailable, use [Manual Fix](/en/guide/manual-fix) to select the required items.
