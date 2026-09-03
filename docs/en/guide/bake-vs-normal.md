# Bake vs Normal Mode

Normal Mode rebuilds the eye-closing BlendShapes to match your edited expression.<br>
Bake Mode bakes the edited shape into the mesh before applying the fix.

## Which should I use?

<div class="usage-branch">

### Editing the expression animations yourself

Use [Auto Fix in Normal Mode](/en/guide/auto-fix).<br>
The free edition can fix one BlendShape used for regular blinking.

See [The Full Workflow](/en/guide/workflow) for precautions when reusing existing expression animations.

</div>

<div class="usage-branch">

### Using the avatar's default expression animations

[Bake Mode](/en/guide/bake) is recommended if you want to keep the expression animations unchanged.<br>
It may also reduce breakage if the eyes look wrong in-game with Normal Mode.

Note: Bake Mode is a Complete Edition feature. Use it for edits with values above 100 or negative values as well.

</div>

If Normal Mode already works well, there is no need to switch.

## What changes

| | Normal Mode | Bake Mode |
|---|---|---|
| Expression edits | Uses the edited BlendShape values | Bakes the edited shape as the shape at value 0 |
| Expression animations | May conflict, depending on their settings | May reduce breakage caused by conflicts |
| Values above 100 or negative values | Cannot reproduce them | Can reproduce them |
| FT BlendShapes by default | Excluded from the fix | Included in the fix |
| Preview | Shows the fixed expression | Baked BlendShapes read 0 while still showing the edited expression |

Neither mode overwrites the original mesh.<br>
Delete the added Avatar Blink Fix object to restore the avatar.

## Switching modes

Press [Switch to Bake mode] in the Normal Mode Inspector.<br>
Your selections and settings carry over.

Bake Mode may include edits outside the eyes.<br>
Check [Bake Range] after switching.

## Using other tools and edits

- **Face tracking:** Try Bake Mode if you do not adjust expression animations yourself. Normal Mode may fit better if your FT addon corrects the expression through zero-value animation curves. See [Using Face Tracking](/en/guide/face-tracking).
- **Avatar Mouth Fix:** Use [Normal Fix in Mesh Swap](/en/guide/meshswap#when-combining-with-avatar-mouth-fix). Combining it with non-destructive fixes or Bake Fix is not supported.

If [自動修正（推奨）] (Auto Fix – Recommended) is unavailable, use [Manual Fix](/en/guide/manual-fix) to select the required items.
