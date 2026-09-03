# Mesh Swap (Legacy)

This method creates a fixed mesh and swaps it into the avatar.<br>
It uses the same workflow as 2.x.

Use it without NDMF or when combining Avatar Blink Fix with Avatar Mouth Fix.<br>
Otherwise, the right-click [Auto Fix](/en/guide/auto-fix) is recommended.

## ① Open the window

Open Tools → Avatar Blink Fix from Unity's top menu.

1. Select the [Mesh Swap (Legacy)] tab
2. Drag your avatar from the Hierarchy into [① Avatar Prefab]

![Mesh Swap window with the avatar and face mesh assigned](/images/meshswap-window.png)

## ② Fix the blink

<div class="usage-branch">

### With a preset

Select the avatar in the preset field and press [Auto Fix].

</div>

<div class="usage-branch">

### Without a preset

Select items in [③ BlendShapes Deforming Eyes] and [④ BlendShapes to Fix], then run the fix.<br>
Choose the same types of items described in [Manual Fix](/en/guide/manual-fix).

</div>

When the fix finishes, the face mesh is replaced with the fixed version.<br>
For expression animation checks and uploading, follow step ③ onward in [The Full Workflow](/en/guide/workflow).

## Restoring the avatar

Press [Restore Original] in the window.<br>
To redo expression edits, restore first, edit the expression, then apply the fix again.

Fix records are saved per avatar name.<br>
Before duplicating or renaming an avatar, press [Restore Original].<br>
Apply the fix again after duplicating or renaming it.

Restore the avatar before deleting its record from [Saved Data] as well.<br>
Deleting the record while the mesh is still fixed removes the original mesh location, so the tool can no longer restore it.

## When combining with Avatar Mouth Fix

Apply Normal Fix in Mesh Swap first, then use Avatar Mouth Fix.<br>
Combining it with non-destructive fixes or Bake Fix is not supported.

If Avatar Mouth Fix is installed, the right-click [自動修正（推奨）] (Auto Fix – Recommended) asks whether you want to use both tools.

- **[Use Mouth Fix too]:** Runs Normal Fix in Mesh Swap
- **[Use Blink Fix only]:** Runs the usual non-destructive fix

## Other features

<div class="usage-branch">

### Bake Fix

Mesh Swap can also bake the edited expression before fixing.<br>
This may reduce breakage caused by conflicts with expression animations.

Note: Bake Fix is a Complete Edition feature. Use Normal Fix when combining with Avatar Mouth Fix.

</div>

<div class="usage-branch">

### ⑤ Fine-tune mode

Adjust the fix result for each BlendShape.<br>
Settings can be exported to and imported from JSON for use with another edited avatar.

</div>

<div class="usage-branch">

### ⑥ Blink animation combine

Combine blinking with expression animations.<br>
See [Merging Blinks into Expression Animations](/en/guide/animation) for the steps.

</div>
