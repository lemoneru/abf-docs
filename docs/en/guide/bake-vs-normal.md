# How to Choose a Fix Mode

<div class="mode-choice">

- You edit the avatar's expression and create the expression animations yourself

## → [Auto Fix (Recommended)](/en/guide/auto-fix)

If you use face tracking or values outside 0–100, use Bake Mode below.

</div>

<div class="mode-choice">

- You edit the avatar's expression but reuse its original expression animations instead of creating your own
- You use face tracking
- Your expression edits use values above 100 or negative values
- You see animation conflicts or other problems in-game after using Auto Fix (Recommended)

## → [Auto Fix (Bake Mode)](/en/guide/bake)

Note: Bake Mode is a Complete Edition feature.

</div>

## Switching modes

Select the Avatar Blink Fix object added by Auto Fix, then press [Switch to Bake mode] in its Inspector.<br>
Your selections and settings carry over.

If the avatar behaves unexpectedly in-game after using Auto Fix (Recommended), try switching to Bake Mode.<br>
It may reduce breakage caused by conflicts with expression animations.

## Using Avatar Mouth Fix

Use [Normal Fix in Mesh Swap](/en/guide/meshswap#when-combining-with-avatar-mouth-fix).<br>
Combining Avatar Mouth Fix with non-destructive fixes or Bake Fix is not supported.

## When Auto Fix is unavailable

Auto Fix is unavailable when there is no matching Auto Fix preset for your avatar.<br>
Use [Manual Fix](/en/guide/manual-fix) to select the required items and apply the fix.
