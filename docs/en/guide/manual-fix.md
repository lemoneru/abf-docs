# Manual Fix (for avatars without a preset)

You can fix an avatar without a preset by selecting the required items.<br>
Choose the BlendShapes used to reshape the eyes and the BlendShapes you want to fix.

## ① Open Manual Fix

Finish your expression edits, then right-click the avatar in the Hierarchy.<br>
Choose [Avatar Blink Fix] → [手動修正] (Manual Fix). An object is added, and [Advanced Settings] opens in its Inspector. The right-click menu is displayed in Japanese.

The lists can be edited while [Edit manually] is checked.<br>
Check it if it is OFF. The preview pauses while you edit.

Note: Manual Fix is also available for avatars that have a preset.

## ② Select items in both lists

<div class="usage-branch">

### BlendShapes Deforming Eyes

Select the BlendShapes whose values you changed to reshape the eyes.<br>
Without a preset, you need to fill in this list yourself.

- Eye size and openness
- Upturned or drooping eyes
- Eyelid and eyelash positions

Do not select unchanged shapes or ones unrelated to the eyes, such as the mouth and brows.<br>
Use the slider values to check which shapes you edited.

</div>

<div class="usage-branch">

### BlendShapes to Fix

Select the blink and eye-closing BlendShapes you want to repair.<br>
Common names such as `vrc.blink` are selected automatically even without a preset.

Check regular blinking first, then add winks or smiling eyes if needed.<br>
For half-closed eyes, narrowed eyes, or eyelash adjustments, try one at a time and check the result.

| Name color | Meaning |
|---|---|
| Cyan | Recommended candidates |
| Gray | Unavailable. This includes shapes used in your expression edits or selected in the list above |

Note: The free edition can fix one regular-blink BlendShape. Additional fixes, such as winks, require the Complete Edition.

</div>

## ③ Check the preview

Uncheck [Edit manually] and press [Preview the fix].<br>
Check that the eyes close properly when blinking or winking.

If the result is not what you wanted, turn [Edit manually] back ON and adjust the lists in step ②.

::: details If the button says [Load the expression and preview]
This appears when [BlendShapes Deforming Eyes] has no entries.<br>
Pressing it reloads the avatar's expression before starting the preview.

If no eye deformation is found, check the face's BlendShape values and the items you selected in step ②.
:::

After fixing, follow [The Full Workflow](/en/guide/workflow) to check expression animations and upload.

## Starting over

Press [Reload Expression] to start your selection over.<br>
Your manual selections are replaced with the automatic settings for the avatar.

If you want to edit the face's BlendShapes themselves, stop the preview first.<br>
See [Redoing your expression edits later](/en/guide/auto-fix#redoing-your-expression-edits-later) for the steps.

To restore the avatar, delete the added Avatar Blink Fix object.

## When the fix does not work

- [No eye deformation found](/en/faq#no-modification)
- [Face mesh not found, or the wrong mesh is selected](/en/faq#face-not-found)
- [A BlendShape cannot be selected for fixing](/en/faq#used-in-expression)

## Making your own presets

The free [BlendShapeChecker](https://lemoneru.booth.pm/items/8361673) tool can export Auto Fix presets.<br>
This is useful when fixing the same avatar repeatedly.

Place the exported JSON directly in this folder.<br>
The tool creates the folder automatically if it does not exist.

```text
Assets/LEMONERU/Avatar Blink Fix/json
```

You are welcome to share the presets you create.
