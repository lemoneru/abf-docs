# Using Tools That Add BlendShapes

Finish edits that add or change BlendShapes before applying Avatar Blink Fix.<br>
Then run [Auto Fix](/en/guide/auto-fix).

## Adding BlendShapes after fixing

1. Press [Stop preview] in the Avatar Blink Fix Inspector
2. Add or change the BlendShapes
3. Press [Reload Expression]

Reload after removing BlendShapes as well.

::: warning If you use Mesh Swap
Use [Restore Original] to return to the original mesh before making additions or changes.<br>
Adding directly to a fixed mesh may leave those additions out of the saved fix record.

If you have already added them, see [Handling added BlendShapes](/en/faq#added-shapes).
:::

## Other situations

<div class="usage-branch">

### Auto Fix is grayed out

Changing the BlendShape structure can make a preset stop matching.<br>
Update the tool and presets to the latest version.

If Auto Fix is still unavailable, use [Manual Fix](/en/guide/manual-fix) to select the required items.

</div>

<div class="usage-branch">

### The face mesh is missing or the wrong one is selected

Check [手動設定] (Manual) next to [顔のメッシュ（自動選択）] (Face mesh – auto) in the Inspector.<br>
You can then assign the face mesh directly.

See [Selecting the face mesh manually](/en/faq#face-not-found) for details.

</div>
