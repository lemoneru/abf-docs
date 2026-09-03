# Auto Fix (Recommended)

[Which Mode Should I Use?](/en/guide/bake-vs-normal)

Use a matching preset to fix your avatar's blink automatically.<br>
Finish your expression edits before running the fix.

## ① Run Auto Fix

Right-click your avatar in the Hierarchy and choose [Avatar Blink Fix] → [自動修正（推奨）] (Auto Fix – Recommended).<br>
An Avatar Blink Fix object is added inside the avatar, and the fixed expression appears.

If the menu item is grayed out, use [Manual Fix](/en/guide/manual-fix) to select the required items.<br>
The right-click menu is displayed in Japanese.

## ② Check the fixed expression

Select the added object to open its Inspector.<br>
If the button says [Stop preview], the preview is ON.

![Auto Fix Inspector with the Reload Expression and Stop preview buttons](/images/easy-normal.png)

Check that the eyes close properly when blinking or winking.<br>
The fix is applied at upload time even if you turn the preview OFF.

See [The Full Workflow](/en/guide/workflow) for checking expression animations before uploading.

## Redoing your expression edits later

Turn the preview OFF before adjusting the face's BlendShapes again.

1. Press [Stop preview] in the Inspector
2. Edit the expression
3. Press [Reload Expression]

You can also delete the object, edit the expression, then run Auto Fix again when you're done.

::: details Running Auto Fix again without deleting the object
A dialog asks whether to replace the existing component.<br>
Press [Replace] to rebuild the settings from the current expression.
:::

## Restoring the avatar

Delete the added Avatar Blink Fix object.<br>
The original mesh is not overwritten, so the avatar returns to its state before the fix.

## Other situations

<div class="usage-branch">

### Conflicts with expression animations

An expression animation that controls a BlendShape being fixed can cause the eyes to look wrong in-game.

If you want to keep the original expression animations unchanged, try [Switch to Bake mode].<br>
Your settings carry over to [Bake Mode](/en/guide/bake), which may reduce the breakage.

Note: Bake Mode is a Complete Edition feature. Use it for edits with values above 100 or negative values as well.

</div>

<div class="usage-branch">

### Using face tracking

Bake Mode is recommended when using face tracking.<br>
Press [Switch to Bake mode] in the Inspector.

See [Using Face Tracking](/en/guide/face-tracking) for the FT BlendShape settings.

</div>

If a preset is missing for a supported avatar, see the [FAQ](/en/faq#preset-missing).
