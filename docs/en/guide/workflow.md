# The Full Workflow

Edit your avatar's expression, fix the blink, then check the expression animations before uploading.<br>
If you haven't installed the tool yet, see [Installation](/en/guide/install).

## ① Edit the expression

Adjust the avatar's BlendShapes to create the expression you want.<br>
Avatar Blink Fix repairs the blink to match this edited expression.

If the avatar already has an Avatar Blink Fix setup, follow "Redoing your expression edits later" below.

## ② Fix the blink

Right-click your avatar in the Hierarchy and choose [Avatar Blink Fix] → [自動修正（推奨）] (Auto Fix – Recommended).<br>
An Avatar Blink Fix object is added inside the avatar, and you can preview the fixed expression.

Select the added object and check the fix settings in the Inspector.<br>
If the button says [Stop preview], the preview is ON.

![Avatar Blink Fix Inspector with the Reload Expression and Stop preview buttons](/images/easy-normal.png)

If [自動修正（推奨）] is grayed out, no matching preset was found.<br>
Use [Manual Fix](/en/guide/manual-fix) and select the required items.

If you cannot find the right-click menu, you can also open the tool from Tools → Avatar Blink Fix at the top of Unity.<br>
The right-click menu is shown in Japanese even when the tool's Language setting is English.

## ③ Check the expression animations

Check the expression animations before uploading.<br>
The steps depend on whether you keep the avatar's original animations or edit them yourself.

<div class="usage-branch">

### Using the avatar's default expression animations

[Bake Mode](/en/guide/bake) is recommended if you want to use the animations unchanged.<br>
Select the added Avatar Blink Fix object and press [Switch to Bake mode] in the Inspector.

It may reduce breakage caused by conflicts with expression animations.

Note: Bake Mode is a Complete Edition feature.

</div>

<div class="usage-branch">

### Editing the expression animations

Use FaceEmo or a similar tool, or edit the animation files manually.<br>
We recommend creating your expression animations from scratch.

If you reuse animations included with the avatar, remove entries that hold a corrected BlendShape at 0.<br>
Leaving them in may cause a conflict with the corrected BlendShape.

Note: Remove only the affected BlendShape entries (curves), not the whole animation file.

If "conflict with expression animations" appears, check for these entries as well.

</div>

## ④ Upload and check in-game

Upload the avatar through the VRChat SDK as usual.<br>
The fix is applied at upload time even if the preview is OFF.

Check the blink and expressions in VRChat. If everything looks right, you're done.

If the eyes look wrong in-game, there may be a conflict with an expression animation.<br>
If you use normal mode, check for remaining zero-value entries or try switching to Bake Mode.

## Redoing your expression edits later

Turn the preview OFF before adjusting the face's BlendShapes again.

1. Press [Stop preview] in the Avatar Blink Fix Inspector
2. Edit the expression
3. Press [Reload Expression]

You can also delete the Avatar Blink Fix object, edit the expression, then run Auto Fix again when you're done.

To restore the avatar to its state before the fix, delete the added Avatar Blink Fix object.

## Quick reference

| Your setup | Method or instructions |
|---|---|
| Using values above 100 or negative values | Use Bake Mode. Normal mode cannot reproduce these values |
| Using Avatar Mouth Fix | Use [Normal Fix in Mesh Swap](/en/guide/meshswap#when-combining-with-avatar-mouth-fix) |
| Not using NDMF, or keeping the 2.x-style workflow | Use [Mesh Swap (Legacy)](/en/guide/meshswap) |
| Using face tracking | See [Using Face Tracking](/en/guide/face-tracking) |
| Using a tool that adds BlendShapes | See [Using Tools That Add BlendShapes](/en/guide/added-blendshapes) |

If the fix does not work as expected, see the [FAQ](/en/faq).
